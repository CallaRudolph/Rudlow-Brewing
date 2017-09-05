import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegListComponent } from './keg-list/keg-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: KegListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
