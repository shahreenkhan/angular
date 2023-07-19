import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
url="https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.url+'posts')
  }
  studentView(id:any){
    return this.http.get(this.url+"posts/"+id)
  }
  updateStudent(data:any,id:any){
    return this.http.put(this.url+'posts/'+id,data)
  }
}
