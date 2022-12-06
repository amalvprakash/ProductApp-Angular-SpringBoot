import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http:HttpClient) { }

  fetchProducts = () =>{
    return this.http.get("http://localhost:8080/viewProducts")
  }
  addProducts = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/addProducts",dataToSend)
  }
}
