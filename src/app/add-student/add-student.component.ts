import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentPayload } from './student-payload';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  rollNo : Number | undefined;
  fname: String | undefined;
  lname: String | undefined;
  maths: Number | undefined;
  sci: Number | undefined;
  eng: Number | undefined;
  percentage: Number | undefined;
  fail : boolean | undefined;

  stud:StudentPayload | undefined;
  



  constructor(public http:HttpClient) { 





  }

  ngOnInit(): void {

    console.log(Number(this.rollNo));
    console.log(this.fname);

    this.stud = new StudentPayload;
    //{(this.roll_no,this.fname,this.lname,this.maths,this.sci,this.eng,this.fail)};
   
  }

  onSubmit(userData:FormData)
  {
    console.warn(userData);
    console.log(userData);
    console.log(this.rollNo);
    console.log(this.eng);
    console.log(this.fname);
    console.log(this.lname);
  
    // this.percentage=this.percentage + this.maths ;
    console.log(typeof(this.eng));
    this.http.post('http://localhost:8080/postStud',userData).subscribe
    (Response =>
      {
        console.log('got response');
      }
    )
    ;
    console.log('after')

  }
  
  createPayLoad()
  {}

}



//insert into student (eng, fail, fname, lname, maths, percentage, sci, roll_no) values (?, ?, ?, ?, ?, ?, ?, ?)//