
import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { OktaAuthService } from '@okta/okta-angular';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  accessToken = this.oktaAuth.getAccessToken();

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type'  : 'application/json',
    'Authorization' : 'Bearer ' + this.accessToken })
};

  public userList: User[];

  public API = 'http://localhost:8080/api';
  private usersUrl = this.API + '/users';  // URL to web api

  constructor(private oktaAuth: OktaAuthService,
    private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl,this.httpOptions)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  /** GET user by id. Return `undefined` when id not found */
  // getUserNo404<Data>(id: number): Observable<User> {
  //   const url = `${this.usersUrl}/?id=${id}`;
  //   return this.http.get<User[]>(url)
  //     .pipe(
  //       map(users => users[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //       }),
  //       catchError(this.handleError<User>(`getUser id=${id}`))
  //     );
  // }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number | string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url,this.httpOptions).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /* GET users whose name contains search term */
  // searchUsers(term: string): Observable<User[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty user array.
  //     return of([]);
  //   }
  //   return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`).pipe(
  //     catchError(this.handleError<User[]>('searchUsers', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new user to the server */
  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the user from the server */
  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    this.userList = this.userList.filter(u => u.id !== id);

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /** PUT: update the user on the server */
  updateUser (user: User): Observable<any> {
    return this.http.put(`${this.usersUrl}/${user.id}`, user, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  refreshUser (user: User): void {
    this.updateUser( user).subscribe();
    if ( this.userList != null) {
      // todo: change data in local.
      this.getUsers().subscribe(users => this.userList = users);
      this.userList = this.userList.map(
        fu => {if (fu.id === user.id) {
          fu.age = user.age;
          fu.email = user.email;
          fu.first_name = user.first_name;
          fu.last_name = user.last_name;
          fu.weight = user.weight;
          fu.height = user.height;
          fu.password = user.password;
          }
          return fu;
       }
      );
    }
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
}
