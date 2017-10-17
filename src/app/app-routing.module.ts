import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {CarsFormComponent} from './components/cars-form/cars-form.component';

const appRoutes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path:'add', component:CarsFormComponent},
  
  
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
