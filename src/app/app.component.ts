import { SelectorContext } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms';
}



// So the flow is like- 
// index.html is base file of our project, there we have used <app-root>, which is a selector of app component 
// AppComponent is the base component of our project 
// in AppComponent we can use selectors of different components
// here, we are using <rounter-outlet> SelectorContext, which is a selector of app-routing.module 
// So the control goes to app-routing.module 

// In app-routing.module we have provided the paths of different components, so we can redirect to them.