package com.App.Grupo2.comtrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.App.Grupo2.models.Language;
import com.App.Grupo2.repositories.LanguageRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*")
@RestController
public class LanguageController {

    LanguageRepository lr;

    LanguageController(LanguageRepository lr) {
        this.lr = lr;
    }

    @GetMapping("/languages")
    public List<Language> getAll() {
        return this.lr.findAll();
    }

    @GetMapping("/languages/id/{id}")
    public Language oneById(@PathVariable("id") int id) {
        Optional<Language> lp = this.lr.findById(id);
        if (lp.isEmpty()) {
            return null;
        }
        return lp.get();
    }

    @PostMapping("/languages")
    public int addLanguage(@RequestBody Language entity) {
        Language language = this.lr.saveAndFlush(entity);
        return language.getId();
    }

    @DeleteMapping("/languages/{id}")
    public String deleteLanguage(@PathVariable("id") int id) {
        this.lr.deleteById(id);
        return "Idioma eliminado";
    }

    @PutMapping("/languages/{id}")
    public String putLanguage(@PathVariable int id, @RequestBody Language entity) {
        Language langTemp = this.oneById(id);
        if (langTemp == null) {
            return "No encontrado";
        }
        langTemp.setLanguage(entity.getLanguage());
        this.lr.save(entity);
        return "Idioma actualizado";
    }

}
