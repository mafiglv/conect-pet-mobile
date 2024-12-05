import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderFooterComponent } from '../components/header-footer/header-footer.component';
import { MonetaryPipe } from '../pipes/monetary.pipe';
import { ExpandableTextDirective } from '../directives/expandable-text.directive';
import { FiltroPetsPipe } from '../pipes/filtro-pets.pipe';

@NgModule({
  declarations: [
    HeaderFooterComponent,
    MonetaryPipe,
    ExpandableTextDirective,
    FiltroPetsPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderFooterComponent,
    MonetaryPipe,
    ExpandableTextDirective,
    FiltroPetsPipe
  ]
})
export class SharedModule {}
