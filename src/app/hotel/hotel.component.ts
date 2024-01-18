import { Component } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { response } from 'express';
import { Booking } from '../Booking';
import { error } from 'console';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  
  constructor(private httpService: HttpserviceService, private router: Router){}
  posts: any;
  booking1: Booking[] = new Array();
  
  ngOnInit()
  {
    this.httpService.getHotel().subscribe(
      (response) => {this.posts = response},
      (error) => {console.log(error)}
    );
  }
  total: number=0;
  add_to_cart(id: number, hotel_name: string, price:number, no_of_rooms: number, checkin_date: Date, checkout_date: Date, total_price: number)
  {
    const oneDay = 24 *1000 * 3600;
    console.log(hotel_name);
    // console.log(checkin_date);
    let date1 = new Date(checkin_date);
    let date2 = new Date(checkout_date);
    // console.log(date1);
    let diffDays = ((date2.getTime()- date1.getTime())/oneDay);
    console.log(diffDays);
    this.total += no_of_rooms*diffDays*price;
    console.log(this.total);
    this.booking1.push(new Booking(id, hotel_name, price, no_of_rooms, checkin_date, checkout_date, no_of_rooms*diffDays*price));
    // for(let i of this.booking1)
    // {
    //   this.total += i.total_price;
    //   console.log(this.total);
    // }  
  };


  u = new User("Name", "Address", "Identity Proof", this.booking1);
  m:any;
  book_now()
  {
    this.httpService.book_now(this.u).subscribe(
      (response: string)=>{this.m = response;
        console.log(this.m);
        if(this.m.indexOf('Your booking is successful')!=-1){
          this.router.navigate(['/successful']);
          console.log("if");
        }
      else
        document.write(this.m);
      },
      (error)=>{console.log(error)},
    );
  }
}
