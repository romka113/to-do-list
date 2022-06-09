import { EventEmitter, Injectable } from "@angular/core";
import { Task } from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskContainer:Task[]=[]
  public onTaskchange=new EventEmitter()

  constructor() {
  }
  public addTask = (cleaning:string,cleaningType:string) => {

    if (cleaning!=""&&cleaningType!="")
      this.taskContainer.push(new Task(cleaning,cleaningType));
    this.saveTasks()
    this.onTaskchange.emit()
  }
  public saveTasks(){
    localStorage.setItem("darbuSarasas",JSON.stringify(this.taskContainer))
  }
  public loadSarasa(){
    let data=localStorage.getItem("darbuSarasas")
    if(data!=null){
      this.taskContainer=JSON.parse(data)
    }
  }
  public deleteTask(n:number){
    this.taskContainer.splice(n,1)
    this.saveTasks()
    this.onTaskchange.emit()
  }
  public updateTask(index:number,cleaning:string,cleainingType:string){
    this.taskContainer[index].task=cleaning
    this.taskContainer[index].type=cleainingType
    this.saveTasks()
  }

}
