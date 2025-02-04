import { NgModule } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/Shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports:[CommonModule,DatePipe,FormsModule,SharedModule],
  exports:[TasksComponent]
})
export class TasksModule {}
