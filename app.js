// counter creation and connecting the container to the variable. 

let count = 1;

function render() {
    let pkmContainer = document.getElementById('pokemon');
    
    // poke class is for styling, only present on the js file
    pkmContainer.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

// button configuration 

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function() {
    if (count > 1) {
        count = count - 1;
        render();
    }
}

next.onclick = function() {
    if (count < 650) {
        count = count + 1;
        render();
    }
}


render();