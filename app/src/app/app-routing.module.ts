import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpGuard } from './core/http.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then( m => m.UserPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/tabs/tabs.module').then( m => m.TabsPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'family-group',
    loadChildren: () => import('./modules/family-group/family-group.module').then( m => m.FamilyGroupPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'medical-form',
    loadChildren: () => import('./modules/medical-form/medical-form.module').then( m => m.MedicalFormPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./modules/change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./modules/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('./modules/chat/chat.module').then( m => m.ChatPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'course/:id',
    loadChildren: () => import('./modules/course/course.module').then( m => m.CoursePageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'new-emergency',
    loadChildren: () => import('./modules/new-emergency/new-emergency.module').then( m => m.NewEmergencyPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'video-call',
    loadChildren: () => import('./modules/video-call/video-call.module').then( m => m.VideoCallPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'confirm-video-call',
    loadChildren: () => import('./modules/confirm-video-call/confirm-video-call.module').then( m => m.ConfirmVideoCallPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'travel',
    loadChildren: () => import('./modules/travel/travel.module').then( m => m.TravelPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'qualify',
    loadChildren: () => import('./modules/qualify/qualify.module').then( m => m.QualifyPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  },
  {
    path: 'emergency-detail',
    loadChildren: () => import('./modules/emergency-detail/emergency-detail.module').then(m => m.EmergencyDetailPageModule)
  },
  {
    path: 'news-detail/:id',
    loadChildren: () => import('./modules/news-detail/news-detail.module').then( m => m.NewsDetailPageModule),
    data: { roles: [ 'user' ] },
    canActivate: [HttpGuard]
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
