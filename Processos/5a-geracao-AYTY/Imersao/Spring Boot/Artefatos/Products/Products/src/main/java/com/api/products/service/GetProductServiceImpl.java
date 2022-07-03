package com.api.products.service;

import com.api.ProductModel;
import com.api.ProductRepository;
import com.api.exception.EntityNotFindException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class GetProductServiceImpl implements GetProductService {
    private final ProductRepository repository;

    @Override
    public ProductModel getByUuid(UUID id) throws EntityNotFindException {
        return repository.findByUuid(id)
                .orElseThrow(() -> new EntityNotFindException(id, ProductModel.class.getSimpleName())
                );
    }
}
