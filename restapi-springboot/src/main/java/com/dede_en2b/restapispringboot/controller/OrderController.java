package com.dede_en2b.restapispringboot.controller;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.service.OrderService;
import com.dede_en2b.restapispringboot.service.ProductService;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("order/")
@CrossOrigin("http://localhost:3000/")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("add")
    public String addProduct(@RequestBody Order order){
        orderService.saveOrder(order);
        return "New Order is added";
    }

    @GetMapping("list")
    public List<Order> getList() {
        return orderService.getAllOrders();
    }

    @GetMapping("listByUser/{webId}")
    public List<Order> getListByUser(@PathVariable String webId) {
        return orderService.getUserOrders(webId);
    }

    @GetMapping("{orderId}")
    public Order getOrderById(@PathVariable Long orderId) {
        return  orderService.getOrderById(orderId);
    }
}
