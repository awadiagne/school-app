import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http : HttpClient
    ) {}

  getStudent(id : any) : Observable<Student>{
    return this.http.get<Student>('http://localhost:4002/students/:id')
      .pipe(
        tap(_ => console.log('Class retrieved')),
        catchError(this.handleError<Student>('getStudent'))
      );
  }

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:4002/students')
      .pipe(
        tap(_ => console.log('Students retrieved')),
        catchError(this.handleError<Student[]>('getStudents'))
      );
  }

  createStudent(student : Student) : Observable<Student>{
    return this.http.post<Student>('http://localhost:4002/students', student, this.httpOptions).pipe(
      tap((newStudent: Student) => console.log(`Added student with id=${newStudent.id}`)),
      catchError(this.handleError<Student>('createStudent'))
    );
  }

  updateStudent(student : Student) : Observable<any>{
    return this.http.put('http://localhost:4002/students', student, this.httpOptions).pipe(
      tap(_ => console.log(`Updated student id=${student.id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent(id : any) : Observable<Student>{
    return this.http.delete<Student>('http://localhost:4002/students/:id', this.httpOptions)
    .pipe(
      tap(_ => console.log(`Deleted Student with id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
