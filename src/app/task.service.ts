import { Injectable } from '@angular/core';
import { TaskI } from './create-post/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  observable, Observable } from 'rxjs';
import { SelectorMatcher } from '@angular/compiler';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

const httpOptions = {headers: new HttpHeaders({
'Content-Type':  'application/json',
Authorization: 'my-auth-token' })};

@Injectable({
  providedIn: 'root'
})

export class TaskService {


  constructor(private http : HttpClient) {

  }
  obj = {
    title:Title
  }

  get():Observable<any>{
    return this.http.get<any>('http://localhost:3001/task')
  }

  post(data){

    return this.http.post('http://localhost:3001/task' , data).pipe(
      map((response)=>{
        return response;
      })
    )


  }
  put(title:any,data):Observable<TaskI>{
    return this.http.put<TaskI>( `http://localhost:3001/task/${title}`, data ).pipe(
      map((response)=>{
        return response;
      })
    )
  }
  delete(title:any):Observable<TaskI>{
    return this.http.delete<TaskI>( `http://localhost:3001/task/${title}`).pipe(
      map((response)=>{
        return response;
      })
    )
  }
// private tasks:TaskI[]=[];
//   constructor( private webService : WebserviceService) { }


//   gettasks(){
//     return this.tasks
//   }
//   addtask(title:string , content:any){
//     return this.webService.post(title , content);
//     // const task:TaskI={title : title , content:content};
//     // this.tasks.push(task);
//   }
//   DeleteTask(){
//      alert("task deleted");
//   }
//   UpdateTask(){
//     alert("task Updated");
//   }
}
