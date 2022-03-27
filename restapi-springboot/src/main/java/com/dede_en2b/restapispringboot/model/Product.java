package com.dede_en2b.restapispringboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.sound.midi.MidiMessage;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String category;
    private double price;
    private String image;

    public Product( String name, String category, double price, String image){
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }

    public Product(String json){


    }

    public Product() { }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() { return image; }

    public void setImage(String image) { this.image = image; }
}
