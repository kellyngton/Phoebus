package com.api.products.service;


import com.api.ProductModel;
import com.api.exception.EntityNotFindException;

import java.util.UUID;

@FunctionalInterface
public interface UpdateProductService {

    ProductModel update(UUID id, ProductModel productModel) throws EntityNotFindException;
}
