import { Component } from '@angular/core';
import { TaskService } from "./services/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  constructor(private TaskService:TaskService) {
    this.TaskService.loadSarasa()
  }
}
