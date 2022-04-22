package com.dede_en2b.restapispringboot.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    private double totalPrice;
    private String status;
    private String address;
    private int postalCode;

    @OneToMany (mappedBy = "order",
            cascade = CascadeType.REMOVE,
            fetch=FetchType.EAGER)
    @JsonManagedReference
    private Set<OrderProduct> orderProducts;

    public Order() {
    }

    public Order(String user, double totalPrice) {
        this.user = user;
        this.totalPrice = totalPrice;
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

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Set<OrderProduct> getOrderProducts() {
        return new HashSet<>(orderProducts);
    }

    public Set<OrderProduct> _getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(Set<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }
    public void setUser(String user) { this.user = user; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }

    public String getAddress() { return address; }

    public void setAddress(String address) { this.address = address; }

    public int getPostalCode() { return postalCode; }

    public void setPostalCode(int postalCode) { this.postalCode = postalCode; }

}
