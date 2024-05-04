/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Importaciones ---------- */
import java.util.List;

import com.App.Grupo2.models.User;
import com.App.Grupo2.models.UserLogin;

import com.App.Grupo2.services.UserServices;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

/* ----- Anotación que indica que esta clase es un controlador REST ----- */
@RestController
@CrossOrigin(origins = "*")
/*
 * ----- Clase UserController que maneja las solicitudes relacionadas con los
 * usuarios --
 */
public class UserController {

    UserServices userServices;

    /* ----- Constructor que inicializa el repositorio de usuarios ----- */
    UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    /* ----- Maneja las solicitudes GET a /users ----- */
    @GetMapping("/users")
    public List<User> getAll() {
        return userServices.getAll();
    }

    /* ----- Maneja las solicitudes GET a /users/id/{id} por id ----- */
    @GetMapping("/users/id/{id}")
    public User oneById(@PathVariable("id") int id) {
        return userServices.oneById(id).orElse(null);
    }

    /* ----- Maneja las solicitudes POST a /users ----- */
    @PostMapping("/users")
    public int addUser(@RequestBody User newUser) {
        User user = userServices.addUser(newUser);
        return user.getId();
    }

    /* ----- Maneja las solicitudes POST a /users/login ----- */
    @PostMapping("/users/login")
    public int login(@RequestBody UserLogin login) {
        return userServices.login(login);
    }

    /* ----- Maneja las solicitudes DELETE a /users/{id}s ----- */
    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable("id") int id) {
        userServices.deleteUser(id);
        return "Usuario eliminado";
    }

    /* ----- Maneja las solicitudes PUT a /users/{id} ----- */
    @PutMapping("/users/{id}")
    public String putUser(@PathVariable int id, @RequestBody User userToUpdate) {
        User user = userServices.putUser(id, userToUpdate);
        if (user != null) {
            return "usuario actualizado";
        }
        return "Usuario no encontrado";
    }
}