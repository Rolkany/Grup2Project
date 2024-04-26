package com.App.Grupo2.comtrollers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.App.Grupo2.models.Rol;

import com.App.Grupo2.services.RolServices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*")
@RestController
public class RolController {

    RolServices rolServices;

    RolController(RolServices rolServices) {
        this.rolServices = rolServices;
    }

    @GetMapping("/roles")
    public List<Rol> getAll() {
        return rolServices.getAll();
    }

    @GetMapping("/roles/id/{id}")
    public Rol oneById(@PathVariable("id") int id) {
        return rolServices.oneById(id).orElse(null);
    }

    @PostMapping("/roles")
    public int addRol(@RequestBody Rol entity) {
        Rol rol = rolServices.addRol(entity);
        return rol.getId();
    }

    @DeleteMapping("/roles/{id}")
    public String deleteRol(@PathVariable("id") int id) {
        rolServices.deleteRol(id);
        return "Rol eliminado";
    }

    @PutMapping("/roles/{id}")
    public String putRol(@PathVariable int id, @RequestBody Rol rolToUpdate) {
        Rol rol = rolServices.putRol(id, rolToUpdate);
        if (rol != null) {
            return "Rol actualizado";
        }
        return "Rol no encontrado";
    }

}
