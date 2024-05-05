/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.repositories;

/* ---------- Imports ---------- */
import com.App.Grupo2.models.Language;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

/* ----- Spring annotations ----- */
@Repository

public interface LanguageRepository extends JpaRepository<Language, Integer> {

}
