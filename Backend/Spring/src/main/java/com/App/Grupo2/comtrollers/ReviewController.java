package com.App.Grupo2.comtrollers;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import com.App.Grupo2.models.Review;
import com.App.Grupo2.services.ReviewServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*")
@RestController
public class ReviewController {
    ReviewServices reviewServices;

    ReviewController(ReviewServices reviewServices) {
        this.reviewServices = reviewServices;
    }

    @GetMapping("/reviews")
    public List<Review> getAll() {
        return reviewServices.getAll();
    }

    @GetMapping("/reviews/id/{id}")
    public Review oneById(@PathVariable("id") int id) {
        return reviewServices.oneById(id).orElse(null);
    }

    @PostMapping("/reviews")
    public int addReviews(@RequestBody Review newReview) {
        Review review = reviewServices.addReview(newReview);
        return review.getId();
    }

    @DeleteMapping("/reviews/{id}")
    public String deleteReview(@PathVariable("id") int id) {
        reviewServices.deleteReview(id);
        return "Review eliminada";
    }

    @PutMapping("/reviews/{id}")
    public String putReview(@PathVariable int id, @RequestBody Review reviewToUpdate) {
        Review review = reviewServices.putReview(id, reviewToUpdate);
        if (review != null) {
            return "Review actualizada";
        }
        return "Review no encontrada";
    }

}
