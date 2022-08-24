import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  implements OnInit {

  constructor(private taskService : TaskService) { }
  enterTitle='';
  enteredContent='';
  post(form: NgForm){
if(form.invalid){
  return;
}
// this.taskService.postTask({title:'test', content:'test content'}).subscribe() ;
    this.taskService.post({title:form.value.title, content:form.value.content}).subscribe();
  }

  ngOnInit(): void {

  }
}
