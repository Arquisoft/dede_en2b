package com.dede_en2b.restapispringboot.controller;


import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.model.Rating;
import com.dede_en2b.restapispringboot.service.ProductService;
import com.dede_en2b.restapispringboot.service.RatingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rating/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RatingsController {

    @Autowired
    private RatingsService ratingsService; //  ratingsservice

    @PostMapping("add")
    public String addRating(@RequestBody Rating rating){
        ratingsService.saveRating(rating);
        return "New rating has been added added";
    }

    @GetMapping("{id}")
    public List<Rating> getRatingsByProductId(@PathVariable Long id) {
        return ratingsService.getRatingsByProductId(id);

    }


}
