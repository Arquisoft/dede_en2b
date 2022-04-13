package com.dede_en2b.restapispringboot.service.impl;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.repository.OrderProductRepository;
import com.dede_en2b.restapispringboot.repository.OrderRepository;
import com.dede_en2b.restapispringboot.repository.ProductRepository;
import com.dede_en2b.restapispringboot.service.OrderProductService;
import com.dede_en2b.restapispringboot.service.OrderService;
import com.dede_en2b.restapispringboot.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

@Service
public class InsertSampleDataService {

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderProductService orderProductService;

    @PostConstruct
    public void init(){
        Product strawberry;
        Product salmon;
        Product orange;
        Product potatoes;
        Product cauliflower;
        Product carrot;
        Product sardine;
        Product lamb;
        Product raspberry;
        Product watermelon;
        Product tomato;
        Product banana;
        Product spinach;
        Product ham;
        Product apple;

        productService.saveProduct(strawberry = new Product("Strawberry", "Fruit", 3.73, "https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"));
        productService.saveProduct(salmon = new Product("Salmon", "Fish", 14.20, "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"));
        productService.saveProduct(orange = new Product("Orange", "Fruit", 0.96, "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"));
        productService.saveProduct(potatoes = new Product("Potatoes", "Vegetable", 0.87, "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"));
        productService.saveProduct(cauliflower = new Product("Cauliflower", "Vegetable", 1.03, "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"));
        productService.saveProduct(carrot = new Product("Carrot", "Vegetable", 1.25, "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"));
        productService.saveProduct(sardine = new Product("Sardine", "Fish", 3.45, "https://images.unsplash.com/photo-1601287434271-f07c300b21bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"));
        productService.saveProduct(lamb = new Product("Lamb", "Meat", 4.55, "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"));
        productService.saveProduct(raspberry = new Product("Raspberry", "Fruit", 8.75, "https://images.unsplash.com/photo-1624813743954-d32f24df6cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"));
        productService.saveProduct(watermelon = new Product("Watermelon", "Fruit", 3.50, "https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"));
        productService.saveProduct(tomato = new Product("Tomato", "Vegetable", 1.79, "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"));
        productService.saveProduct(banana = new Product("Banana", "Fruit", 1.08, "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"));
        productService.saveProduct(spinach = new Product("Spinach", "Vegetable", 1.00, "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"));
        productService.saveProduct(ham = new Product("Ham", "Meat", 2.85, "https://images.unsplash.com/photo-1609518317991-10acee259279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"));
        productService.saveProduct(apple = new Product("Apple", "Fruit", 1.99, "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"));


        Order order1;
        order1 = new Order("00680074007400700073003a002f002f0070006f0064007000610063006c006100730065002e0069006e0072007500700074002e006e00650074002f00700072006f00660069006c0065002f00630061007200640023006d0065", 23.2);
        OrderProduct orderProduct1 = new OrderProduct(2, 2.0, apple, order1);
        OrderProduct orderProduct2 = new OrderProduct(10, 0.87, potatoes, order1);
        OrderProduct orderProduct3 = new OrderProduct(3, 3.50, watermelon, order1);
        Set<OrderProduct> products = new HashSet<>();
        products.add(orderProduct1);
        products.add(orderProduct2);
        products.add(orderProduct3);
        order1.setOrderProducts(products);
        order1.setStatus("SHIPPED");
        orderService.saveOrder(order1);
        orderProductService.saveOrderProduct(orderProduct1);
        orderProductService.saveOrderProduct(orderProduct2);
        orderProductService.saveOrderProduct(orderProduct3);

        Order order2;
        order2 = new Order("00680074007400700073003a002f002f0070006f0064007000610063006c006100730065002e0069006e0072007500700074002e006e00650074002f00700072006f00660069006c0065002f00630061007200640023006d0065", 2.08);
        OrderProduct orderProduct4 = new OrderProduct(1, 1.08, banana, order2);
        OrderProduct orderProduct5 = new OrderProduct(1, 1.00, spinach, order2);
        Set<OrderProduct> products2 = new HashSet<>();
        products2.add(orderProduct4);
        products2.add(orderProduct5);
        order2.setOrderProducts(products2);
        order2.setStatus("PROCESSING");
        orderService.saveOrder(order2);
        orderProductService.saveOrderProduct(orderProduct4);
        orderProductService.saveOrderProduct(orderProduct5);


    }
}
