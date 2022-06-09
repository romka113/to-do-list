import { Component, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // @Input() task:Task|null=null
  // @Input() index:number=0
  // @Output() deleteTask=new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  // deleteTasks(){
  //   this.deleteTask.emit(this.index)
  // }

}
