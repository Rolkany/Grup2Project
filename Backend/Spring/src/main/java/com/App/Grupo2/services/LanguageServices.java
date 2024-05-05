/* ---------- Package containing repository classes ---------- */
package com.App.Grupo2.services;

/* ---------- Imports ---------- */
import java.util.List;
import java.util.Optional;
import com.App.Grupo2.models.Language;
import org.springframework.stereotype.Service;
import com.App.Grupo2.repositories.LanguageRepository;

/* ----- Spring annotations ----- */
@Service
public class LanguageServices {

    // Repository for managing Language data
    private final LanguageRepository languageRepository;

    // Constructor for LanguageServices
    LanguageServices(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    // Get all language
    public List<Language> getAll() {
        return languageRepository.findAll();
    }

    // Get language by ID
    public Optional<Language> oneById(int id) {
        return languageRepository.findById(id);
    }

    // Add a new language
    public Language addLanguage(Language newLanguage) {
        return languageRepository.saveAndFlush(newLanguage);
    }

    // Delete language by ID
    public String deleteLanguage(int id) {
        if (languageRepository.existsById(id)) {
            languageRepository.deleteById(id);
            return "Language deleted";
        }
        return "Language not found";
    }

    // Update language
    public Language putLanguage(int id, Language languageToUpdate) {
        return languageRepository.findById(id)
                .map(language -> {
                    language.setLanguage(languageToUpdate.getLanguage());
                    return languageRepository.save(language);
                })
                .orElse(null);
    }
}
