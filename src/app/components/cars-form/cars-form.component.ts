import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/car';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  constructor(private car:Car) { }

  ngOnInit() {
  }

}
