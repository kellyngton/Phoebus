package com.api.products.service;

import com.api.ProductModel;

@FunctionalInterface
public interface PostProductService {
    ProductModel save(ProductModel productModel);

}
