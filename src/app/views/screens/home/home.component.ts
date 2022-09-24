import { Component, OnInit } from '@angular/core';
import { IRelevantProduct } from 'src/app/models/interfaces/views/screens/home.interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  relevantProducts: Array<IRelevantProduct> = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getRelevantProducts();
  }

  getRelevantProducts() {
    return this.homeService
      .getRelevantUsers()
      .subscribe((res) => (this.relevantProducts = res.data));
  }
}
