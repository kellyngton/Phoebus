import { catchError, map } from 'rxjs/operators';
import { Product } from '../../components/product/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3034/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? "msg-error" : "msg-sucess"
    })
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(map(objProduct => { objProduct }), catchError(e => this.errorHandler(e)));

  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL).pipe(catchError(e => this.errorHandler(e)));
  }
  readById(id: String): Observable<Product> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url).pipe(catchError(e => this.errorHandler(e))); //TODO: mostar as informações dos prod. mesmo se a requisição falhar
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(url, product).pipe(map(objProduct => { objProduct }), catchError(e => this.errorHandler(e)));
  }
  /**
   * @function
   * TODO
   * @param id - recebe um id tipo String
   * @returns {Observable<Product>} - retorna um observável de produtos
   * O operador pipe permite usar vários operadores sobre o obeservável e retona um novo obersável. 
   */

  deleteById(id: String): Observable<Product> {
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Product>(url).pipe(catchError(e => this.errorHandler(e))).pipe(map(objProduct => { objProduct }), catchError(e => this.errorHandler(e)));
  }

  /**
   * trata erro de comunicação com back-end, retornando um Observable vazio.
   * @function
   * @param {any} e - status http do erro na tentativa de conexão.
   * @returns {Observable<any>}  - retorna um observável vazio.    
  */  
  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro, tente novamente!", true)
    return EMPTY;
  }

}
