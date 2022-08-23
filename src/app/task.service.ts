import { Injectable } from '@angular/core';
import { TaskI } from './create-post/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private tasks:TaskI[]=[];
  constructor() { }
  gettasks(){
    return this.tasks
  }
  addtask(title:string , content:string){
    const task:TaskI={title : title , content:content};
    this.tasks.push(task)
  }
  DeleteTask(){
     alert("task deleted");
  }
  UpdateTask(){
    alert("task Updated");
  }
}
