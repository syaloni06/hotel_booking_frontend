import { Component } from '@angular/core';
import { login } from '../login';
import { HttpserviceService } from '../httpservice.service';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { admin } from '../admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  model = new login("name", "password");
  admin= new admin("name","password");
  posts: any;
  constructor(private httpService: HttpserviceService, private router: Router, private httpService2: AdminserviceService){}

  adminlogin()
  {
    this.httpService2.adminlogin(this.admin).subscribe(
      (response:string)=>{this.posts=response;
        if(this.posts==="You have logged in successfully.")
        this.router.navigate(['/admin']);
      else
        alert(this.posts);} 
    );
  }

  adminsignup()
  {
    this.httpService2.adminsignup(this.admin).subscribe(
      (response:string)=>{this.posts=response;
        alert(this.posts);
      }
    );
  }

  userlogin()
  {
    this.httpService.userlogin(this.model).subscribe(
      (response:string)=>{this.posts=response;
      if(this.posts === "You have logged in successfully.")
        this.router.navigate(['/hotel']);
      else
        alert(this.posts);}
    );
  }
  usersignup()
  {
    this.httpService.usersignup(this.model).subscribe(
      (response:string)=>{this.posts=response;
      alert(this.posts);}
    //if(this.posts==="Account has been created")
    //this.router.navigate(['/home'])
    );
  }
}
