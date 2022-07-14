import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Course } from './../model/course';

// esse decorator pede que o Angular forneça uma instância dessa classe automaticamente,
// inserindo-o como dependência da classe
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) {}

  list() {
    /**
     * esse operador 'diamante' <>, é para indicar que o get
     * retorna um arrya de Course.
     */
    return this.httpClient.get<Course[]>(this.API).pipe(
      // com esse first eu estou dizendo pro servidor finalizar a inscrição do rxjs,
      // faço isso porque não vou mais precisar de respostas do servidor;
      // poderia usar tbm "take(1)".
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
