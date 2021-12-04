import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service.service';
import { StudentPayload } from '../add-student/student-payload';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stud : StudentPayload | any


  roll:any
  fname:any
  lname:any
  eng:any
  maths:any
  sci:any
  percent:any
  fail:any



  constructor(public http:HttpClient, public auths:AuthServiceService, public route:ActivatedRoute) { }


  rollNo=this.route.snapshot.params['rollNo'];
  ngOnInit(): void {
    this.http.get("http://localhost:8080/getStud/"+this.rollNo).subscribe
    (
      Response =>
      {
      console.log(Response);

        this.stud=Response;
     // this.stud=Response;
      //this.stud=Response;
      console.log(this.stud);

this.roll=this.stud.rollNo;
this.fname=this.stud.fname;
this.lname=this.stud.lname;
this.eng=this.stud.eng;
this.sci=this.stud.sci;
this.maths=this.stud.maths;
this.percent=this.stud.percentage;
this.fail=this.stud.fail;



console.log(this.stud.percentage);


      }
    )
  }

  
  

  
}
