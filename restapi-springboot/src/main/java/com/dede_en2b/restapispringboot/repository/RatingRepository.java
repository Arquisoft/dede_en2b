package com.dede_en2b.restapispringboot.repository;

import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.model.Rating;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long> {

    List<Rating> findAllByProductId(Long product_id);
}
