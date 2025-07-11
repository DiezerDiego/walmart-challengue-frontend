import { Routes } from '@angular/router';
import { Department } from './department/department';
import { Item } from './item/item';

export const routes: Routes = [
  {
    path: 'department',
    component: Department
  },
  {
    path: 'department/:number/items',
    component: Item
  },
  {
    path: '',
    redirectTo: '/department',
    pathMatch: 'full'
  }
];
