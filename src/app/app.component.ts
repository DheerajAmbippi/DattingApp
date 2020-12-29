import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Datting App';
  Users:any;
  constructor(private http :HttpClient){
    
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://localhost:44302/api/Users").subscribe(res=>{
      this.Users = res
    },
    error=>{
      console.log(error.errors)
    })
  }
  
}
