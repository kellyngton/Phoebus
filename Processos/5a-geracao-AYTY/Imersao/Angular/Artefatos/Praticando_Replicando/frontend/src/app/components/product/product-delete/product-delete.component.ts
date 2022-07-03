import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../views/product-crud/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: Number(null),
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.readById(id).subscribe(product => { this.product = product });
  }

  deleteProduct(): void{
    this.productService.deleteById(String(this.product.id)).subscribe(() => { this.productService.showMessage("Deletado com sucesso!!!");
    this.router.navigate(["/products"])});
  }

  cancel(): void{this.router.navigate(['/products']);}
}
