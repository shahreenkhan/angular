import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://young-spire-25464.herokuapp.com/api/pn/'

  constructor(private http:HttpClient) { }


bloginsert(blogall:any){
// console.log(blogall);
return this.http.post(this.url+'bloginsert',blogall)
}
getdata2(){
  return this.http.get(this.url+'getall')
}
viewdata2(id:any){
  // console.log(id)
  return this.http.get(this.url+'blogview/'+id)
}
}