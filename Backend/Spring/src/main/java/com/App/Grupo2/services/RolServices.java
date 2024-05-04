package com.App.Grupo2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.App.Grupo2.models.Rol;
import com.App.Grupo2.repositories.RolRepository;

@Service
public class RolServices {

    private RolRepository rolRepository;

    RolServices(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }

    public List<Rol> getAll() {
        return rolRepository.findAll();
    }

    public Optional<Rol> oneById(int id) {
        return rolRepository.findById(id);
    }

    public Rol addRol(Rol newRol) {
        return rolRepository.saveAndFlush(newRol);
    }

    public String deleteRol(int id) {
        if (rolRepository.existsById(id)) {
            rolRepository.deleteById(id);
            return "Rol eliminado";
        }
        return "Rol no encontrado";
    }

    public Rol putRol(int id, Rol rolToUpdate) {
        Optional<Rol> rolTemp = this.oneById(id);
        if (rolTemp.isPresent()) {
            Rol rol = rolTemp.get();
            rol.setName(rolToUpdate.getName());
            return rolRepository.save(rol);
        }
        return null;
    }

}
