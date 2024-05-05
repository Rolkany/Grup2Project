/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Imports ---------- */
import java.util.List;
import com.App.Grupo2.models.Location;
import com.App.Grupo2.services.LocationServices;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

/* ----- Spring annotations ----- */
@RestController
@CrossOrigin(origins = "*")

public class LocationController {

    private final LocationServices locationServices;

    // ----- Constructor to initialize LocationServices -----
    LocationController(LocationServices locationServices) {
        this.locationServices = locationServices;
    }

    // ----- Endpoint to get all locations -----
    @GetMapping("/locations")
    public List<Location> getAll() {
        return locationServices.getAll();
    }

    // ----- Endpoint to get a location by its ID -----
    @GetMapping("/locations/id/{id}")
    public Location oneById(@PathVariable("id") int id) {
        return locationServices.oneById(id).orElse(null);
    }

    // ----- Endpoint to add a new location -----
    @PostMapping("/locations")
    public int addLocation(@RequestBody Location location) {
        Location savedLocation = locationServices.addLocation(location);
        return savedLocation.getId();
    }

    // ----- Endpoint to delete a location by its ID -----
    @DeleteMapping("/locations/{id}")
    public String deleteLocationById(@PathVariable("id") int id) {
        locationServices.deleteLocation(id);
        return "Location deleted";
    }

    // ----- Endpoint to update an existing location -----
    @PutMapping("/locations/{id}")
    public String putLocation(@PathVariable int id, @RequestBody Location locationToUpdate) {
        Location location = locationServices.putLocation(id, locationToUpdate);
        if (location != null) {
            return "Location updated";
        }
        return "Location not found";
    }
}