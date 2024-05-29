package com.App.Grupo2.models;

import java.util.HashSet;

import java.util.Set;
import java.time.LocalDateTime;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.JoinTable;
//import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
//import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imgUrl;
    private String title;
    private LocalDateTime eventDate;
    private String des;
    @OneToOne
    @JoinColumn(name = "createdBy", referencedColumnName = "id")
    private User createdBy;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "language")
    private Set<Language> languages = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "location")
    private Set<Location> locations = new HashSet<>();

}

// el campo createdBy tiene una relacion oney to one con la entidad User✅

// el campo language_id tiene una relacion one to many con la tabla languages✅

// Codigo por implementar a la clase
// @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval =
// true)
// @JoinColumn(name = "event_id")
// private Set<Reviews> reviews = new HashSet<>();clear
// private List<User> users = new HashSet<>();
