import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];

  @Input() editable: boolean;
  @Input() course: ICourse;

  @Output() modalChange = new EventEmitter<boolean>();

  ngOnInit() {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = this.course.creationDate;
    this.duration = this.course.duration;
    this.authors = this.course.authors;
  }

  openModal() {
    this.modalChange.emit(true);
  }
}
