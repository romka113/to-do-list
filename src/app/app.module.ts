import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { FormsModule } from "@angular/forms";
import { NewtaskComponent } from './components/newtask/newtask.component';
import { TaskStatisticsComponent } from './components/task-statistics/task-statistics.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { TaskItemComponent } from './components/tasklist/task-item/task-item.component';


const appRoutes:Routes=[
  {path:'',component:TasklistComponent},
  {path:'new',component:NewtaskComponent},
  {path:'about',component:AboutComponent},
  {path:'update/:index',component:UpdateProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    NewtaskComponent,
    TaskStatisticsComponent,
    NavigationComponent,
    AboutComponent,
    UpdateProductComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
