package com.App.Grupo2.services;

import java.util.List;
import java.util.Optional;
import com.App.Grupo2.models.Review;
import org.springframework.stereotype.Service;
import com.App.Grupo2.repositories.ReviewRepository;

@Service
public class ReviewServices {

    private ReviewRepository reviewRepository;

    // Constructor para poner una instancia de ReviewRepository
    ReviewServices(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // Método para obtener todas las revisiones
    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    // Método para obtener una revisión por su ID
    public Optional<Review> oneById(int id) {
        return reviewRepository.findById(id);
    }

    // Método para una nueva revisión
    public Review addReview(Review newReview) {
        return reviewRepository.saveAndFlush(newReview);
    }

    // Método para eliminar una revisión por su ID
    public String deleteReview(int id) {
        if (reviewRepository.existsById(id)) {
            reviewRepository.deleteById(id);
            return "Revisión eliminada";
        }
        return "Revisión no encontrada";
    }

    // Método para actualizar una revisión
    public Review putReview(int id, Review reviewToUpdate) {
        Optional<Review> reviewTemp = this.oneById(id);
        if (reviewTemp.isPresent()) {
            Review review = reviewTemp.get();
            // Actualiza la descripción de la revisión
            review.setDes(reviewToUpdate.getDes());
            // Actualiza la calificación de la revisión
            review.setRatingReview(reviewToUpdate.getRatingReview());
            return reviewRepository.save(review);
        }
        return null;
    }
}
