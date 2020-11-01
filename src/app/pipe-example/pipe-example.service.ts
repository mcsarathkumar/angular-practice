import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipeExampleService {

  constructor(public http: HttpClient) {}

  fetchAlbums(): Observable<object> {
    return this.http.get('/assets/albums.json');
  }
}
