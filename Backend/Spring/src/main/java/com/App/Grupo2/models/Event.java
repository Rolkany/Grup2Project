package com.App.Grupo2.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imgUrl;
    private String title;
    private String eventDate;
    private String desc;
    private int createdBy;
    private int language_id;

}

// Codigo por implementar a la clase
// @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval =
// true)
// @JoinColumn(name = "event_id")
// private Set<Reviews> reviews = new HashSet<>();
