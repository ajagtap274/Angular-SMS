import { ListTodosComponent} from './list-todos/list-todos.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { StudentsComponent } from './students/students.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
//localhost:4200 is the base url of this angular 
// localhost:4200/ - it redirects us to login component
// localhost:4200/login - it redirects us to login component
// localhost:4200/welcome/'some_name' - it redirects us to welcome component 
// localhost:4200/todos -it redirects us to todos component 
// localhost:4200/'Garbage_Value' - it redirects us to error component 


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'students', component:StudentsComponent, canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'addstud', component:AddStudentComponent, canActivate:[RouteGuardService]},
  {path:'student/:rollNo', component:StudentComponent, canActivate:[RouteGuardService]},
  

  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
