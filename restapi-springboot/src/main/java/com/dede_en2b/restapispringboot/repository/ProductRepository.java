package com.dede_en2b.restapispringboot.repository;

import com.dede_en2b.restapispringboot.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    List<Product> findAllByCategory(String category);
}
