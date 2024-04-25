package com.App.Grupo2.comtrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.App.Grupo2.models.Review;
import com.App.Grupo2.repositories.ReviewRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*")
@RestController
public class ReviewController {
    ReviewRepository rr;

    ReviewController(ReviewRepository rr) {
        this.rr = rr;
    }

    @GetMapping("/reviews")
    public List<Review> getAll() {
        return this.rr.findAll();
    }

    @GetMapping("/reviews/id/{id}")
    public Review oneById(@PathVariable("id") int id) {
        Optional<Review> r = this.rr.findById(id);
        if (r.isEmpty()) {
            return null;
        }
        return r.get();
    }

    @PostMapping("/reviews")
    public int addReviews(@RequestBody Review entity) {
        Review review = this.rr.saveAndFlush(entity);
        return review.getId();
    }

    @DeleteMapping("/reviews/{id}")
    public String deleteReview(@PathVariable("id") int id) {
        this.rr.deleteById(id);
        return "Review eliminada";
    }

    @PutMapping("/reviews/{id}")
    public String putReview(@PathVariable int id, @RequestBody Review entity) {
        Review revTemp = this.oneById(id);
        if (revTemp == null) {
            return "No encontrado";
        }
        revTemp.setDesc(entity.getDesc());
        revTemp.setRatingReview(entity.getRatingReview());
        this.rr.save(entity);
        return "Review actualizada";
    }

}
