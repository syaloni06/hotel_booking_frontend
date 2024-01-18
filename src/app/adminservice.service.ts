import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from './Hotel';
import { login } from './login';
import { admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }
  getHotel()
  {
    const url = "http://localhost:8080/api/hotel/show";
    return this.http.get(url);
  }
  update(h: Hotel)
  {
    const url = "http://localhost:8080/api/hotel/update/"+h.id;
    var headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.put(url,h,{headers});
  }

  delete(id: number)
  {
    const url = "http://localhost:8080/api/hotel/delete/"+id;
    return this.http.delete(url);
  }

  create(model: Hotel)
  {
    const url = "http://localhost:8080/api/hotel/create";
    var headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.post(url,model,{headers});
  }

  adminsignup(model: admin)
  {
    const url="http://localhost:8080/api/admin_login/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    return this.http.post(url,model,{headers,'responseType': 'text'});
  }

  adminlogin(model: admin)
  {
    const url="http://localhost:8080/api/admin_login/login";
     var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
     return this.http.post(url,model, {headers,'responseType': 'text'});
  }
}
