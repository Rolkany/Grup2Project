package com.App.Grupo2.models;

/* ---------- Importaciones ---------- */
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/* ---------- Generar constructores, getters, y setters ---------- */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class UserLogin {
    private String email;
    private String pass;
}
