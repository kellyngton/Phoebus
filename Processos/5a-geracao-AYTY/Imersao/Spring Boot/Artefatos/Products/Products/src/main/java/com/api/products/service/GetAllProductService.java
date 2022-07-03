package com.api.products.service;

import com.api.ProductModel;

import java.util.List;


@FunctionalInterface
public interface GetAllProductService {

    List<ProductModel> getAllProducts();
}
