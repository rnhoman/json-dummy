import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Posts } from '../core/clients';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpResponseBase } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private post: Posts[] = [];
  
  private bDummy = environment.baseDummy;

  constructor(private http: Http) {}

  // findAllPosts(): Observable<Posts[]>{
  //   const body = JSON.stringify(Posts);
  //   return this.http.get(this.bDummy + '/posts')
  //   .map(response => response.json())
  //   .catch(error => Observable.throw("Error"));
  // }
  findAllPosts(): Observable<Posts[]> {
    return this.http.get(this.bDummy + '/posts')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
