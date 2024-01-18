import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { response } from 'express';
import { error } from 'console';
import { Hotel } from '../Hotel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  id: any;
  total_no_of_rooms: any;
  constructor(private httpService: AdminserviceService){}
  posts: any;
  model: any;
  ngOnInit()
  {
    this.httpService.getHotel().subscribe(
      (response) => {this.posts = response},
      (error) => {console.log(error)}
    );
  }
  post2:any;
  update(id: number, hotel_name: string, location: string, contact_no: string, total_no_of_rooms: number, price: number)
  {
    this.model = new Hotel(id, hotel_name, location, contact_no, total_no_of_rooms, price);
    this.httpService.update(this.model).subscribe(
      (response) => {this.post2  = response}
    );
    window.location.reload();
  }
  
  delete(id: number)
  {
    this.httpService.delete(id).subscribe(
      (response) => {console.log(response)}
    );
    window.location.reload();
  }
  model2 = new Hotel(0, "new hotel", "location", "contact_no", 0, 0);
  create()
  {
    this.httpService.create(this.model2).subscribe(
      (response) => {console.log(response)}
    );
    // window.location.reload();
  }
}
