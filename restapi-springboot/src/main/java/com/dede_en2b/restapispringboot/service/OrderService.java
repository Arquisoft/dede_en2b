package com.dede_en2b.restapispringboot.service;

import com.dede_en2b.restapispringboot.model.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {

    public Order saveOrder(Order order);
    public List<Order> getUserOrders(String user_id);
    public List<Order> getAllOrders();
    public Order getOrderById(Long order_id);
}
