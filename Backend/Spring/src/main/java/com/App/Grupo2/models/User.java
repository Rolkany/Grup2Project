package com.App.Grupo2.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String userName;
    private String email;
    private String pass;
    private String imgUrl;
    private String firstName;
    private String lastName;
    private int age;
    private String des;
    private int phone;
    private String address;
    private int points;

}
