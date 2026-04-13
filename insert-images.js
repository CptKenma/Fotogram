let images = [
"./img/Imgs/pexels-a-darmel-7862505.jpg",
"./img/Imgs/pexels-asemirski-14367686.jpg",
"./img/Imgs/pexels-bert-mulder-2147508541-29662419.jpg",
"./img/Imgs/pexels-christopher-politano-978995-30105462.jpg",
"./img/Imgs/pexels-m-e-r-v-e-42708268-17541770.jpg",
"./img/Imgs/pexels-majkel-berger-1699317211-32903899.jpg",
"./img/Imgs/pexels-mateusz-dach-99805-4502978.jpg",
"./img/Imgs/pexels-michael-pointner-134459625-29592619.jpg",
"./img/Imgs/pexels-nanamusic-31566538.jpg",
"./img/Imgs/pexels-nathanjhilton-12672180.jpg",
"./img/Imgs/pexels-satoshi-11233533.jpg",
"./img/Imgs/pexels-serap-sagbas-2149016901-34577784.jpg",
"./img/Imgs/pexels-xperimental-33539411.jpg"
];

const dialog = document.getElementById('image-dialog');


function renderImages() {
    let imgContentRef = document.getElementById('img-content');
    for (let index = 0; index < images.length; index++) {
        imgContentRef.innerHTML += insertImages(index);
    }
}

function insertImages(index) {
    return `<img onclick="openDialog()" class="image-container" src="${images[index]}" alt="image" />`;
}

function openDialog() {
    dialog.showModal();
}

