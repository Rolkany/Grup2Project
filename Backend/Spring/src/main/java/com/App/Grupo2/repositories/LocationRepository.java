/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.repositories;

/* ---------- Imports ---------- */
import com.App.Grupo2.models.Location;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

/* ----- Spring annotations ----- */
@Repository

public interface LocationRepository extends JpaRepository<Location, Integer> {

}