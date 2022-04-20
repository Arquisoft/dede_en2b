package com.dede_en2b.restapispringboot.service.impl;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.model.Rating;
import com.dede_en2b.restapispringboot.repository.OrderProductRepository;
import com.dede_en2b.restapispringboot.repository.OrderRepository;
import com.dede_en2b.restapispringboot.repository.ProductRepository;
import com.dede_en2b.restapispringboot.service.OrderProductService;
import com.dede_en2b.restapispringboot.service.OrderService;
import com.dede_en2b.restapispringboot.service.ProductService;
import com.dede_en2b.restapispringboot.service.RatingsService;
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

    @Autowired
    private RatingsService ratingsService;

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

        productService.saveProduct(strawberry = new Product("Strawberry", "Fruit", 3.73, "https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80","A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces. Strawberries are soft, sweet, bright red berries. They're also delicious. Strawberries have tiny edible seeds, which grow all over their surface."));
        productService.saveProduct(salmon = new Product("Salmon", "Fish", 14.20, "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80","The salmon (not to be confused with salmonella), is a fish that is typically eaten in special occasions, due to its appealing taste, and the ease with which you can eat it. It is a very good choice for family dinners."));
        productService.saveProduct(orange = new Product("Orange", "Fruit", 0.96, "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80","A very versatile fruit, which can be eaten directly or used to make juice. They are directly imported from Valencia."));
        productService.saveProduct(potatoes = new Product("Potatoes", "Vegetable", 0.87, "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80","One of the most used vegetable in the world. You can fry them, boil them... there are endless possibilities with a potato, totally recommended if you are not sure about what to cook."));
        productService.saveProduct(cauliflower = new Product("Cauliflower", "Vegetable", 1.03, "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80","A healthy choice, can be used in several different dishes, or eaten directly."));
        productService.saveProduct(carrot = new Product("Carrot", "Vegetable", 1.25, "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80","Another popular choice among vegetables. It has a lot of vitamins and can also help you improve your sight."));
        productService.saveProduct(sardine = new Product("Sardine", "Fish", 3.45, "https://images.unsplash.com/photo-1601287434271-f07c300b21bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","A tasty kind of fish."));
        productService.saveProduct(lamb = new Product("Lamb", "Meat", 4.55, "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","A good kind of meat. It can be used to make sauce. Not vegan."));
        productService.saveProduct(raspberry = new Product("Raspberry", "Fruit", 8.75, "https://images.unsplash.com/photo-1624813743954-d32f24df6cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","A sweet fruit which is used in several desserts or eaten directly. Some raspberries have a notorious processing power."));
        productService.saveProduct(watermelon = new Product("Watermelon", "Fruit", 3.50, "https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80","Can be eaten any time of the year, but it is a must-have in summer. It is a delicious fruit with a refreshing taste."));
        productService.saveProduct(tomato = new Product("Tomato", "Vegetable", 1.79, "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80","It can be used for salads, for making sauce... Essential for many dishes."));
        productService.saveProduct(banana = new Product("Banana", "Fruit", 1.08, "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80","One of the most consumed fruits in the world. It has countless benefits and a good taste."));
        productService.saveProduct(spinach = new Product("Spinach", "Vegetable", 1.00, "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80","Contains several nutritive properties. It can also help you build muscles."));
        productService.saveProduct(ham = new Product("Ham", "Meat", 2.85, "https://images.unsplash.com/photo-1609518317991-10acee259279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80","A very good choice for appetizer or to be used in a dish."));
        productService.saveProduct(apple = new Product("Apple", "Fruit", 1.99, "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80","Probably the most popular fruit that exists, it appears in a lot of parts of the culture (the Bible, Newton's biography, Steve Job's company...) and it is justified, as it is a very nutritive and affordable choice."));


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


        ratingsService.saveRating(new Rating("admin", "nice salmon", 5.0, "", salmon));

    }
}
