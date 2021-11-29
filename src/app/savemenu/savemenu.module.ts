import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavemenuPageRoutingModule } from './savemenu-routing.module';

import { SavemenuPage } from './savemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavemenuPageRoutingModule
  ],
  declarations: [SavemenuPage]
})
export class SavemenuPageModule {}
