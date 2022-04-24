package com.dede_en2b.restapispringboot.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String user;
    private String comment;
    private double rating;
    private String profileImage;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Product product;

    public Rating(){}

    public Rating(String user, String comment, double rating, String profileImage){
        setUser(user);
        setComment(comment);
        setRating(rating);
        setProfileImage(profileImage);
    }

    public Rating(String user, String comment, double rating, String profileImage, Product product){
        setUser(user);
        setComment(comment);
        setRating(rating);
        setProfileImage(profileImage);
        this.product = product;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
