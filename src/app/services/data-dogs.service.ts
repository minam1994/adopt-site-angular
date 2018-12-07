import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataDogsService {

  constructor(public http:HttpClient) { }

  getDogs() {
    return this.http.get('../../assets/data-dogs.json')
        .pipe(map(res => res));
  }
}
