import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  async getUser(id: string){
     return this.http.get(`https://devahhm20j.execute-api.us-east-1.amazonaws.com/user/${id}`).toPromise();
  }
}


