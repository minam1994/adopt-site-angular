import { Component, OnInit } from '@angular/core';
import { DataDogsService } from './../../services/data-dogs.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs:any;

  constructor(public dataService:DataDogsService){
    this.dataService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
   }

  ngOnInit() {
  }

  adopt(dogId) {
    this.dogs[Number(dogId) - 1].status = 'Reserved';

  }
}
