/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.services;

/* ---------- Imports ---------- */
import java.util.List;
import java.util.Optional;
import com.App.Grupo2.models.Location;
import org.springframework.stereotype.Service;
import com.App.Grupo2.repositories.LocationRepository;

/* ----- Spring annotations ----- */
@Service

public class LocationServices {

    private final LocationRepository locationRepository;

    // Constructor for LocationServices
    LocationServices(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    // Get all location
    public List<Location> getAll() {
        return locationRepository.findAll();
    }

    // Get location by ID
    public Optional<Location> oneById(int id) {
        return locationRepository.findById(id);
    }

    // Add a new location
    public Location addLocation(Location newLocation) {
        return locationRepository.saveAndFlush(newLocation);
    }

    // Delete location by ID
    public String deleteLocation(int id) {
        if (locationRepository.existsById(id)) {
            locationRepository.deleteById(id);
            return "Location deleted";
        }
        return "Location not found";
    }

    // Update location
    public Location putLocation(int id, Location locationToUpdate) {
        return locationRepository.findById(id)
                .map(location -> {
                    location.setLocation(locationToUpdate.getLocation());
                    return locationRepository.save(location);
                })
                .orElse(null);
    }
}
