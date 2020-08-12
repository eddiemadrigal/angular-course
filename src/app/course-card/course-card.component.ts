import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseEmitter = new EventEmitter<Course>();

  pStyles() {
    return {
      'margin-top': '40px',
      'font-weight': 'bold'
    };
  }

  onCourseViewed() {
    console.log('from card');
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
