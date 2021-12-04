import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todo ={id:4,description:'asdsad'};

  todos=[
    {id:1, description:'Learn To Dance'},
    {id:2, description:'Become an expert at Angular'},
    {id:3, description: 'Visit india'}
    
  ]

  // todo={
  //   id: 1,
  //   description:'Learn To Dance'
  // }
  constructor() { }

  ngOnInit(): void {

    console.log('Hello world')


    
  }

}
