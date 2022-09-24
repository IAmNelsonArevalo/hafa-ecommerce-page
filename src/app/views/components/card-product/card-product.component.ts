import { Component, Input, OnInit } from '@angular/core';
import {
  IProduct,
  IReferences,
} from 'src/app/models/interfaces/views/components/card-product.interfaces';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() product: Partial<IProduct> = {};

  imageResponse: string = '';
  image: string = '';
  rangePrices: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getImages();
    this.getRangeOfPrices();
  }

  getImages() {
    if (this.product.id) {
      const { references } = this.product;
      if (references) {
        const { references_images } = references[0];
        if (references_images) {
          this.image = references_images[0].url;
          this.imageResponse = references_images[0].url;
        }
      }
    }
  }

  getRangeOfPrices() {
    let pricesArray: Array<number> = [];
    if (this.product.id) {
      const { references } = this.product;
      if (references) {
        references.forEach((item: IReferences) => {
          pricesArray.push(parseInt(item.reference_value));
        });

        if (pricesArray.length === 1) {
          this.rangePrices = `$${new Intl.NumberFormat('co-CO').format(
            Math.min(...pricesArray)
          )}`;
        } else {
          let minNumber = new Intl.NumberFormat('co-CO').format(
            Math.min(...pricesArray)
          );
          let maxNumber = new Intl.NumberFormat('co-CO').format(
            Math.max(...pricesArray)
          );
          this.rangePrices = `Desde $${minNumber} hasta $${maxNumber}`;
        }
      }
    }
  }

  addToCart(id?: number) {
    console.log("Agregado al carrito");
  }
}
