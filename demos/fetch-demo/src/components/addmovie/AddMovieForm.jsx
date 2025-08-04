import { useState } from 'react';
import { createMovie } from '../../scripts/apicalls.js'

const AddMovieForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const movieData = {
            title: formData.get('title'),
            releaseDate: formData.get('releaseDate'),
            genreId: formData.get('genreId'),
            ratingId: formData.get('ratingId')
        };

        try {
            setLoading(true);
            setError(null);
            
            // Call our POST service function
            const newMovie = await createMovie(movieData);
            
            setSuccess(true);
            console.log('Movie created:', newMovie);
            
            // Reset form
            e.target.reset();
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Add New Movie</h2>
            
            {success && (
                <div className="alert alert-success">
                    Movie created successfully!
                </div>
            )}
            
            {error && (
                <div className="alert alert-danger">
                    Error: {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Release Date</label>
                    <input 
                        type="date" 
                        name="releaseDate" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input 
                        type="text" 
                        name="genreId" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input 
                        type="text" 
                        name="ratingId" 
                        className="form-control" 
                        required 
                    />
                </div>                
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Movie'}
                </button>
            </form>
        </div>
    );
};

export default AddMovieForm;