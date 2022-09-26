import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CardProductComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [CardProductComponent, HeaderComponent],
})
export class ComponentsModule {}
