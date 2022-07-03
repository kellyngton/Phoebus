package com.api.products.builders;

import com.api.ProductModel;
import com.api.ProductRecieveDTO;

import java.util.UUID;

public class ProductModelBuilder {

    public static ProductModel productModel1L() {
        return ProductModel.builder()
                .id(String.valueOf(1l))
                .uuid(UUID.fromString("97aa5daa-8c7c-433f-9e58-781146fc6a8f"))
                .name("Placa de vídeo")
                .price(460.32)
                .build();
    }

    public static ProductModel productModel2L() {
        return ProductModel.builder()
                .id(String.valueOf(2l))
                .uuid(UUID.fromString("7h1h2g8s-k8s3-45it-9g7v-kj34l68sn47s"))
                .name("Processador Corei5")
                .price(890.86)
                .build();
    }

    public static ProductModel productModel3L() {
        return ProductModel.builder()
                .id(String.valueOf(3l))
                .uuid(UUID.fromString("nm5bv498-4l1j-4n8h-gn45-65jg8f3js0k3"))
                .name("Fonte notebook dell")
                .price(378.97)
                .build();
    }


    //TODO
    public static ProductRecieveDTO product1LRecieve() {
        return ProductRecieveDTO.builder()
                .name("Placa de vídeo")
                .price(460.32)
                .build();
    }

    public static ProductRecieveDTO product2LRecieve() {
        return ProductRecieveDTO.builder()
                .name("Processador Corei5")
                .price(890.86)
                .build();
    }

}


