import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();
  
  constructor() { 
    console.log('Task service constructed...');
  }

  addTask(taskData:{title:string;description:string;}){
    const newTask:Task = {...taskData, id:Math.random().toString(),status:'OPEN'};
    this.tasks.update((oldTasks) => {
      return [...oldTasks, newTask];
    })
  }
}
