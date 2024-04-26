/* ---------- Paquete que contiene las clases de repositorio ---------- */
package com.App.Grupo2.repositories;

/* ---------- Importaciones ---------- */
import com.App.Grupo2.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
