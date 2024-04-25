/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.models;

import lombok.Data;
/* ---------- Importaciones ---------- */
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

/* ---------- Generar constructores, getters, y setters ---------- */
@Data
@Entity

/*
 * - Clase Users que representa una entidad en la base de datos
 * -
 */
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String date;
    private int availableTicket;
    private double price;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "event_id")
    private Set<Reviews> reviews = new HashSet<>();
}