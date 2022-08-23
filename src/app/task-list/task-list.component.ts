import { Component, OnInit } from '@angular/core';
import { TaskI } from '../create-post/task';
import { TaskService } from '../task.service';
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

  tasks:TaskI[]=[];

  deleteTask(){
    this.taskService.DeleteTask();
  }
  UpdateTask(){
    this.taskService.UpdateTask();
  }
  ngOnInit(): void {
    this.tasks = this.taskService.gettasks();
  }

}
