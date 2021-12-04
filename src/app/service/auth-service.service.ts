import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private http:HttpClient, private router:Router) { }

  result: number | undefined

  hardCodedAuth(username: string, password: string)
  {
    console.log('after' +this.isUserLoggedIn());
    if(username==="Pratiksha" && password==="12345")
    {
      
      sessionStorage.setItem('authenticateUser',username);
      console.log('after' +this.isUserLoggedIn());
      return true;
    }
    else
    {
      return false;
    }
  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticateUser')
    if(user===null)
    {
      return false;
    }
    return true;
  }

  logout()
  {
    sessionStorage.removeItem('authUser');
    this.result=0;
  }


  // authApi(username:string,password:string)
  // {
  //    this.http.get(`http://localhost:8080/${username}/${password}`).subscribe(
  //      Response => {
  //        console.log(Response);
  //        this.result=Number(Response);
  //        console.log(this.result);
  //        if(this.result==Number(1))
  //        {
  //          sessionStorage.setItem('authUser',username);
  //         // this.router.navigate(['welcome']);
  //         // console.log("inside");
  //          return true;
  //         }
  //        return false;
  //      },
  //      error =>
  //      {
  //        return false;
  //      }
  //    )
  // }

  authenticateUser(username:string,password:string)
{

   // console.log(this.authApi(username,password));

   // return true;

  this.http.get(`http://localhost:8080/${username}/${password}`).subscribe(
    Response => {
      //console.log(response);
      this.result=Number(Response);
     // console.log(this.result);
     // console.log(typeof(this.result));
      if(this.result==Number(1))
      {

        sessionStorage.setItem('authenticateUser',username);
        this.router.navigate(['welcome']);
        console.log("inside");
        console.log(this.result);
        return true;
       }
       return false;
    },
    error => {
      return false;
    }

   
  );


  return false;
  
 }


}
// Session storage is used to store key value pair on browser..if user is logged in session storage
//store values on the browser like username and password and if user is logged the it removes that values from browser
//We have added it, for if user is logged in then only he can see the logout button  if he logged out then he can see login button