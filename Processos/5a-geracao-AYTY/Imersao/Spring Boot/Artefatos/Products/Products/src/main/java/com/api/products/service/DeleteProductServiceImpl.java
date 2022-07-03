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
public class DeleteProductServiceImpl implements DeleteProductService {

    private final ProductRepository repository;

    @Override
    public void delete(UUID id) throws EntityNotFindException {
        Optional<ProductModel> productOptional = repository.findByUuid(id);
        if (productOptional.isPresent()){
             repository.deleteById(productOptional.get().getId());
        }else {
            throw new EntityNotFindException(id, ProductModel.class.getSimpleName());
        }
    }
}
