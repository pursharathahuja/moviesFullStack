class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.reviews = [];
        this.users = [
            {id:1, username: "test1", password: "test1"},
        ]
    }

    add(movie) {
        this.favoriteMovies.push(movie);
        console.log(this.favoriteMovies)
    }

    getAll() {
        return this.favoriteMovies;
    }

    addReview(review) {
        this.reviews.push(review)
    }

    getUser(username, password) {
        return this.users.find(user => user.username === username && user.password === password);
    }

    createUser(username, password) {
        const userExits = this.getUser(username, password);
        if (userExits) return null; // User already exits!
        const lastUser = this.users[this.users.length - 1];
        const newUser = {id: lastUser.id + 1, username: username, password: password};
        this.users.push(newUser);
        return newUser;
    }
}

export default new StubAPI();