import { Injectable } from '@angular/core';
import {Car} from '../../components/cars/car';

@Injectable()
export class CarsService {

	private cars: Car[] = [
		{
			mark:'tojota',
			model:'yaris'
		},

		{
			mark:'kia',
			model:'seed'
		}
	];

  	constructor(){ }

  	 public getCars(){
    return this.cars;
  }

}
