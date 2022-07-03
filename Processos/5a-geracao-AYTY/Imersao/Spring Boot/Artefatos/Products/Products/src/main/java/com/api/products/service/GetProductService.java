package com.api.products.service;


import com.api.ProductModel;
import com.api.exception.EntityNotFindException;

import java.util.UUID;

@FunctionalInterface
public interface GetProductService {
    ProductModel getByUuid(UUID id) throws EntityNotFindException;
}
