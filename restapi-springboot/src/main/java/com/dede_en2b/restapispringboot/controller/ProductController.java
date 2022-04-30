package com.dede_en2b.restapispringboot.controller;


import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("http://localhost:3000/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping( value ="add", method = RequestMethod.POST)
    @ResponseBody
    public String addProduct(@RequestBody Product product){
        productService.saveProduct(product);
        return "New Product is added";
    }

    @GetMapping("list")
    public List<Product>getList() {
        return productService.getAllProducts();

    }

    @GetMapping("{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);

    }

    @GetMapping("list/{category}")
    public List<Product> getAllProductsByCategory(@PathVariable String category) {
        return productService.getAllProductsByCategory(category);
    }


}
