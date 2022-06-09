import { Component, OnInit } from '@angular/core';
import {Task} from "../../model/Task";
import { TaskService } from "../../services/task.service";
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public taskContainer:Task[]=[]

  constructor(private TaskService:TaskService) {

  }

  ngOnInit(): void {
    this.taskContainer = this.TaskService.taskContainer
  }
  public deleteTask(n:number) {
    this.TaskService.deleteTask(n)
  }









}
