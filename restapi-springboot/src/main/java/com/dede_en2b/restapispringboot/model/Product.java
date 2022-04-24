package com.dede_en2b.restapispringboot.model;

import javax.persistence.*;
import javax.sound.midi.MidiMessage;
import java.util.Objects;

@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String category;
    private double price;
    private String image;
    private String description;

    public Product( String name, String category, double price, String image, String description){
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Double.compare(product.price, price) == 0 && name.equals(product.name) && category.equals(product.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, category, price);
    }
}
