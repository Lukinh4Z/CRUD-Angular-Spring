import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Front-End' },
    { _id: '2', name: 'Java', category: 'Back-End' },
    { _id: '3', name: 'Spring-boot', category: 'Back-End' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.courses = [] //inicializando a variável dentro do construtor ao invés de na declaração, mas tanto faz.
  }

  ngOnInit(): void {}
}
