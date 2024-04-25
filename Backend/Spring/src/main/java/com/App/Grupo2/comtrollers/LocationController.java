package com.App.Grupo2.comtrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.App.Grupo2.models.Location;
import com.App.Grupo2.repositories.LocationRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*")
@RestController
public class LocationController {
    LocationRepository lr;

    LocationController(LocationRepository lr) {
        this.lr = lr;
    }

    @GetMapping("/locations")
    public List<Location> getAll() {
        return this.lr.findAll();
    }

    @GetMapping("/locations/id/{id}")
    public Location oneById(@PathVariable("id") int id) {
        Optional<Location> loc = this.lr.findById(id);
        if (loc.isEmpty()) {
            return null;
        }
        return loc.get();
    }

    @PostMapping("/locations")
    public int addLocation(@RequestBody Location location) {
        Location loc = this.lr.saveAndFlush(location);
        return loc.getId();
    }

    @DeleteMapping("/location/{id}")
    public String deleteLocation(@PathVariable("id") int id) {
        this.lr.deleteById(id);
        return "Localizacion eliminada";
    }

    @PutMapping("/locations/{id}")
    public String putLocation(@PathVariable int id, @RequestBody Location location) {
        Location locTemp = this.oneById(id);
        if (locTemp == null) {
            return "No encontrado";
        }
        locTemp.setLocation(location.getLocation());
        this.lr.save(location);
        return "Localizacion eliminada";
    }

}
