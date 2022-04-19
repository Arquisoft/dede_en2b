package com.dede_en2b.restapispringboot.service;

import com.dede_en2b.restapispringboot.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService {
    public Product saveProduct(Product product);
    public List<Product> getAllProducts();
    Product getProductById(Long id);
}
