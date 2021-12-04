import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthServiceService } from '../service/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='pratiksha'
  password='123456'
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router: Router, private auths:AuthServiceService) { }

  ngOnInit(): void {
  }
  // handleLogin()
  // {
  //   if(this.username==="Pratiksha" && this.password==="12345" )
  //   {
  //     this.router.navigate(['welcome',this.username])
  //     this.invalidLogin=false
  //   }
  //   else
  //   {
  //     this.invalidLogin=true
  //   }
  // }


  handleLogin()
  {
    
       if(this.auths.authenticateUser(this.username,this.password) )
    {
      this.router.navigate(['welcome'])
      this.invalidLogin=false
    }
    else
    {
      this.invalidLogin=true
    }

  }


}

// for one way binding - (the skeleton/.ts file is projecting on .html file )  - {{ }} 
// for two way binding - (the skeleton/.ts file is projecting on .html file and also .html file is projecting on .ts file) - [(ngModel)]


