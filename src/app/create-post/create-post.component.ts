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
  addtask(form: NgForm){
if(form.invalid){
  return;
}

    this.taskService.addtask(form.value.title, form.value.content)
  }

  ngOnInit(): void {

  }
}
