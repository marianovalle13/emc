import { InsuranceComponent } from './modules/insurances/insurance.component';
import { InsurancesComponent } from './modules/insurances/insurances.component';
import { MedicinesComponent } from './modules/medicines/medicines.component';
import { MedicineComponent } from './modules/medicines/medicine.component';
import { NurseComponent } from './modules/nurses/nurse.component';
import { NursesComponent } from './modules/nurses/nurses.component';
import { DriverComponent } from './modules/drivers/driver.component';
import { DriversComponent } from './modules/drivers/drivers.component';
import { UserComponent } from './modules/users/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ErrorHandler, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

// import {
//   MAT_MOMENT_DATE_FORMATS,
//   MomentDateAdapter,
//   MAT_MOMENT_DATE_ADAPTER_OPTIONS,
// } from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { MAT_DATE_LOCALE } from '@angular/material/core';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { DpDatePickerModule } from 'ng2-date-picker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Material Design

// import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { UsersComponent } from './modules/users/users.component';
import { AdministratorsComponent } from './modules/administrators/administrators.component';
import { AdministratorComponent } from './modules/administrators/administrator.component';
import { AdministratorChangePasswordComponent } from './modules/administrators/administrator.change.password.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { CourseComponent } from './modules/courses/course.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { NewComponent } from './modules/news/new.component';
import { NewsComponent } from './modules/news/news.component';
import { UmacComponent } from './modules/umacs/umac.component';
import { UmacsComponent } from './modules/umacs/umacs.component';
import { EquipmentComponent } from './modules/equipments/equipment.component';
import { EquipmentsComponent } from './modules/equipments/equipments.component';
import { VehicleInsuranceComponent } from './modules/vehicleInsurances/vehicleInsurance.component';
import { VehicleInsurancesComponent } from './modules/vehicleInsurances/vehicleInsurances.component';
import { VehicleTypeComponent } from './modules/vehicleTypes/vehicleType.component';
import { VehicleTypesComponent } from './modules/vehicleTypes/vehicleTypes.component';
import { VehicleBrandComponent } from './modules/vehicleBrands/vehicleBrand.component';
import { VehicleBrandsComponent } from './modules/vehicleBrands/vehicleBrands.component';
import { VehicleModelComponent } from './modules/vehicleModels/vehicleModel.component';
import { VehicleModelsComponent } from './modules/vehicleModels/vehicleModels.component';
import { CategoryComponent } from './modules/categories/category.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { TableMaintenanceComponent } from './modules/tableMaintenance/tableMaintenance.component';
import { PHCSComponent } from './modules/phcs/phcs.component';
import { PHCComponent } from './modules/phcs/phc.component';
import { PHCPSComponent } from './modules/phcps/phcps.component';
import { PHCPComponent } from './modules/phcps/phcp.component';
import { MedicsComponent } from './modules/medics/medics.component';
import { MedicComponent } from './modules/medics/medic.component';

import { MapComponent } from './core/components/map/map.component';
import { DiseaseComponent } from './modules/diseases/disease.component';
import { DiseasesComponent } from './modules/diseases/diseases.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    NewComponent,
    NewsComponent,
    UmacComponent,
    UmacsComponent,
    EquipmentComponent,
    EquipmentsComponent,
    VehicleInsuranceComponent,
    VehicleInsurancesComponent,
    VehicleTypeComponent,
    VehicleTypesComponent,
    VehicleBrandComponent,
    VehicleBrandsComponent,
    CategoryComponent,
    CategoriesComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    AdministratorComponent,
    AdministratorChangePasswordComponent,
    AdministratorsComponent,
    MapComponent,
    TableMaintenanceComponent,
    VehicleModelComponent,
    VehicleModelsComponent,
    PHCComponent,
    PHCSComponent,
    PHCPComponent,
    PHCPSComponent,
    DiseaseComponent,
    DiseasesComponent,
    DriverComponent,
    DriversComponent,
    UserComponent,
    NursesComponent,
    NurseComponent,
    MedicineComponent,
    MedicinesComponent,
    MedicsComponent,
    MedicComponent,
    InsurancesComponent,
    InsuranceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,

    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSliderModule, MatTableModule, MatDialogModule,
    MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    NgxMaterialTimepickerModule.setLocale('es-AR'),

    DpDatePickerModule,

    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    // HttpModule,
  ],
  providers: [
    { provide: ErrorHandler },
    { provide: LOCALE_ID, useValue: 'es-AR' },

    // {provide: MAT_DATE_LOCALE, useValue: 'es-AR'},
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    // },
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},

    // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},


    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    // {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},

    MatDatepickerModule,
    // NgxMatDatepicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
