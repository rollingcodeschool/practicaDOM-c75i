const cambiarTitulo = () => {
  const titulo = document.querySelector("h1");
  // const titulo = document.querySelector('#algunID');
  // const titulo = document.querySelector('.nuevoTitulo');
//   const muchosParrafos = document.querySelectorAll('p');
  // const muchosParrafos = document.getElementById('nuevoTitulo');
  // const muchosParrafos = document.getElementsByClassName('nuevoTitulo');
  // const muchosParrafos = document.getElementsByTagName('p');
  console.log(titulo);
//   titulo.innerText = 'Nuevo titulo desde JS';
  titulo.innerHTML = 'Nuevo titulo desde <b>JS</b>';
  titulo.className = 'display-3 text-primary';
};
