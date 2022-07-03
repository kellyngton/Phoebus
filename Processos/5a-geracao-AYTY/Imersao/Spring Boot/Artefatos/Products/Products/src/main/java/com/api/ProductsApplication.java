package com.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ProductsApplication {


    public static void main(String[] args) {
        SpringApplication.run(ProductsApplication.class, args);
    }

    //Usando injecao de dependencia sem anotation
    public ProductsApplication(ProductController productController) {
        super();
        this.productController = productController;
    }

    private ProductController productController;


}
