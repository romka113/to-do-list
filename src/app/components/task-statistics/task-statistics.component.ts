import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-task-statistics',
  templateUrl: './task-statistics.component.html',
  styleUrls: ['./task-statistics.component.css']
})
export class TaskStatisticsComponent implements OnInit {

  public taskTotal:number=0
  public taskSkubus:number=0
  public taskRutininis:number=0
  public taskNeskubus:number=0
  public ypacSkubus:number=0
  public tskType:string=''
  constructor(private TaskService:TaskService) { }

  ngOnInit(): void {
  this.calculateStatist()
    this.TaskService.onTaskchange.subscribe(()=>{
     this.calculateStatist()
    })
  }
public calculateStatist(){


  this.taskTotal=0
  this.taskTotal=this.TaskService.taskContainer.length
  this.taskSkubus=0
  this.taskNeskubus=0
  this.taskRutininis=0
  this.ypacSkubus=0
  this.TaskService.taskContainer.forEach((t)=>{
    if(t.type=="Skubus"){
      this.taskSkubus+=1

    }

    if(t.type=='Rutinis'){
      this.taskRutininis++
    }

    if(t.type=="Neskubus"){
      this.taskNeskubus++
    }

    if(t.type=="Ypacskubus"){
      this.ypacSkubus++
    }
    })



}}
