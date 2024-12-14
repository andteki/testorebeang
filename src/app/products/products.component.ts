import { Component } from '@angular/core';
import { EmpapiService } from '../shared/empapi.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any[] = [];

  constructor(private empapi: EmpapiService) { }

  ngOnInit() {
    this.empapi.getEmployees().subscribe((data: any) => {
      this.products = data;
    });
  }

}
