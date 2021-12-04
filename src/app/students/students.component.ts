import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentPayload } from '../add-student/student-payload';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studs : StudentPayload[] | any
  constructor(public http:HttpClient, public auths:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/getAllStuds").subscribe //we have to subscribe to http methods to get their return value/response
    (
      Response =>
      {
        console.log(Response);
        this.studs = Response;
      }
    )
  }
  toStudentComponent(rollNo: number)
  {
    this.router.navigate([`/student/${rollNo}`])
  }


  students=[
    {roll_no:1, fname:'Tanmay', lname:'Jagtap', maths:98,sci:98, eng:98, percentage:89.5, fail:false},
    // {id:2, description:'Become an expert at Angular'},
    // {id:3, description: 'Visit india'}
    
  ]

}
//@injectable :
//Dependency injection, or DI,
//is a design pattern in which a class requests dependencies from external sources rather than creating them. 