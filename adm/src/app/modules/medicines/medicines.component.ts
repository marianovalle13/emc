import { Component } from '@angular/core';
import { ItemsComponent } from '../../core/items.component';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class MedicinesComponent extends ItemsComponent {

  // getFilters() {
  //   let _filters = {};

  //   return _filters;
  // }

  getPopulates(){
    return ['category']
  }

}
