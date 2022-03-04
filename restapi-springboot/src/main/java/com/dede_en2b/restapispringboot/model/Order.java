package com.dede_en2b.restapispringboot.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate date;

    private String user;
    private float totalPrice;

    @OneToMany (mappedBy = "product",
                cascade = CascadeType.REMOVE)
    private Set<OrderProduct> orderProducts;

    public Order() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getUser() {
        return user;
    }

    public void setUser_id(String user) {
        this.user = user;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Set<OrderProduct> getOrderProducts() {
        return new HashSet<>(orderProducts);
    }

    public Set<OrderProduct> _getOrderProducts() {
        return orderProducts;
    }
}
