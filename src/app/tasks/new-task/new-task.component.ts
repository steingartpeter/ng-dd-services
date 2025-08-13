import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskStatus } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');


  constructor(private tService:TasksService){

  }

  onAddTask(title: string, description: string) {
    this.tService.addTask({title:title,description:description})
    this.formEl()?.nativeElement.reset();
  }
}
