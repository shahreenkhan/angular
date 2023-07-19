import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 url= "https://jsonplaceholder.typicode.com/posts"
 url2="https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=c87a6ad92c3940a19ad89849fe36f1bb"
  constructor(private http:HttpClient) { } //

  alldata(){
    return this.http.get(this.url)
  }
  
  newsapi(){
    return this.http.get(this.url2)
  }
}
