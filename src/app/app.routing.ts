import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegListComponent } from './keg-list/keg-list.component';
import { AboutComponent }   from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: KegListComponent
  },
  {
   path: 'about',
   component: AboutComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
