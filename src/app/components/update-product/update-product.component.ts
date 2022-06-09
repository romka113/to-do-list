import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public index:number=0
  public cleaning:string=''
  public cleaningType:string=''
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['index'];
    this.cleaning=this.taskService.taskContainer[this.index].task
    this.cleaningType=this.taskService.taskContainer[this.index].type
  }
public updateTask(){
    this.taskService.updateTask(this.index,this.cleaning,this.cleaningType)
     this.router.navigate(['/'])
}
}
