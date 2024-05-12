/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Importaciones ---------- */
import java.util.List;

import com.App.Grupo2.models.Event;

import com.App.Grupo2.services.EventServices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
 * ----- Clase EventsController que maneja las solicitudes relacionadas con los
 * eventos --
 */
public class EventController {

    EventServices eventServices;

    /* ----- Constructor que inicializa el repositorio de eventos ----- */
    EventController(EventServices eventServices) {
        this.eventServices = eventServices;
    }

    /* ----- Maneja las solicitudes GET a /events ----- */
    @GetMapping("/events")
    public List<Event> getAll() {
        return eventServices.getAll();
    }

    /* ----- Maneja las solicitudes GET a /events/id/{id} por id ----- */
    @GetMapping("/events/id/{id}")
    public Event oneById(@PathVariable("id") int id) {
        return eventServices.oneById(id).orElse(null);
    }

    /* ----- Maneja las solicitudes POST a /events ----- */
    @PostMapping("/events")
    public int addEvents(@RequestBody Event newEvent) {
        Event event = eventServices.addEvent(newEvent);
        return event.getId();
    }

    /* ----- Maneja las solicitudes DELETE a /events/{id}s ----- */
    @DeleteMapping("/events/{id}")
    public String deleteEventById(@PathVariable("id") int id) {
        eventServices.deleteEventById(id);
        return "Evento eliminado";
    }

    /* ----- Maneja las solicitudes PUT a /events/{id} ----- */
    @PutMapping("/events/{id}")
    public String putEvent(@PathVariable int id, @RequestBody Event eventToUpdate) {
        Event event = eventServices.putEvent(id, eventToUpdate);
        if (event != null) {
            return "Evento actualizado";
        }
        return "Evento no encontrado";
    }
}