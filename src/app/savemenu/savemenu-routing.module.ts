import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavemenuPage } from './savemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SavemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavemenuPageRoutingModule {}
