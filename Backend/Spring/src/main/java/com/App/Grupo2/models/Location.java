/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.models;

/* ---------- Imports ---------- */
import lombok.Data;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

/* ----- Spring annotations ----- */
@Data
@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String location;
    private String value;
    private String label;
    private String group_label;
<<<<<<< HEAD

=======
>>>>>>> origin/main
}
