package com.api.products.service;

import com.api.ProductModel;
import com.api.ProductRepository;
import com.api.exception.EntityNotFindException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateProductServiceImpl implements UpdateProductService {

    private final ProductRepository repository;
    @Override
    public ProductModel update(UUID id, ProductModel productModel) throws EntityNotFindException{
        Optional <ProductModel> optionalProductModel = repository.findByUuid(id);
        if (optionalProductModel.isPresent()){
            productModel.setId(optionalProductModel.get().getId());
            productModel.setUuid(id);
            return repository.save(productModel);
        }
        throw new EntityNotFindException(id, ProductModel.class.getSimpleName());
    }
}
