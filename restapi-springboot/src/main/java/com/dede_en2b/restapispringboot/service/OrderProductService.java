package com.dede_en2b.restapispringboot.service;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import java.util.List;

public interface OrderProductService {
    public OrderProduct saveOrderProduct(OrderProduct order);
    public List<OrderProduct> getOrderOrderProducts(String webId);
}
