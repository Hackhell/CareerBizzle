var express = require('express')
var app = express()

const fs = require('fs')
const path = require('path')

const sqlite3 = require('sqlite3').verbose();

var cors = require('cors');
app.use(cors({origin: '*'}));

var bodyParser = require('body-parser')
app.use( bodyParser.json( 
    {
        limit: '10mb'
    }));       // to support JSON-encoded bodies

let db = new sqlite3.Database('./CareerCousellingDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to database.');
});

app.get('/api/test', function(req, res){
    
    res.end("service is up")
})


//login 
app.post('/api/login', function(req, res){

    let reqData = req.body
    let responseObj = { success: false, message: '', user: reqData}
    console.log('login request recieved:',reqData);
    
    db.get("SELECT * FROM tbl_users WHERE name = ? and password = ?", reqData.userName, reqData.password, 
    function(err, row){
        if(err) {
            res.status(500);
            responseObj.message = 'Error occuered fetching user details'
            res.json(responseObj);
        }
        console.log(row)

        if(row === undefined) {
            console.log('user not authorised')
            res.status(200);
            responseObj.message = 'user not authorised'
            res.json(responseObj);
        } else {
            console.log('login sucessful:')
            res.status(200);
            responseObj.message = 'login sucessful'
            responseObj.user.isLoggedIn = true
            responseObj.user.fullName = row.fullName 
            res.json(responseObj);
        }
    });
});


//sign up 
app.post('/api/signup', function(req, res){
    // console.log('sign up request:',req);

    let responseObj = { success: false, message: ''}

    let reqData = req.body
    console.log('sign up request recieved:',reqData);
    
    db.get("SELECT * FROM tbl_users WHERE name = ?", reqData.userName, 
    function(err, row){
        if(err) {
            res.status(500);
            responseObj.message = 'Error occuered fetching existing users'
            res.json(responseObj);
        }
        console.log(row)

        if(row === undefined || row.length == 0) {
            // var filePath = reqData.userName + path.extname(reqData.fileURL)
            // var filePath = path.join("ProfilePics",filePath) 
            // fs.copyFile(reqData.fileURL, filePath)

            let filePath = 'ProfilePics/' + reqData.userName + '.png'
            console.log('filePath',filePath)
            const imgdata = reqData.fileURL;   
            const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            
            fs.writeFile(filePath, base64Data, 'base64', (err) => {
                console.log("file Write error",err);
            });

            db.run("INSERT INTO tbl_users (name, password, emailId, filePath, fullName)  VALUES (?, ?, ?, ?, ?)", reqData.userName, reqData.password,reqData.emailId,filePath, reqData.fullName, 
            function(err){
                if(err) {
                    res.status(500);
                    responseObj.message = 'Error occuered while sign up'
                    res.json(responseObj);
                }
                else {
                    console.log('sign up successful')
                    responseObj.success = true
                    responseObj.message = 'sign up successful'
                    res.json(responseObj);
                }
           });
        } else {
            console.log('user already available:')
            responseObj.message = 'this user is already available'
            res.json(responseObj);
        }
    });
});

app.get('/api/getProfilePic/:name', function(req, res){
    // let reqData = JSON.parse(req.params.name)
    console.log('getProfilePic for user:',req.params.name);
    let path = 'ProfilePics/' + req.params.name + '.png'

    if (fs.existsSync(path)) {
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log('error in file read');
                res.status(500);
            } else {
                console.log('File read successfull for id:',req.params.name);
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.end(data)
            }
        });
    }
    else{
        console.log('File does not exists. Returning fallback file');
        let path = 'ProfilePics/fallback_profile.png'
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log('error in file read');
                res.status(500);
            } else {
                console.log('File read successfull for name:',req.params.name);
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.end(data)
            }
        });
    }

});

//search text 
app.post('/api/search', function(req, res){

    let reqData = req.body
    console.log('search request recieved:',reqData);
    let responseObj = { success: false, message: '', searchList: []}
    
    db.all("SELECT * FROM tbl_searchResults", 
    function(err, row){
        if(err) {
            res.status(500);
            responseObj.message = 'Error occuered fetching search details'
            res.json(responseObj);
        }
        console.log(row)

        if(row === undefined) {
            console.log('no search data found')
            responseObj.success = true
            res.status(200);
            res.json(responseObj);
        } else {
            console.log('search data fetched')
            responseObj.success = true
            responseObj.message = 'searched successfully'

            responseObj.searchList = row.filter(search =>  
                search.searchText.toUpperCase().includes(reqData.searchText.trim().toUpperCase())
                )

            console.log(responseObj.searchList)    
            res.status(200);
            res.json(responseObj);
        }
    });
});

app.post('/api/addNewsFeed', function(req, res){

    let reqData = req.body
    console.log('add NewsFeed request recieved:',reqData);
    let responseObj = { success: false, message: ''}
    
    let date = new Date().toLocaleString('en-US')

    db.all("INSERT INTO tbl_newsFeed (userName, fullName, postedDate, feedHeader,feedContent, profilePicPath)  VALUES (?, ?, ?, ?, ?, ?)", reqData.userName, reqData.fullName,date,reqData.feedHeader,reqData.feedContent, reqData.profilePicPath, 
    function(err, row){
        if(err) {
            res.status(500);
            responseObj.message = 'Error occuered adding news Feeds'
            res.json(responseObj);
        } else {
            console.log('news feed added')
            responseObj.success = true
            responseObj.message = 'news feed added successfully'
            res.json(responseObj);
        }
    });
});

app.get('/api/getNewsFeed', function(req, res){

    let reqData = req.body
    console.log('getNewsFeed request recieved:',reqData);
    let responseObj = { success: false, message: '', newsFeed: []}
    
    db.all("SELECT * FROM tbl_newsFeed order by rowid desc", 
    function(err, row){
        if(err) {
            res.status(500);
            responseObj.message = 'Error occuered fetching news Feeds'
            res.json(responseObj);
        }
        console.log(row)

        if(row === undefined) {
            console.log('no news feed found')
            responseObj.success = true
            res.status(200);
            res.end(responseObj);
        } else {
            console.log('news feed fetched')
            responseObj.success = true
            responseObj.message = 'news feed fetched successfully'
            responseObj.newsFeed = row
            console.log(responseObj.newsFeed)    
            res.status(200);
            res.json(responseObj);
        }
    });
});

app.listen(process.env.PORT || 8000);
console.log('Server is running on Port 8000')
