import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  public cleaning:string=""
  public cleaningType:string=""
  constructor(
    private taskService:TaskService,
    private router:Router) { }

  ngOnInit(): void {

  }
  public addTask(){
    this.taskService.addTask(this.cleaning,this.cleaningType)
    this.router.navigate(['/'])
  }

}
