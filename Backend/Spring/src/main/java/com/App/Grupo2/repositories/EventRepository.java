/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.repositories;

/* ---------- Importaciones ---------- */
import com.App.Grupo2.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
