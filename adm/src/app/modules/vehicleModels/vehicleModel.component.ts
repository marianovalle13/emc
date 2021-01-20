import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicleModel',
  templateUrl: './vehicleModel.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class VehicleModelComponent extends ItemComponent {
  brands = [];
  loading = true;
  selectedBrand: any;

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      vehicleBrand: [null, Validators.required]
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      vehicleBrand: [item.vehicleBrand]
    })
  }

  itemLoaded(item) {
    this.pageService.httpGetAll(
      {} ,
      {},
      [],
      -1,
      this.pageService.global.settings.endPoints.vehicleBrands,
    )
    .then( res => {
      this.brands = res.data;
      this.loading = false;
    })
    .catch(error => {
      this.pageService.showError(error);
      this.loading = false;
    });
  }

}
