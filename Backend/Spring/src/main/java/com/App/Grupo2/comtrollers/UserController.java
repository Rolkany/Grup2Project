/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Importaciones ---------- */
import java.util.List;
import java.util.Optional;
import com.App.Grupo2.models.Users;
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
    public List<Users> gelAll() {
        return this.ur.findAll();
    }

    /* ----- Maneja las solicitudes GET a /users/id/{id} por id ----- */
    @GetMapping("/users/id/{id}")
    public Users oneById(@PathVariable("id") int id) {
        Optional<Users> op = this.ur.findById(id);
        if (op.isEmpty()) {
            return null;
        }
        return op.get();
    }

    /* ----- Maneja las solicitudes POST a /users ----- */
    @PostMapping("/users")
    public int postMethodName(@RequestBody Users newUser) {
        Users user = this.ur.saveAndFlush(newUser);
        return user.getId();
    }

    /* ----- Maneja las solicitudes DELETE a /users/{id}s ----- */
    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable("id") int id) {
        this.ur.deleteById(id);
        return "User eliminated";
    }

    /* ----- Maneja las solicitudes PUT a /users/{id} ----- */
    @PutMapping("/users/{id}")
    public String putUser(@PathVariable int id, @RequestBody Users user) {
        Users userTemp = this.oneById(id);
        if (userTemp == null) {
            return "No encontrado";
        }
        @
        userTemp.setFirstName(user.getFirstName());
        userTemp.setLastName(user.getLastName());
        userTemp.setEmail(user.getEmail());
        userTemp.setUserName(user.getUserName());
        userTemp.setCoin(user.getCoin());
        this.ur.save(user);
        return "Usuario actualizado";
    }
}
