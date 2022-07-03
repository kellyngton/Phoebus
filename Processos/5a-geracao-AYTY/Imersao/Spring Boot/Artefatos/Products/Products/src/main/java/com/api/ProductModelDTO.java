package com.api;


import lombok.*;

import java.util.UUID;

@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
@Setter
public class ProductModelDTO {

    private UUID uuid;
    private String name;
    private Double price;

    /*
    * Com builder, permite coverter o objeto com mais facilidade
    * */
    public static ProductModelDTO from(ProductModel productModel) {

        return ProductModelDTO.builder()
                .uuid(productModel.getUuid())
                .name(productModel.getName())
                .price(productModel.getPrice())
                .build();
    }
}
