const txthome = document.querySelector('#home')
const txtWhatzApp = document.querySelector('#WhatzApp')
const txtZpotify = document.querySelector('#Zpotify')

const titulo_din = document.querySelector('#titulo_din')

const cont_din = document.querySelector('#cont_din')

txthome.addEventListener('click' , cargarhome);
txtWhatzApp.addEventListener('click' , cargarWhatzApp);
txtZpotify.addEventListener('click' , cargarZpotify);
titulo_din.addEventListener('click' , cargartitulo_din);

function cargarhome(){
    cont_din.setAttribute('src' , '../home/index.html');
    titulo_din.innerHTML ='Home';
}
function cargarWhatzApp(){
    cont_din.setAttribute('src' , '../whatzapp/index.html');
    titulo_din.innerHTML ='WhatzApp';
}
function cargarZpotify(){
    cont_din.setAttribute('src' , '../zpotify/index.html');
    titulo_din.innerHTML ='Zpotify';
}
