package com.App.Grupo2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.App.Grupo2.models.Event;

import com.App.Grupo2.repositories.EventRepository;

@Service
public class EventServices {
    private EventRepository eventRepository;

    EventServices(EventRepository eventRepository) {
        this.eventRepository = eventRepository;

    }

    public List<Event> getAll() {

        return eventRepository.findAll();

    }

    public Optional<Event> oneById(int id) {

        return eventRepository.findById(id);

    }

    public Event addEvent(Event newEvent) {

        return eventRepository.saveAndFlush(newEvent);
    }

    public String deleteEventById(int id) {

        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return "Evento eliminado";
        }

        return "Evento no encontrado";

    }

    public Event putEvent(int id, Event eventToUpdate) {
        Optional<Event> eventTemp = this.oneById(id);
        if (eventTemp.isPresent()) {
            Event event = eventTemp.get();
            event.setImgUrl(eventToUpdate.getImgUrl());
            event.setTitle(eventToUpdate.getTitle());
            event.setEventDate(eventToUpdate.getEventDate());
            event.setDes(eventToUpdate.getDes());
            event.setCreatedBy(eventToUpdate.getCreatedBy());
            return eventRepository.save(event);
        }
        return null;
    }

}
