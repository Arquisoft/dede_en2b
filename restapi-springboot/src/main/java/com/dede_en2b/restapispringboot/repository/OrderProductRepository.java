package com.dede_en2b.restapispringboot.repository;

import com.dede_en2b.restapispringboot.model.OrderProduct;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductRepository extends CrudRepository<OrderProduct, Long> {
}
