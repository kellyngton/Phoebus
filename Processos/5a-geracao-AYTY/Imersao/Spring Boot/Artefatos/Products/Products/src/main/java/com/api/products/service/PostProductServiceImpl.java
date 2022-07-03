package com.api.products.service;

import com.api.ProductModel;
import com.api.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PostProductServiceImpl implements PostProductService {

    private final ProductRepository productRepository;

    @Override
    public ProductModel save(ProductModel productModel) {
        productModel.setUuid(UUID.randomUUID());    //setamos o UUID randomicamente.
        return productRepository.save(productModel);
    }
}
