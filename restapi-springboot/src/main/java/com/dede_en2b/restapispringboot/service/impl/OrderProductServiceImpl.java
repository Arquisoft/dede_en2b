package com.dede_en2b.restapispringboot.service.impl;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import com.dede_en2b.restapispringboot.repository.OrderProductRepository;
import com.dede_en2b.restapispringboot.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderProductServiceImpl implements OrderProductService {

    @Autowired
    private OrderProductRepository orderProductRepository;

    @Override
    public OrderProduct saveOrderProduct(OrderProduct order) {
        return orderProductRepository.save(order);
    }

    @Override
    public List<OrderProduct> getOrderOrderProducts(String user_id) {
        List<OrderProduct> res = new ArrayList<OrderProduct>();
        res.add(orderProductRepository.findById(Long.valueOf(user_id)).get());

        return res;
    }
}
