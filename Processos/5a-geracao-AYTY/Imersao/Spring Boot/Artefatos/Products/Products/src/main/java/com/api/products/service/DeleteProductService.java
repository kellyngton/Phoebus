package com.api.products.service;

import com.api.exception.EntityNotFindException;

import java.util.UUID;

@FunctionalInterface
public interface DeleteProductService {

    void delete(UUID id) throws EntityNotFindException;
}
