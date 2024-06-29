const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

// se declaro la funcion como asincrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data= response.json;    // de aqui no estoy segura si se debia poner data, porque no lo estoy pasando a json
  console.log(data);
  $n.textContent = `${data.name}`; //de aqui segun yo estaban mal declarados los valores 
  $b.textContent = `${data.blog}`;
  $l.textContent =  `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // no estoy segura de aqui pero creo que era $n
}

displayUser('stolinski').catch(handleError);