import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AClass } from '../interfaces/aClass';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http : HttpClient
    ) {}

  getClass(id : any) : Observable<AClass>{
    return this.http.get<AClass>(`http://localhost:4002/classes/${id}`)
      .pipe(
        tap(_ => console.log('Class retrieved')),
        catchError(this.handleError<AClass>('getClass'))
      );
  }

  getClasses() : Observable<AClass[]>{
    return this.http.get<AClass[]>('http://localhost:4002/classes')
      .pipe(
        tap(_ => console.log('Classes retrieved')),
        catchError(this.handleError<AClass[]>('getClasses'))
      );
  }

  createClass(oneClass : AClass) : Observable<AClass>{
    return this.http.post<AClass>('http://localhost:4002/classes', oneClass, this.httpOptions).pipe(
      tap((newClass: AClass) => console.log(`Added class with id=${newClass.id}`)),
      catchError(this.handleError<AClass>('createClass'))
    );
  }

  updateClass(oneClass : AClass) : Observable<any>{
    return this.http.put(`http://localhost:4002/classes/${oneClass.id}`, oneClass, this.httpOptions).pipe(
      tap(_ => console.log(`Updated Class id=${oneClass.id}`)),
      catchError(this.handleError<any>('updateClass'))
    );
  }

  deleteClass(id : any) : Observable<AClass>{
    return this.http.delete<AClass>(`http://localhost:4002/classes/${id}`, this.httpOptions)
    .pipe(
      tap(_ => console.log(`Deleted Class with id=${id}`)),
      catchError(this.handleError<AClass>('deleteClass'))
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
