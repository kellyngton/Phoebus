package com.api.products.service;

import com.api.ProductRepository;
import com.api.exception.EntityNotFindException;
import com.api.products.builders.ProductModelBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;
import java.util.UUID;

import static java.util.UUID.fromString;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
public class DeleteProductServiceImplTest {

    private DeleteProductServiceImpl deleteProductService;
    @Mock
    private ProductRepository repository;

    @BeforeEach
    void setUp() {
        this.deleteProductService = new DeleteProductServiceImpl(repository);
    }

    @Test
    void deleteWhenIdExistingTest() throws Exception {
        //Arrange
        when(repository.findByUuid(UUID.fromString("97aa5daa-8c7c-433f-9e58-781146fc6a8f")))
                .thenReturn(Optional.of(ProductModelBuilder.productModel1L()));
        //act
        deleteProductService.delete(fromString("97aa5daa-8c7c-433f-9e58-781146fc6a8f"));

        //assertion
        verify(repository, times(1)).findByUuid(any());
        verify(repository, times(1)).deleteById(any());
    }

    @Test
    void deleteWhenIdDontExistingTest(){
        //Arrange
        when(repository.findByUuid(UUID.fromString("97aa5daa-8c7c-433f-9e58-781146fc6a8f")))
                .thenReturn(Optional.empty());

        //Act
        assertThrows(EntityNotFindException.class, () -> deleteProductService.delete(fromString("97aa5daa-8c7c-433f-9e58-781146fc6a8f")));

        //Assert
        verify(repository, never()).findById("1L");
        verify(repository, never()).delete(any());
    }
}
