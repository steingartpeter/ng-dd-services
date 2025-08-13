import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  //tasks = [];
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      // case 'all':
      //   return this.tService.allTasks();
      //   break;
      case 'open':
        return this.tService.allTasks().filter((tsk) => tsk.status === 'OPEN');
        break;
      case 'in-progress':
        return this.tService
          .allTasks()
          .filter((tsk) => tsk.status === 'IN_PROGRESS');
        break;
      case 'done':
        return this.tService.allTasks().filter((tsk) => tsk.status === 'DONE');
        break;
      default:
        return this.tService.allTasks();
        break;
    }
  });

  // constructor(private tService:TasksService){

  // }

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
