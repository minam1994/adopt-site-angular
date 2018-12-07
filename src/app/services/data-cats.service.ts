import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()

export class DataCatsService{

    constructor(public http:HttpClient){
    }

    getCats() {
        return this.http.get('../../assets/data-cats.json')
            .pipe(map(res => res));
    }

}