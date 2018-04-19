import MovieRepository from '../repositories/movieRepository';


class MovieApp {

    getAll() {
        return MovieRepository.find({}).sort({ title: 1 });
    }

    getById(_id) {
        return MovieRepository.findById(_id);
    }

    create(movie) {
        console.log(movie);
        return MovieRepository.create(movie);
    }

    update(id, movie) {

        const updatedMovie = {
            title: movie.title,
            description: movie.description,
            url: movie.url,
            active: movie.active
        };

        return MovieRepository.findByIdAndUpdate(id, updatedMovie);
    }

    delete(id) {
        return MovieRepository.findByIdAndRemove(id);
    }
}

export default new MovieApp();