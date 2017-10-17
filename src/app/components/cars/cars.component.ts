import { Component, OnInit } from '@angular/core';
import {Car} from './car';
import {CarsService} from '../../shared/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
		cars: Car[];
  constructor(private carsService:CarsService) { 
  	 this.cars = this.carsService.getCars();

  	}

  ngOnInit() {
  }

}
