const app = document.getElementById('main');

const logo = document.createElement('img');
logo.src = 'img/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const randomFilm = data[Math.floor(Math.random()*data.length)];
    //console.log(randomFilm.title);
    const h1 = document.createElement('h1');
    h1.textContent = 'Which Studio Ghibli movie should I watch tonight?';
    container.append(h1);
  })
  .catch((err) => {
    console.log(err);
  });