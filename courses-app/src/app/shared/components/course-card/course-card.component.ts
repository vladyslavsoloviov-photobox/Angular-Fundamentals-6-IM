import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/interfaces';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];

  @Input() editable: boolean;
  @Input() course: ICourse;

  ngOnInit() {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = this.course.creationDate;
    this.duration = this.course.duration;
    this.authors = this.course.authors;
  }
}
