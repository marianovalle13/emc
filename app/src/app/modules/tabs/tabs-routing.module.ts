import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'emergency',
        loadChildren: () => import('../emergency/emergency.module').then(m => m.EmergencyPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then(m => m.CoursesPageModule)
      },
      {
        path: 'record',
        loadChildren: () => import('../record/record.module').then(m => m.RecordPageModule)
      },
      // {
      //   path: 'user',
      //   loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      // },
      {
        path: '',
        redirectTo: 'emergency',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
