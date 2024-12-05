import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderFooterComponent } from '../components/header-footer/header-footer.component';
import { MonetaryPipe } from '../pipes/monetary.pipe';

@NgModule({
  declarations: [
    HeaderFooterComponent,
    MonetaryPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderFooterComponent,
    MonetaryPipe
  ]
})
export class SharedModule {}
