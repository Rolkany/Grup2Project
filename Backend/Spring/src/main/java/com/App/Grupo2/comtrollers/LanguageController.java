/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.comtrollers;

/* ---------- Imports ---------- */
import java.util.List;
import com.App.Grupo2.models.Language;
import com.App.Grupo2.services.LanguageServices;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

/* ----- Spring annotations ----- */
@RestController
@CrossOrigin(origins = "*")

public class LanguageController {

    private final LanguageServices languageServices;

    // ----- Constructor to initialize LanguageServices -----
    public LanguageController(LanguageServices languageServices) {
        this.languageServices = languageServices;
    }

    // ----- Endpoint to get all locations -----
    @GetMapping("/languages")
    public List<Language> getAlle() {
        return this.languageServices.getAll();
    }

    // ----- Endpoint to get a language by its ID -----
    @GetMapping("/languages/id/{id}")
    public Language oneById(@PathVariable("id") int id) {
        return languageServices.oneById(id).orElse(null);
    }

    // ----- Endpoint to add a new language -----
    @PostMapping("/languages")
    public int addLanguage(@RequestBody Language language) {
        Language savedLanguage = languageServices.addLanguage(language);
        return savedLanguage.getId();
    }

    // ----- Endpoint to delete a language by its ID -----
    @DeleteMapping("/languages/{id}")
    public String deleteLanguageById(@PathVariable("id") int id) {
        languageServices.deleteLanguage(id);
        return "Language deleted";
    }

    // ----- Endpoint to update an existing language -----
    @PutMapping("/languages/{id}")
    public String putLanguage(@PathVariable int id, @RequestBody Language languageToUpdate) {
        Language language = languageServices.putLanguage(id, languageToUpdate);
        if (language != null) {
            return "Language updated";
        }
        return "Language not found";
    }
}