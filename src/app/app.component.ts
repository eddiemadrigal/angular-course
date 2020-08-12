import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[0].description;

  price = 9.99;

  rate = 0.67;

  myCourse = COURSES[0];

  startDate = new Date(2000, 0, 1); // instantiate the date using the Date constructor mo: zero based, day: 1 based

  onCourseSelected(course: Course) {
    console.log('app level click', course);
  }

}
