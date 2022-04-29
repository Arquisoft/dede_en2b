package com.dede_en2b.restapispringboot.service.impl;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.Rating;
import com.dede_en2b.restapispringboot.repository.OrderRepository;
import com.dede_en2b.restapispringboot.repository.RatingRepository;
import com.dede_en2b.restapispringboot.service.OrderService;
import com.dede_en2b.restapispringboot.service.RatingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class RatingsServiceImpl implements RatingsService {

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public Rating saveRating(Rating rating) {
        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getRatingsByProductId(Long product_id) {

        List<Rating> ratings = new ArrayList<>();

        ratingRepository.findAllByProductId(product_id).forEach(ratings :: add);

        return ratings;
    }
}
