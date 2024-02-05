const movies = [{
_id: '1',
title: 'Jungle Cruise',
genre: 'Adventure',
director: 'Pesho',
date: '1994',
imageURL: '',
rating: '10',
description: 'Description'}];


exports.getAll = () => {
    return movies.slice();
}
exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};

exports.getOne = (movieId) => {
    const movie =  movies.find(movie => movie._id == movieId);
    return movie;
}