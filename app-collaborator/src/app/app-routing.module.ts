import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./modules/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'new-associates',
    loadChildren: () => import('./modules/new-associates/new-associates.module').then( m => m.NewAssociatesPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./modules/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'pacient-data',
    loadChildren: () => import('./modules/pacient-data/pacient-data.module').then( m => m.PacientDataPageModule)
  },
  {
    path: 'finish-service',
    loadChildren: () => import('./modules/finish-service/finish-service.module').then( m => m.FinishServicePageModule)
  },
  {
    path: 'qualify',
    loadChildren: () => import('./modules/qualify/qualify.module').then( m => m.QualifyPageModule)
  },
  {
    path: 'map-modal',
    loadChildren: () => import('./modules/map-modal/map-modal.module').then( m => m.MapModalPageModule)
  },
  {
    path: 'map-videocall',
    loadChildren: () => import('./modules/map-videocall/map-videocall.module').then( m => m.MapVideocallPageModule)
  },
  {
    path: 'medicines-supplies',
    loadChildren: () => import('./modules/medicines-supplies/medicines-supplies.module').then( m => m.MedicinesSuppliesPageModule)
  },
  {
    path: 'medicines-supplies-add',
    loadChildren: () => import('./modules/medicines-supplies-add/medicines-supplies-add.module').then( m => m.MedicinesSuppliesAddPageModule)
  },
  {
    path: 'settings-modal',
    loadChildren: () => import('./modules/settings-modal/settings-modal.module').then( m => m.SettingsModalPageModule)
  },
  {
    path: 'add-sickness',
    loadChildren: () => import('./modules/add-sickness/add-sickness.module').then( m => m.AddSicknessPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
