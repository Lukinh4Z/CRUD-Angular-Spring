import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    /**
     *
     * this.courses = [] //inicializando a variável dentro do construtor ao invés de na declaração, mas tanto faz.
     *
     * Isso aqui é uma instância manual, mas fizemos a injeção direta dentro do construtor da classe
     * assim não precisamos criar a variável e instanciá-la, ela vem direto,
     * isso só é possível por causa do "@injectable"
     * this.coursesService = new CoursesService();
     *
     * Poderia fazer também com o ".subscribe" para transformar o observable em array:
     * this.courses = this.coursesService.list().subscribe(courses => this.courses = courses)
     * mas dessa forma a declaração da variável courses deveria ser --> courses: Course[] = [];
     * Além disso, poderia usar tbm um pipe chamado "async" para fazer o subscribe automaticamente, pra fazer iss,
     * lá no template deveríamos definir o dataSource como: --> [dataSource]="courses | async"
     * Acontece que nao precisamos fazer isso porque o MATERIAL TABLE sabe trabalhar automaticamente com observables!
     * Isso poderia ser necessário se fossemos trabalhar com essa informação usando um ngFor, por exemplo.
     *
     */

    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    // this.courses = this.coursesService.list();
  }
}
