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
        saveProduct(new Product("Strawberry", "Fruit", 3.73, "https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"));
        saveProduct(new Product("Salmon", "Fish", 14.20, "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"));
        saveProduct(new Product("Orange", "Fruit", 0.96, "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"));
        saveProduct(new Product("Potatoes", "Vegetable", 0.87, "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"));
        saveProduct(new Product("Cauliflower", "Vegetable", 1.03, "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"));
        saveProduct(new Product("Carrot", "Vegetable", 1.25, "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"));
        saveProduct(new Product("Sardine", "Fish", 3.45, "https://images.unsplash.com/photo-1601287434271-f07c300b21bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"));
        saveProduct(new Product("Lamb", "Meat", 4.55, "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"));
        saveProduct(new Product("Raspberry", "Fruit", 8.75, "https://images.unsplash.com/photo-1624813743954-d32f24df6cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"));
        saveProduct(new Product("Watermelon", "Fruit", 3.50, "https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"));
        saveProduct(new Product("Tomato", "Vegetable", 1.79, "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"));
        saveProduct(new Product("Banana", "Fruit", 1.08, "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"));
        saveProduct(new Product("Spinach", "Vegetable", 1.00, "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"));
        saveProduct(new Product("Ham", "Meat", 2.85, "https://images.unsplash.com/photo-1609518317991-10acee259279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"));
        saveProduct(new Product("Apple", "Fruit", 1.99, "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"));


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
