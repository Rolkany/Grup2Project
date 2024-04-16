/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.repositories;

/* ---------- Importaciones ---------- */
import com.App.Grupo2.models.Events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<Events, Integer> {

}
