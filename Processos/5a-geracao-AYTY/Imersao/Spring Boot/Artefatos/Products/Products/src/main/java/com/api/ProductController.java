package com.api;

import com.api.exception.EntityNotFindException;
import com.api.products.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RequestMapping("/v1/products")
@RestController
@RequiredArgsConstructor
public class ProductController {

    /* Utilizando injecao de dependencia sem anotatiom @Autowired

     * OCP, do solid, deixando fechado para modificação nossos serviços e abertos para extensão.

     */

    private final PostProductService postProductService;

    private final GetProductService getProductService;


    private final UpdateProductService putProductService;

    private final DeleteProductService deleteProductService;

    private final GetAllProductService getAllProductService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ProductModelDTO saveProduct(@RequestBody @Valid ProductRecieveDTO productModelDTO) {
        return ProductModelDTO.from(postProductService.save(ProductRecieveDTO.to(productModelDTO)));
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductModelDTO getProductById(@PathVariable UUID id) throws EntityNotFindException {

        return ProductModelDTO.from(getProductService.getByUuid(id));
    }


    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductModelDTO updateProductByiD(@PathVariable UUID id, @RequestBody @Valid ProductRecieveDTO productModelDTO)
            throws EntityNotFindException {
        return ProductModelDTO.from(putProductService.update(id, ProductRecieveDTO.to(productModelDTO)));
    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable UUID id) throws EntityNotFindException {
         deleteProductService.delete(id);
    }


}
