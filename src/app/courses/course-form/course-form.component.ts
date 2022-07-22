import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private coursesService: CoursesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onSubmit() {
    this.coursesService.save(this.form.value).subscribe({
      next: (result) => console.log(result),
      error: (error) => this.onError(),
    });
  }

  onError() {
    this.snackBar.open('Erro ao salvar curso', 'Fechar');
  }
}
