const movies = [{
title: 'Jungle Cruise',
genre: 'Adventure',
director: 'Pesho',
date: '1994',
imageURL: '',
rating: '10',
description: 'Description'}]

exports.create = (movieData) => {
    console.log(movieData)
    movies.push(movieData);
};