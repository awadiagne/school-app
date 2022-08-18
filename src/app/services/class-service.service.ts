import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AClass } from '../interfaces/aClass';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification/notification.component';

const SNACK_BAR_DURATION = 3000;

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http : HttpClient, private router: Router
    ) {}

  getClass(id : any) : Observable<any> {
    /*this.http.get<AClass>(`http://localhost:4002/classes/${id}`)
      .pipe(
        tap((oneClass: AClass) => {
          console.log('Class retrieved : ' + { oneClass : oneClass });
          return oneClass;
        }
        ),
        catchError(this.handleError<AClass>('getClass'))
      );*/
    
    return this.http.get<AClass>(`http://localhost:4002/classes/${id}`);
      
      /*this.http.get(`http://localhost:4002/classes/${id}`).subscribe((result : AClass) => {
        console.log(result);
        if(result.hasOwnProperty('error')){
          this._snackBar.openFromComponent(NotificationComponent, {
            duration:SNACK_BAR_DURATION, data : 'Erreur lors de la création'
          });
        } else {
          this._snackBar.openFromComponent(NotificationComponent, {
            duration: SNACK_BAR_DURATION, data : 'Class retrieved!'
          });
          return result;
          setTimeout(() => {
            this.router.navigate([`details/${result._id}`]);
          }, 3000);
        }
    })*/
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
      tap((newClass: AClass) => console.log(`Added class with id=${newClass._id}`)),
      catchError(this.handleError<AClass>('createClass'))
    );
  }

  updateClass(oneClass : AClass) : Observable<any>{
    return this.http.put(`http://localhost:4002/classes/${oneClass._id}`, oneClass, this.httpOptions).pipe(
      tap(_ => console.log(`Updated Class id=${oneClass._id}`)),
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
