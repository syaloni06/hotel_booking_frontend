import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }
  getHotel()
  {
    const url = "http://localhost:8080/api/hotel/show";
    return this.http.get(url);
  }

  book_now(u: User)
  {
    //console.log(u);
    const url = "http://localhost:8080/api/hotel/hotel_book";
    var headers = new HttpHeaders({'Content-Type': 'application/json', responseType: 'text'});
    return this.http.post(url, u, {headers, 'responseType': 'text'});
  }

  usersignup(model: login)
  {
    const url="http://localhost:8080/api/user_login/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    return this.http.post(url,model,{headers,'responseType': 'text'});
  }

  userlogin(model: login)
  {
    const url="http://localhost:8080/api/user_login/login";
     var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
     return this.http.post(url,model,{headers,'responseType': 'text'});
  }
}
