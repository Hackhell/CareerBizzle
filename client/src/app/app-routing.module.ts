import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterNineComponent } from './dashboard/after-nine/after-nine.component';
import { AfterTenthComponent } from './dashboard/after-tenth/after-tenth.component';
import { CareerTransitionComponent } from './dashboard/career-transition/career-transition.component';
import { CollegeDropoutComponent } from './dashboard/college-dropout/college-dropout.component';
import { EducationLoanComponent } from './dashboard/education-loan/education-loan.component';
import { InCollegeComponent } from './dashboard/in-college/in-college.component';
import { OlympiadComponent } from './dashboard/olympiad/olympiad.component';
import { ScholarshipComponent } from './dashboard/scholarship/scholarship.component';
import { StudyAbroadComponent } from './dashboard/study-abroad/study-abroad.component';
import { TenthFailComponent } from './dashboard/tenth-fail/tenth-fail.component';
import { TwelthDropoutComponent } from './dashboard/twelth-dropout/twelth-dropout.component';
import { TwelthFailComponent } from './dashboard/twelth-fail/twelth-fail.component';
import { TwelthPassComponent } from './dashboard/twelth-pass/twelth-pass.component';
import { WorkingProfessionalComponent } from './dashboard/working-professional/working-professional.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { CourseComponent } from './pages/course/course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExamComponent } from './pages/exam/exam.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';

const routes: Routes = [
   {path: 'exams', component: ExamComponent}
  ,{path: 'courses', component: CourseComponent}
  ,{path: 'newsfeeds', component: NewsFeedComponent}
  ,{path: 'faq', component: FaqComponent}
  ,{path: 'sitemap', component: SitemapComponent }
  ,{path: 'login', component: LoginComponent}
  ,{path: 'signUp', component: SignupComponent}
  ,{path: 'contactform', component: ContactFormComponent}
  ,{path: 'aboutus', component: AboutUsComponent}
  ,{path: 'workwithus', component: WorkWithUsComponent}
  ,{path: '', redirectTo:'/login', pathMatch:'full'}
  ,{path: 'dashboard', component: DashboardComponent}
  ,{path: 'inSchool', component: AfterNineComponent}
  ,{path: '10thFail', component: TenthFailComponent}
  ,{path: '10thPass', component: AfterTenthComponent}
  ,{path: '11th12thFail', component: TwelthFailComponent}
  ,{path: '11th12thPass', component: TwelthPassComponent}
  ,{path: '11th12thDropout', component: TwelthDropoutComponent}
  ,{path: 'inCollege', component: InCollegeComponent}
  ,{path: 'collegeDropout', component: CollegeDropoutComponent}
  ,{path: 'workingProfessional', component: WorkingProfessionalComponent}
  ,{path: 'studyAbroad', component: StudyAbroadComponent}
  ,{path: 'careerTransitions', component: CareerTransitionComponent}
  ,{path: 'educationLoans', component: EducationLoanComponent}
  ,{path: 'olympiad', component: OlympiadComponent}
  ,{path: 'scholarships', component: ScholarshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
