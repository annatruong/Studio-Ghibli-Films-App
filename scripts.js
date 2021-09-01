fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const randomFilm = data[Math.floor(Math.random()*data.length)];
    console.log(randomFilm.title);
  })
  .catch((err) => {
    console.log(err);
  });