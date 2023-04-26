let data = [
    {
        name: "Pacman",
        desc: " Аркадная видеоигра, разработанная японской компанией Namco и вышедшая в 1980 году. Задача игрока — управляя Пакманом, съесть все точки в лабиринте, избегая встречи с привидениями, которые гоняются за героем. С повышением уровня игры изменяется только её сложность, архитектура лабиринта остаётся идентичной. Всего в игре 256 уровней, последний из которых невозможно завершить из-за ошибки переполнения"
    },
    {
        name: "Gwent",
        desc: "Бесплатная коллекционная карточная игра для Microsoft Windows, iOS и Android, разработанная и изданная компанией CD Projekt RED и выпущенная в 2018 году. «Гвинт» является развитием мини-игры из ролевой компьютерной игры «Ведьмак 3: Дикая Охота»"
    },
    {
        name: "Assassin`s Creed",
        desc: "Медиафраншиза компании Ubisoft, основанная на серии компьютерных игр. Первая игра вышла в 2007 году, последняя - Assassin’s Creed Valhalla - в 2020 году. Большинство частей франшизы являются играми в жанре приключенческого боевика с открытым миром, где особое внимание уделяется скрытому перемещению и паркуру. "
    },
    {
        name: "Red Dead Redemption 2",
        desc: "Действие Red Dead Redemption 2, оформленной в духе вестерна, происходит на территории нескольких вымышленных штатов США на рубеже XIX—XX веков. Сюжет игры построен вокруг приключений банды Датча Ван дер Линде; под управлением игрока находится один из членов банды — Артур Морган, а после прохождения сюжетной линии до эпилога — другой член банды, Джон Марстон. После неудачного ограбления парома бандиты вынуждены скрываться в глуши от федеральных агентов и охотников за головами."
    }
];

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});




// Создание слайдера
function createSlider(data) {
let swiper_wrapper_id = document.getElementById("swiper_wrapper_id");
for (let i = 0; i < data.length; i++) {
let div = document.createElement("div");
div.setAttribute("class", "swiper-slide");
let img = document.createElement("img");
img.setAttribute("class", "swiper-slide")
img.setAttribute("src", `picture/pic${i}.jpg`);
div.appendChild(img);
swiper_wrapper_id.appendChild(div);
}
}

// Обработчик клика на изображение
function handleImageClick(i, data) {
let modal = document.getElementById("modal");
modal.style.opacity = 1;
modal.style.visibility = "visible";
modal.style.transform = "scale(1)";

let img = document.getElementById("pic");
let head = document.getElementById("head");
let desc = document.getElementById("desc");
pic.setAttribute("src", `picture/pic${i}.jpg`)

head.innerHTML = data[i].name;
desc.innerHTML = data[i].desc;
}

// Вызов функций
createSlider(data);
let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
images[i].onclick = function() { handleImageClick(i, data); };
}

let close = document.getElementById("close");

close.onclick = function(){
    let modal = document.getElementById("modal");
    modal.style.opacity = 0;
    modal.style.visibility = "hiden";
    modal.style.transform = "scale(0)";
}