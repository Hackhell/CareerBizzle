import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatDividerModule } from  '@angular/material/divider';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MatIconModule } from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExamComponent } from './pages/exam/exam.component';
import { CourseComponent } from './pages/course/course.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component'
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChildControlComponent } from './control/child-control/child-control.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AfterNineComponent } from './dashboard/after-nine/after-nine.component';
import { AfterTenthComponent } from './dashboard/after-tenth/after-tenth.component';
import { TenthFailComponent } from './dashboard/tenth-fail/tenth-fail.component';
import { TwelthFailComponent } from './dashboard/twelth-fail/twelth-fail.component';
import { TwelthPassComponent } from './dashboard/twelth-pass/twelth-pass.component';
import { TwelthDropoutComponent } from './dashboard/twelth-dropout/twelth-dropout.component';
import { InCollegeComponent } from './dashboard/in-college/in-college.component';
import { CollegeDropoutComponent } from './dashboard/college-dropout/college-dropout.component';
import { WorkingProfessionalComponent } from './dashboard/working-professional/working-professional.component';
import { StudyAbroadComponent } from './dashboard/study-abroad/study-abroad.component';
import { CareerTransitionComponent } from './dashboard/career-transition/career-transition.component';
import { EducationLoanComponent } from './dashboard/education-loan/education-loan.component';
import { OlympiadComponent } from './dashboard/olympiad/olympiad.component';
import { ScholarshipComponent } from './dashboard/scholarship/scholarship.component'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule  } from '@angular/material/input'
import { MatListModule } from '@angular/material/list';
import { GetnewsfeedComponent } from './news-feed/getnewsfeed/getnewsfeed.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppFooterComponent,
    ExamComponent,
    CourseComponent,
    NewsFeedComponent,
    FaqComponent,
    SitemapComponent,
    LoginComponent,
    SignupComponent,
    ContactFormComponent,
    AboutUsComponent,
    WorkWithUsComponent,
    DashboardComponent,
    ChildControlComponent,
    AfterNineComponent,
    AfterTenthComponent,
    TenthFailComponent,
    TwelthFailComponent,
    TwelthPassComponent,
    TwelthDropoutComponent,
    InCollegeComponent,
    CollegeDropoutComponent,
    WorkingProfessionalComponent,
    StudyAbroadComponent,
    CareerTransitionComponent,
    EducationLoanComponent,
    OlympiadComponent,
    ScholarshipComponent,
    GetnewsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
