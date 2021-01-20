import { InsuranceComponent } from './modules/insurances/insurance.component';
import { InsurancesComponent } from './modules/insurances/insurances.component';
import { MedicinesComponent } from './modules/medicines/medicines.component';
import { MedicineComponent } from './modules/medicines/medicine.component';
import { NursesComponent } from './modules/nurses/nurses.component';
import { NurseComponent } from './modules/nurses/nurse.component';
import { UserComponent } from './modules/users/user.component';
import { DriversComponent } from './modules/drivers/drivers.component';
import { DriverComponent } from './modules/drivers/driver.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './modules/categories/category.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { VehicleBrandComponent } from './modules/vehicleBrands/vehicleBrand.component';
import { VehicleBrandsComponent } from './modules/vehicleBrands/vehicleBrands.component';
import { VehicleTypeComponent } from './modules/vehicleTypes/vehicleType.component';
import { VehicleTypesComponent } from './modules/vehicleTypes/vehicleTypes.component';
import { VehicleInsuranceComponent } from './modules/vehicleInsurances/vehicleInsurance.component';
import { VehicleInsurancesComponent } from './modules/vehicleInsurances/vehicleInsurances.component';
import { VehicleModelComponent } from './modules/vehicleModels/vehicleModel.component';
import { VehicleModelsComponent } from './modules/vehicleModels/vehicleModels.component';
import { EquipmentComponent } from './modules/equipments/equipment.component';
import { EquipmentsComponent } from './modules/equipments/equipments.component';
import { UmacComponent } from './modules/umacs/umac.component';
import { UmacsComponent } from './modules/umacs/umacs.component';
import { NewComponent } from './modules/news/new.component';
import { NewsComponent } from './modules/news/news.component';
import { CourseComponent } from './modules/courses/course.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { AdministratorComponent } from './modules/administrators/administrator.component';
import { AdministratorChangePasswordComponent } from './modules/administrators/administrator.change.password.component';
import { AdministratorsComponent } from './modules/administrators/administrators.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { UsersComponent } from './modules/users/users.component';
import { TableMaintenanceComponent } from './modules/tableMaintenance/tableMaintenance.component';
import { HttpGuard } from './core/http.guard';
import { Settings } from './app.settings';
import { PHCComponent } from './modules/phcs/phc.component';
import { PHCSComponent } from './modules/phcs/phcs.component';
import { PHCPComponent } from './modules/phcps/phcp.component';
import { PHCPSComponent } from './modules/phcps/phcps.component';
import { DiseaseComponent } from './modules/diseases/disease.component';
import { DiseasesComponent } from './modules/diseases/diseases.component';
import { MedicsComponent } from './modules/medics/medics.component';
import { MedicComponent } from './modules/medics/medic.component';

Settings.routes.categories.component = CategoriesComponent;
Settings.routes.category.component = CategoryComponent;
Settings.routes.vehicleBrands.component = VehicleBrandsComponent;
Settings.routes.vehicleBrand.component = VehicleBrandComponent;
Settings.routes.vehicleTypes.component = VehicleTypesComponent;
Settings.routes.vehicleType.component = VehicleTypeComponent;
Settings.routes.vehicleInsurances.component = VehicleInsurancesComponent;
Settings.routes.vehicleInsurance.component = VehicleInsuranceComponent;
Settings.routes.vehicleModels.component = VehicleModelsComponent;
Settings.routes.vehicleModel.component = VehicleModelComponent;
Settings.routes.equipments.component = EquipmentsComponent;
Settings.routes.equipment.component = EquipmentComponent;
Settings.routes.umacs.component = UmacsComponent;
Settings.routes.umac.component = UmacComponent;
Settings.routes.news.component = NewsComponent;
Settings.routes.new.component = NewComponent;
Settings.routes.courses.component = CoursesComponent;
Settings.routes.course.component = CourseComponent;
Settings.routes.administrators.component = AdministratorsComponent;
Settings.routes.administratorChangePassword.component = AdministratorChangePasswordComponent;
Settings.routes.administrator.component = AdministratorComponent;
Settings.routes.home.component = HomeComponent;
Settings.routes.login.component = LoginComponent;
Settings.routes.users.component = UsersComponent;
Settings.routes.tableMaintenance.component = TableMaintenanceComponent;
Settings.routes.phcs.component = PHCSComponent;
Settings.routes.phc.component = PHCComponent
Settings.routes.phcps.component = PHCPSComponent;
Settings.routes.phcp.component = PHCPComponent;
Settings.routes.diseases.component = DiseasesComponent;
Settings.routes.disease.component = DiseaseComponent;
Settings.routes.user.component = UserComponent;
Settings.routes.users.component = UsersComponent;
Settings.routes.driver.component = DriverComponent;
Settings.routes.drivers.component = DriversComponent;
Settings.routes.nurse.component = NurseComponent;
Settings.routes.nurses.component = NursesComponent;
Settings.routes.medicine.component = MedicineComponent;
Settings.routes.medicines.component = MedicinesComponent;
Settings.routes.medics.component = MedicsComponent;
Settings.routes.medic.component = MedicComponent;
Settings.routes.insurances.component = InsurancesComponent;
Settings.routes.insurance.component = InsuranceComponent;


let routes: Routes = [];
for (let routeKey in Settings.routes) {
  let route = Settings.routes[routeKey];
  let r: any = {};
  if (route.path || route.path == '') r.path = route.path;
  if (route.redirectTo) r.redirectTo = route.redirectTo;
  if (route.pathMatch) r.pathMatch = route.pathMatch;
  if (route.component) r.component = route.component;
  if (route.data) {
    r.data = route.data;
    r.canActivate = [HttpGuard];
  }
  routes.push(r);
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
