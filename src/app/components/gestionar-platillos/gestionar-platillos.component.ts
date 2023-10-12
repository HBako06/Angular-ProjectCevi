import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-gestionar-platillos',
  templateUrl: './gestionar-platillos.component.html',
  styleUrls: ['./gestionar-platillos.component.css']
})
export class GestionarPlatillosComponent implements OnInit {
  form: FormGroup;
  listProducts: Product[] = [];
  selectedItemId: number | null = null; // Declara la variable selectedItemId para almacenar el ID seleccionado

  constructor(private fb: FormBuilder, private _productService: ProductService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getListProducts(); // Llama al método usando ()
  }

  getListProducts() {
    this._productService.getListProducts().subscribe((data: Product[]) => {
      //console.log(data);
      this.listProducts = data;
    });
  }

  addProduct() {
    // Capturando valores
    console.log(this.form.value.name);
    console.log(this.form.value.categoria)
    
    const product: Product = {
      nombrePlatillo: this.form.value.name,
      categoriaID: this.form.value.categoria,
    };
    console.log('Objeto de Producto:', product);
    this._productService.saveProduct(product).subscribe(
      response => {
        console.log(product);
        this.getListProducts();
        this.form.reset();
      })
    //console.log(product);
  }

  openDeleteModal(itemId: number) {
    this.selectedItemId = itemId;
    // Abre el modal aquí
  }


  deleteProduct() {
    if (this.selectedItemId !== null) {

      this._productService.deleteProduct(this.selectedItemId).subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          this.getListProducts();
          this.selectedItemId = null;
        },
        error => {
          console.error('Error eliminando el platillo:', error);
        }
      );
      console.log('Producto eliminado con ID:', this.selectedItemId);
      // Limpiar el ID seleccionado después de eliminar el producto

    }
  }

}
