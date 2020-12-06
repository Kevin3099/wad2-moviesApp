class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchListMovies = [];
    }

    addWatchList(movie){
        this.watchListMovies.push(movie);
    }
    add(movie) {
        this.favoriteMovies.push(movie);
    }
    getAllWatchList(){
        return this.watchListMovies;
    }
    getAll() {
        return this.favoriteMovies;
    }
}

export default new StubAPI();