package com.dede_en2b.restapispringboot.repository;

import com.dede_en2b.restapispringboot.model.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findAllByUser(String user);
}
