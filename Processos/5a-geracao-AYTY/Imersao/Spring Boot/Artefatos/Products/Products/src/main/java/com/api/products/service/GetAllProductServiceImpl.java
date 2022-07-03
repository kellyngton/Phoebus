package com.api.products.service;

import com.api.ProductModel;
import com.api.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllProductServiceImpl implements GetAllProductService {

    private final ProductRepository repository;

    @Override
    public List<ProductModel> getAllProducts() {
        return this.repository.findAll();
    }
}
