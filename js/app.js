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

const verMas = ()=>{
  //traigo mi elemento padre
  const seccion = document.querySelector('#contenedorPadre');
  if(btnVerMas[3].innerHTML === 'Ver mas'){
    console.log('Desde la funcion verMas');
    //crear un parrafo nuevo
    const parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores dolor perferendis voluptate cumque. Et omnis cumque reprehenderit expedita neque quaerat officiis debitis voluptatibus explicabo modi harum laboriosam fugit repellendus quam minima iste, provident quo cupiditate? Consequuntur provident nisi repudiandae iure. Deserunt, ex? Totam quibusdam itaque aspernatur perspiciatis unde ut eius fugiat excepturi voluptatum obcaecati laboriosam modi consequatur consequuntur ad assumenda quos ipsa dicta, praesentium tenetur sequi aut deserunt architecto voluptate? Eos porro veniam culpa alias quibusdam non fugit voluptates, laudantium deserunt, vero dolor blanditiis beatae nulla! Suscipit neque quisquam maxime nesciunt mollitia quis fugiat nulla quo, eveniet facilis quod harum ipsa, dolorum laboriosam perspiciatis, impedit exercitationem repellat voluptates eaque molestias commodi architecto molestiae ut at. Rerum saepe alias cumque aliquam maxime cupiditate, necessitatibus voluptates, soluta pariatur quod at aliquid sequi ipsa. Asperiores quo qui laboriosam saepe quisquam debitis recusandae doloremque? Totam sapiente tenetur delectus fugiat amet ea ipsum repudiandae dolores id ex eaque libero porro laudantium dignissimos accusamus, consequatur dolorum dolore temporibus ad eos? Deleniti ut sint accusantium. Numquam nostrum quam doloribus autem! Labore temporibus officia perferendis. Adipisci provident ipsum magnam explicabo quod quos rem vero tempora sapiente illo molestias, incidunt harum, cumque cum doloremque libero natus odit. Dolore dignissimos, rerum amet ea debitis voluptatem animi veritatis aperiam quam suscipit doloribus facilis sapiente, placeat culpa sed nihil eius iusto! Saepe deserunt veniam deleniti velit commodi, itaque obcaecati iure aut cupiditate laborum blanditiis atque placeat, optio, eaque officiis aliquam dicta odio sequi voluptatem? Architecto, reiciendis possimus? Dignissimos quae totam cumque?`;
    parrafoNuevo.className = 'lead';

    //agregar un nodo hijo
    // seccion.appendChild(parrafoNuevo); //agrega nodos hijos al final
    // seccion.prepend(parrafoNuevo); //agrega nodos hijos al principio
    // seccion.prepend(parrafoNuevo); //agrega nodos hijos al principio
    seccion.insertBefore(parrafoNuevo, btnVerMas[3]);

    btnVerMas[3].innerHTML = 'Ocultar';
    btnVerMas[3].className = 'btn btn-danger';
  }else{
    console.log(seccion.children[3]);
    seccion.removeChild(seccion.children[3]);
    btnVerMas[3].innerHTML = 'Ver mas';
    btnVerMas[3].className = 'btn btn-primary';
  }  
}

const btnVerMas = document.getElementsByTagName('button');
console.log(btnVerMas[3]);

//si la funcion lleva parametros tengo que guardarla dentro de una funcion anonima
// btnVerMas[3].addEventListener('click', ()=>{ verMas('das','asd',23)});

btnVerMas[3].addEventListener('click', verMas);