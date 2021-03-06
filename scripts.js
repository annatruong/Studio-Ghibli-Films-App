const app = document.getElementById('main');

const logo = document.createElement('img');
logo.src = 'img/logo.png';

const container = document.createElement('div');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const film = data[Math.floor(Math.random()*data.length)];

    const h1 = document.createElement('h1');
    h1.textContent = 'Which Studio Ghibli movie should I watch tonight?';

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h2 = document.createElement('h2');
    h2.textContent = `${film.title} ${film.original_title}`;

    const descp = document.createElement('p');
    descp.textContent = film.description;

    container.append(h1);
    container.append(card);
    card.append(h2);
    card.append(descp);
  })
  .catch((err) => {
    console.log(err);
  });