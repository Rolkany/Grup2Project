/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.models;

import lombok.Data;
/* ---------- Importaciones ---------- */
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

/* ---------- Generar constructores, getters, y setters ---------- */
@Data
@Entity

/*
 * ---------- Clase Users que representa una entidad en la base de datos
 * ----------
 */
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String userName;
    private String pass;
    private double coin;
}
