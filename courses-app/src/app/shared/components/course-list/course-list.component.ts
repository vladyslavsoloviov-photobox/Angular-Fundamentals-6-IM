import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/interfaces';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courses: ICourse[];
  @Input() editable: boolean;

  @Output() modalChange = new EventEmitter<boolean>();

  openModal() {
    this.modalChange.emit(true);
  }
}
