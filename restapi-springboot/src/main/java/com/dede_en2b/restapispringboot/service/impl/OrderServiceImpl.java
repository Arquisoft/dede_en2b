package com.dede_en2b.restapispringboot.service.impl;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.repository.OrderRepository;
import com.dede_en2b.restapispringboot.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order saveOrder(Order order) {
        order.setDate(LocalDate.now());
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getUserOrders(String webId) {
        return orderRepository.findAllByUser(webId);
    }

    @Override
    public List<Order> getAllOrders() {
        List<Order> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);
        return orders;
    }

    @Override
    public Order getOrderById(Long order_id) {
        return orderRepository.findById(order_id).get();
    }

}
