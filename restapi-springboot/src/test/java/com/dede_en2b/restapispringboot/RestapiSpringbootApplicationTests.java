package com.dede_en2b.restapispringboot;

import com.dede_en2b.restapispringboot.model.Order;
import com.dede_en2b.restapispringboot.model.OrderProduct;
import com.dede_en2b.restapispringboot.model.Product;
import com.dede_en2b.restapispringboot.service.OrderProductService;
import com.dede_en2b.restapispringboot.service.OrderService;
import com.dede_en2b.restapispringboot.service.ProductService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;



@SpringBootTest
class RestapiSpringbootApplicationTests {

	@Autowired
	private ProductService productService;

	@Autowired
	private OrderProductService orderProductService;

	@Autowired
	private OrderService orderService;

	@Test
	void testAddAndGetProduct() {
		Product p1 = new Product("Test1", "Fruit", 3.73, "https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80","A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces. Strawberries are soft, sweet, bright red berries. They're also delicious. Strawberries have tiny edible seeds, which grow all over their surface.");
		productService.saveProduct(p1);
		Product p2 = productService.getProductById(p1.getId());
		Assertions.assertEquals(p1 , p2);
	}

	@Test
	void testAddAndGetOrder() {
		Product p1 = new Product("Test1", "Fruit", 1.99, "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80","Probably the most popular fruit that exists, it appears in a lot of parts of the culture (the Bible, Newton's biography, Steve Job's company...) and it is justified, as it is a very nutritive and affordable choice.");

		Order o1 = new Order("00680074007400700073003a002f002f0070006f0064007000610063006c006100730065002e0069006e0072007500700074002e006e00650074002f00700072006f00660069006c0065002f00630061007200640023006d0065", 23.2);
		OrderProduct orderProduct1 = new OrderProduct(2, 2.0, p1, o1);

		productService.saveProduct(p1);
		orderService.saveOrder(o1);
		orderProductService.saveOrderProduct(orderProduct1);

		Order retrieved = orderService.getOrderById(o1.getId());

		Assertions.assertEquals( o1 , retrieved);

	}

}
