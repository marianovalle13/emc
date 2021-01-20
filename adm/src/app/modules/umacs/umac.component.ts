import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-umac',
  templateUrl: './umac.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class UmacComponent extends ItemComponent {

  vehicleBrands = [];
  vehicleModelByBrand:any;
  vehicleTypes = [];
  vehicleInsurances = [];
  equipments = [];

  initializePre() {
    this.getVehicleBrands();
    this.getVehicleTypes();
    this.getVehicleInsurances();
    this.getEquipments();
  }

  savePre( item ) {
    item.username = item.emailAddress;
  }

  async getVehicleBrands() {
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.vehicleBrands);
    if(res && res.data) this.vehicleBrands = res.data;
  }

  async getModelByBrand(e){
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.vehicleModels, true, {}, {vehicleBrand: e});
    if(res && res.data) this.vehicleModelByBrand = res.data
    console.log(res.data)
  }

  async getVehicleTypes(){
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.vehicleTypes);
    if(res && res.data) this.vehicleTypes = res.data;
  }

  async getVehicleInsurances(){
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.vehicleInsurances);
    if(res && res.data) this.vehicleInsurances = res.data;
  }

  async getEquipments(){
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.equipments);
    if(res && res.data) this.equipments = res.data;
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      domain: [null],
      vehicleBrand: [null],
      vehicleModel: [null],
      vehicleType: [null],
      vehicleInsurance: [null],
      insuranceFile: [null],
      phoneNumber: [null, Validators.required],
      emailAddress: [null, Validators.required],
      password: [null, Validators.required],
      passwordVerify: [null, Validators.required],
      fullName: [null, Validators.required],
      equipments: [null, Validators.required]
    })
  }

  getFormEdit(item) {
    console.log(item)
    if(item.vehicleModel) this.getModelByBrand(item.vehicleBrand)
    return this.formBuilder.group({
      id: [item.id],
      domain: [item.domain],
      vehicleBrand: [item.vehicleBrand],
      vehicleModel: [item.vehicleModel],
      vehicleType: [item.vehicleType],
      vehicleInsurance: [item.vehicleInsurance],
      insuranceFile: [item.insuranceFile],
      phoneNumber: [item.phoneNumber, Validators.required],
      emailAddress: [item.emailAddress, Validators.required],
      password: [null, Validators.required],
      passwordVerify: [null, Validators.required],
      fullName: [item.fullName, Validators.required],
      equipments: [item.equipments]
    })
  }

}
