import { Component, OnInit } from '@angular/core';
import { TaskI } from '../create-post/task';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService : TaskService) { }
  // tasks = [
  //   {title:'first Post', content:'bla bla'},
  //   {title:'second Post', content:'bla bla'},
  //   {title:'Third Post', content:'bla bla'},
  //   {title:'Fourth Post', content:'bla bla'},
  //   {title:'Fifth Post', content:'bla bla'}

  // ]

  tasks:any[]=[];
  Title:any =''
  title: 'post'
  public content='';

  UpdateTask(data1:string , data){

    return this.taskService.put(data1,{content:data}).subscribe();
      }

  DeleteTask(data:string){
    this.taskService.delete(data).subscribe();
  }
  ngOnInit(){
   this.taskService. get().subscribe(data=> this.tasks =data);
  //  this.taskService.put('hello2',{content:'test Content'}).subscribe();
  //  this.taskService.delete('test').subscribe();

  }

}
