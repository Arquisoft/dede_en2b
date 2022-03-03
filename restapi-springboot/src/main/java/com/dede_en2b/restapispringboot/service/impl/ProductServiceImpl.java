package com.dede_en2b.restapispringboot.service.impl;

import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.repository.ProductRepository;
import com.dede_en2b.restapispringboot.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @PostConstruct
    public void init(){
        saveProduct(new Product("Strawberry", "Fruit", 1.23));
        saveProduct(new Product("Salmon", "Fish", 3.20));
        saveProduct(new Product("Orange", "Fruit", 0.96));
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<Product>();
        productRepository.findAll().forEach(products::add);
        return products;
    }
}
