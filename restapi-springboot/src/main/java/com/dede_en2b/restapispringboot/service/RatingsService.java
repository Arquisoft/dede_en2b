package com.dede_en2b.restapispringboot.service;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import com.dede_en2b.restapispringboot.model.Rating;

import java.util.List;

public interface RatingsService {
    Rating saveRating(Rating rating);
    List<Rating> getRatingsByProductId(Long product_id);
}
