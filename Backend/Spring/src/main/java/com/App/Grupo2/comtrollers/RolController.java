package com.App.Grupo2.comtrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.App.Grupo2.models.Rol;
import com.App.Grupo2.repositories.RolRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*")
@RestController
public class RolController {
    RolRepository r;

    RolController(RolRepository r) {
        this.r = r;
    }

    @GetMapping("/roles")
    public List<Rol> getAll() {
        return this.r.findAll();
    }

    @GetMapping("/roles/id/{id}")
    public Rol oneById(@PathVariable("id") int id) {
        Optional<Rol> lr = this.r.findById(id);
        if (lr.isEmpty()) {
            return null;
        }
        return lr.get();
    }

    @PostMapping("/roles")
    public int addRol(@RequestBody Rol entity) {
        Rol rol = this.r.saveAndFlush(entity);
        return rol.getId();
    }

    @DeleteMapping("/roles/{id}")
    public String deleteRol(@PathVariable("id") int id) {
        this.r.deleteById(id);
        return "Rol eliminado";
    }

    @PutMapping("/roles/{id}")
    public String putRol(@PathVariable int id, @RequestBody Rol entity) {
        Rol rolTemp = this.oneById(id);
        if (rolTemp == null) {
            return "No encontrado";
        }
        rolTemp.setName(entity.getName());
        this.r.save(entity);
        return "Rol actualizado";
    }

}
