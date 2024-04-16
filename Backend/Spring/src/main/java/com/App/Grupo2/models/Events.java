/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.models;

/* ---------- Importaciones ---------- */
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

/* ---------- Generar constructores, getters, y setters ---------- */
@NoArgsConstructor
@Getter
@Setter
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
}