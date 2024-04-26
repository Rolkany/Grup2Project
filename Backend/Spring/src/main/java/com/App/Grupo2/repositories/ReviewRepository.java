package com.App.Grupo2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.App.Grupo2.models.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
