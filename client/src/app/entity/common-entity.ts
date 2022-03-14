export class User {
    userName: string = ''
    password: string = ''
    emailId: string = ''
    fileURL: string = ''
    isLoggedIn: boolean = false
    profilePicPath: string = ''
    fullName: string = ''
}

export class SearchResult {
    searchText: string = ''
    searchComponent: string = ''
}

export class NewsFeed {
    userName: string = ''
    fullName: string = ''
    postedDate: string = ''
    feedHeader: string = ''
    feedContent: string = ''
    profilePicPath: string = ''
    callback: any = () => {}
}