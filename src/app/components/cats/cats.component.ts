import { DataCatsService } from './../../services/data-cats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats:any;
  disable:boolean = false;

  constructor(public dataService:DataCatsService){
    this.dataService.getCats().subscribe(cats => {
      this.cats = cats;
    });
   }

  ngOnInit() {
  }

  adopt(catId) {
    this.cats[Number(catId) - 1].status = 'Reserved';

  }
}
