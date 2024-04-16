/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.repositories;

/* ---------- Importaciones ---------- */
import com.App.Grupo2.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<Users, Integer> {

}
