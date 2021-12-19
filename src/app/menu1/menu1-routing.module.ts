import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu1Page } from './menu1.page';

const routes: Routes = [
  {
    path: '',
    component: Menu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu1PageRoutingModule {}
