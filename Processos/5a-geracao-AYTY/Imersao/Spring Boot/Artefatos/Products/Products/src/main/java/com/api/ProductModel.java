package com.api;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.UUID;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "productsbase")
public class ProductModel implements Serializable {

    @Id
    private String id;

    private UUID uuid;
    private String name;
    private Double price;

    public ProductModel(String nome, Double price) {
        this.name = nome;
        this.price = price;
    }
}

