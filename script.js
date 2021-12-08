console.log('hello world!');
var start = document.querySelector('#start');
var div = document.querySelector('#container');
var img = document.querySelector('#img');
var previous = document.querySelector('#previous');
var next = document.querySelector('#next');
number = 1
start.addEventListener('click',  function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/'+ number)
    .then(response => response.json())
    .then(pokemon => {
        let poke = pokemon;
        let name = poke.name;
        let image = poke.sprites.front_default;
        let p = document.querySelector('#p');
        p.innerHTML = name;
        img.setAttribute('src', image);
        number = 1;
        start.style.visibility = "hidden"
        skip.style.visibility = "visible"
    })
})