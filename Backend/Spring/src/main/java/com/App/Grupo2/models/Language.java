/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.models;

/* ---------- Imports ---------- */
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

/* ----- Spring annotations ----- */
@Data
@Entity

public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String language;
}
