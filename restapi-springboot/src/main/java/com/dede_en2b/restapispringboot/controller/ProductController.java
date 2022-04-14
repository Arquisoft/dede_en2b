package com.dede_en2b.restapispringboot.controller;


import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("add")
    public String addProduct(@RequestBody Product product){
        productService.saveProduct(product);
        return "New Product is added";
    }

    @GetMapping("list")
    public List<Product>getList() {
        return productService.getAllProducts();

    }


}
