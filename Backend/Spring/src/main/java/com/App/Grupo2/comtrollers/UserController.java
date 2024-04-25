/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Importaciones ---------- */
import java.util.List;
import java.util.Optional;

import com.App.Grupo2.models.User;
import com.App.Grupo2.models.UserLogin;
import com.App.Grupo2.repositories.UserRepository;
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

    UserRepository ur;

    /* ----- Constructor que inicializa el repositorio de usuarios ----- */
    UserController(UserRepository ur) {
        this.ur = ur;
    }

    /* ----- Maneja las solicitudes GET a /users ----- */
    @GetMapping("/users")
    public List<User> getAll() {
        return this.ur.findAll();
    }

    /* ----- Maneja las solicitudes GET a /users/id/{id} por id ----- */
    @GetMapping("/users/id/{id}")
    public User oneById(@PathVariable("id") int id) {
        Optional<User> op = this.ur.findById(id);
        if (op.isEmpty()) {
            return null;
        }
        return op.get();
    }

    /* ----- Maneja las solicitudes POST a /users ----- */
    @PostMapping("/users")
    public int addUser(@RequestBody User newUser) {
        User user = this.ur.saveAndFlush(newUser);
        return user.getId();
    }

    /* ----- Maneja las solicitudes POST a /users/login ----- */
    @PostMapping("/users/login")
    public int login(@RequestBody UserLogin login) {
        User u = this.ur.findByEmail(login.getEmail());
        if (u.getPass().equals(login.getPass())) {

            return u.getId();
        }
        return -1;
    }

    /* ----- Maneja las solicitudes DELETE a /users/{id}s ----- */
    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable("id") int id) {
        this.ur.deleteById(id);
        return "Usuario eliminado";
    }

    /* ----- Maneja las solicitudes PUT a /users/{id} ----- */
    @PutMapping("/users/{id}")
    public String putUser(@PathVariable int id, @RequestBody User user) {
        User userTemp = this.oneById(id);
        if (userTemp == null) {
            return "No encontrado";
        }
        userTemp.setFirstName(user.getFirstName());
        userTemp.setLastName(user.getLastName());
        userTemp.setEmail(user.getEmail());
        userTemp.setUserName(user.getUserName());
        this.ur.save(user);
        return "Usuario actualizado";
    }
}
