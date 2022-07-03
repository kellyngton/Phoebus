package com.api;

import lombok.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductRecieveDTO {

    @Size(min = 2)
    @NotBlank(message = "Name cannot be void or null.")
    private String name;

    @Min(value = 0, message = "Price cannot be negative value.")
    @NotNull(message = "Price cannot be null.")
    private Double price;


    public static ProductModel to (ProductRecieveDTO productModel) {
        return ProductModel.builder()
                .name(productModel.getName())
                .price(productModel.getPrice())
                .build();
    }
}
