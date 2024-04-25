/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Importaciones ---------- */
import java.util.List;
import java.util.Optional;

import com.App.Grupo2.models.Event;

import com.App.Grupo2.repositories.EventRepository;
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

    EventRepository er;

    /* ----- Constructor que inicializa el repositorio de eventos ----- */
    EventController(EventRepository er) {
        this.er = er;
    }

    /* ----- Maneja las solicitudes GET a /events ----- */
    @GetMapping("/events")
    public List<Event> getAll() {
        return this.er.findAll();
    }

    /* ----- Maneja las solicitudes GET a /events/id/{id} por id ----- */
    @GetMapping("/events/id/{id}")
    public Event oneById(@PathVariable("id") int id) {
        Optional<Event> opE = this.er.findById(id);
        if (opE.isEmpty()) {
            return null;
        }
        return opE.get();
    }

    /* ----- Maneja las solicitudes POST a /events ----- */
    @PostMapping("/events")
    public int addEvents(@RequestBody Event newEvent) {
        Event event = this.er.saveAndFlush(newEvent);
        return event.getId();
    }

    /* ----- Maneja las solicitudes DELETE a /events/{id}s ----- */
    @DeleteMapping("/events/{id}")
    public String deleteEventById(@PathVariable("id") int id) {
        this.er.deleteById(id);
        return "Evento eliminado";
    }

    /* ----- Maneja las solicitudes PUT a /events/{id} ----- */
    @PutMapping("/events/{id}")
    public String putEvent(@PathVariable int id, @RequestBody Event event) {
        Event eventTemp = this.oneById(id);
        if (eventTemp == null) {
            return "No encontrado";
        }
        eventTemp.setImgUrl(event.getImgUrl());
        eventTemp.setTitle(event.getTitle());
        eventTemp.setEventDate(event.getEventDate());
        event.setDes(event.getDes());
        this.er.save(event);
        return "Evento actualizado";
    }
}