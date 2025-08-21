package com.example.movieapi.controller;

import com.example.movieapi.model.Movie;
import com.example.movieapi.model.MovieSummary;
import com.example.movieapi.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//URLs, how my API will work (requests -> response)
@RestController
//Mapping is the URL
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    //Next create the first method -> the repository has the find all method that gets all the movies
    //*******THIS ONE IS MAPPING FOR "/api/movies")
    @GetMapping
    //What do you think getmapping means? -> ythis function will repsond to get requests, before every methodf we need to decide which http verb this mehtod will respond to
    //Means if someone sends a get request to api/movies, it is going to run this function
    //name the method whatever you want
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieRepository.findAll();
        return ResponseEntity.ok(movies);
    }

    // /api/products/{vategoryId}/{subcategoryId}/{productId}
    // @PathVariable Integer categoryID
    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Integer id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movie.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }

    @GetMapping("/summaries")
    public ResponseEntity<List<MovieSummary>> getAllMovieSummaries() {
        List<MovieSummary> summaries = movieRepository.findAllMovieSummaries();
        return ResponseEntity.ok(summaries);
    }

    //how to get movie summary by id??
    @GetMapping("/{id}/summary")
    public ResponseEntity<MovieSummary> getMovieSummaryById(@PathVariable Integer id) {
        Optional<MovieSummary> summary = movieRepository.findMovieSummaryById(id);
        return summary.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        Movie created = movieRepository.save(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    //look at the request body for the movie -> bc the html react app does not know what a java object is, this

    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Integer id, @RequestBody Movie movie) {
        Optional<Movie> existingMovie = movieRepository.findById(id);

        if (existingMovie.isPresent()) {
            movie.setMovieId(id);
            Movie updatedMovie = movieRepository.update(movie);
            return ResponseEntity.ok(updatedMovie);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable Integer id) {
        boolean deleted = movieRepository.deleteById(id);
        return deleted ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

}
