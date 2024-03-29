const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
}

Cinema.prototype.filmsByYear = function (year) {
  return this.films.some(film => film.year === year);
}

Cinema.prototype.allFilmLengthCheck = function (length) {
  return this.films.every(film => film.length > length)
}

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((a, b) => a + b.length, 0)
}

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter(film => film[property] === value)
}

module.exports = Cinema;
