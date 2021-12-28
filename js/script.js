// validate email
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');

    if (validateEmail(email)) {
        $result.text('Email is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text('Email is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

$('#email').on('input', validate);

//***************************************//

// countdown

function CountDownTimer(dt, id) {
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'Dovolena!!!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = 'Dovolena je za... <br/> <br/>';
        document.getElementById(id).innerHTML += days + ' dní <br/>';
        document.getElementById(id).innerHTML += hours + ' hodin <br/>';
        document.getElementById(id).innerHTML += minutes + ' minut <br/>';
        document.getElementById(id).innerHTML += seconds + ' sekund';
    }

    timer = setInterval(showRemaining, 1000);
}

//**********************************************//

// weather 

const input = document.querySelector("#weather-input");
const city = document.querySelector("#weather-city");

const cityName = document.querySelector("#weather-city-name");
const Temp = document.querySelector("#weather-temp");
const main = document.querySelector("#weather-main");
const discription = document.querySelector("#weather-description");
const image = document.querySelector("#weather-image");

const getWeather = () => {
    const xhr = new XMLHttpRequest();
    const city = 'Opava';
    xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);

    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 404) {
            alert("Place not found");
        } else {
            var data = JSON.parse(xhr.response);
            cityName.innerHTML = data.name;
            Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
            discription.innerHTML = data.weather[0].description;
            image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
    };
}

//**********************************************//

// articles

const articles = [{
        id: 'gb2008',
        name: 'Londýn',
        images: ['gb2008', 'DSC01580', 'DSC01677', 'DSC01694', 'PC060208', 'PC130232'],
        text: '<p>Londýn jsem navštívil poprvé v životě a hned jsem si toto město zamiloval. Přijel jsem do Londýna v září 2008 do typicky deštivého anglického počasí. Připravoval jsem se na důkladně naplánovaný rok v Londýně a značil si místa, která bych rád navštívil. Jelikož jsem velký fanoušek fotbalu, tak jsem musel vidět všechny fotbalové stadiony klubů, které hrají Premiere League v Londýně. Toto jsem byl schopen splnit a mám hezké fotky a vzpomínky.</p><p> Věci, které na Londýně obdivuji jsou: jeho metropolitní nádech, Londýn je obrovské město, kde se mísí různé kultury z celého světa, a každý si může vybrat co ho konkrétně zajímá. Je zde na každém kroku vidět obrovská historie z různých etap vývoje britského impéria. Člověk, který se zajímá o historii zde musí být jako „ryba ve vodě.“ Je těžké vybrat jen jedno muzeum nebo atrakci, ale co se týče mě, velmi mě oslovilo „Imperial War Museum“, jehož expozice jsou věnovány všem válečným konfliktům, které se za poslední století odehrály na území Evropy. Každému, kdo se zajímá o období II. světové války, bych toto muzeum doporučil.</p><p> Pokud bych měl i nějak zhodnotit negativní stránky Londýna, tak bych asi musel zmínit jeho kriminalitu, která samozřejmě plyne z faktu, že se jedná o obrovské město s velkým množstvím různých národností a kriminálních živlů. Sám jsem měl svou osobní zkušenost, že jsem byl během jednoho roku dvakrát okraden. Dále by se dálo zmínit, že Londýn není zrovna levné místo, jak pro turisty tak pro běžný život. Ale i přes všechny tyto negativní stránky bych Vám vřele doporučil návštěvu tohoto místa.</p> '
    },
    {
        id: 'australie2011',
        name: 'Austrálie',
        images: ['australie2011', 'Klokan', 'PA170490', 'PA230769', 'PA230792'],
        text: '<p>Do Austrálie jsem se dostal během své služební cesty, když jsem pracoval pro jednu Skotskou společnost v roce 2011. Austrálie vždy byla země, do které jsem se chtěl podívat, ať již kvůli nádherné přírodě, kterou Austrálie oplývá, kvůli teplému počasí, které je naprosto otočené vůči České republice. Byl to opravdu nezapomenutelný zážitek a každému ho doporučuji. Každý, kdo by chtěl vidět naživo skákající klokany nebo koaly případně psa dinga, nebo tázmánského čerta by měl Austrálii navštívit.</p><p> Sydney je nádherné město u oceánu,  které oplývá jižanským klidem a má metropolitní nádech. Člověk může vidět všechny ty zaoceánské lodě, může se projíždět loďkou v přístavu, a nemůže vynechat návštěvu největší památky Harbour Bridge, a známe budovy opery v Sydney. Musím říci, že mě osobně budova opery zklamala. Rovněž je zajímavé navštívit muzeum mořských tvorů, které nachází v oblasti Darling Harbour. Taky doporučuji navštívit národní park Blue Mountains.</p><p> Kdybych měl zmínit nějaké negativní věci o Austrálii, těžko bych je hledal. Austrálie je země, která není úplně levná a ať již pro návštěvníky nebo pro běžné obyvatele je tam celkem draho. Možná bych zmínil bezpečnost ve smyslu, že v Austrálií je velmi divoká příroda, a z toho vyplývají určitá rizika, na které si musí dát člověk pozor. Není nic neobvyklého být napaden žralokem, kousnutý jedovaným pavoukem nebo hadem. Tyto věci člověk žijící v podmínkách České republiky nezná.</p>'
    },
    {
        id: 'usa2012',
        name: 'USA 2012',
        images: ['usa2012', 'P4191163', 'P4191165', 'P4191190', 'P4191214'],
        text: '<p>Do USA jsem se poprvé dostal během služební cesty. Tato země na mě udělala velký dojem, protože se jedná o velmi rozdílnou kulturu oproti evropskému způsobu života a je zajímavé ji poznat a nasát. V rámci této služební cesty jsem navštívil státy Rhode Island a Massachusetts, města Providence a Boston. S ohledem na to, že jsem na této služební cestě strávil jen 3 dny, tak jsem měl možnost poohlédnout se okolo. Z pohledu historického je tato oblast zajímavá a známa jako Nová Anglie, kde se často konaly čarodějnické procesy. Docházelo, tady taky k významným bitvám v rámci občanské války.</p><p>Během služební cesty, jsem navštívil společnost FM Global, která se specializuje na hodnocení rizik v průmyslu a pojišťování průmyslových podniků. Byli jsme v jejich výzkumném centru, kde byly předváděny pokusy s experimentálními požáry, zemětřesením, výbuchem apod. V Bostonu jsme absolvovali turistickou vyhlídku kolem historického centra města, kolem hokejového stadionu a dalších zajímavých míst ve městě.</p><p>Kdybych se měl podívat na negativní stránky ať již tohoto zájezdu/služební cesty anebo USA, Bostonu, Providence obecně. Z mého pohledu byla tato služební cesta velmi krátká, ale v budoucnu jsem se ještě do USA dvakrát vrátil. Všude, kde se člověk hne stojí vyzbrojení příslušníci místní policie a to navozuje stísněný pocit u turistů, kteří na to nejsou úplně zvyklí. Samozřejmě na základě historických událostí se tyto záležitosti dají pochopit. Suma sumáru, určitě doporučuji toto město a místa navštívit.</p>'
    },
    {
        id: 'usa2018',
        name: 'USA 2018',
        images: ['usa2018', 'DSC00459', 'DSC00681', 'DSC00991', 'DSC01460', 'DSC02407'],
        text: '<p>V roce 2018 jsem se do USA Spojených států amerických vydal již potřetí.  Měl jsem chvíli času, tak jsem se rozhodl, že bych někde vycestoval, a rozhodl jsem se podívat do USA po dobu zhruba 14 dnů na západní pobřeží, kde jsem ještě nikdy předtím nebyl. Cílem cesty bylo navštívit místní národní parky a města jako Los Angeles, Las Vegas, San Francisco. Musím říci, že tato cesta mě nadchnula a věřím, že nebyla moje poslední.</p><p>Začátek cesty začal ve městě Los Angeles, kde jsme se byli podívat na Hollywood Boulvard, se stopami všech světoznámých filmových hvězd. Další den jsme navštívili Hollywood Studios, jedná se o zábavní park, který má spoustu atrakcí postavených na známých filmových hitech. Tato atrakce byla opravdu zábava a vřele bych ji všem návštěvníkům Los Angeles doporučil. Dále naše cesta následovala do města Las Vegas, které je známé svou nikdy nekončící zábavou. V Las Vegas mě nejvíce zaujaly horské dráhy na střeše mrakodrapů, kde při pohledu na tento typ atrakcí se mi fakt dělalo špatně. V tomto bloku jistě nesmím vynechat město San Francisko, které je opravdu hezké a rád bych se tam někdy ještě vrátil.</p><p>Kdybych měl zmínit nějaké negativní stránky tohoto zájezdu, západního pobřeží, těžko bych je hledal. Jen mě utkvěla vzpomínka na pláž ve Venice, kde je oceán takový špinavý a zapáchající a pro občany České republiky, kteří jsou zvyklí na koupání v jaderském moři to může být celkem šok. Snad jen, že toho času mohlo být více.</p>'
    }
];


function change_page(address) {
    window.location.href = address;
}

const addPhotoToGalery = (src, name) => {
    $("#lightSlider").append(`<li>
                                  <img src="${src}" alt="${name}" data-bs-toggle="modal" data-bs-target="#${name}Photo"/>
                               </li>`);
    $("#photos").append(`
        <div class="modal fade" id="${name}Photo" tabindex="-1" aria-labelledby="${name}PhotoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
           <img src="${src}" alt="${name}" data-bs-toggle="modal" data-bs-target="#${name}Photo"/>
        </div>
     </div>`)
}

$(window).load(function() {

    var queryDict = {};
    location.search.substr(1).split("&").forEach(function(item) {
        queryDict[item.split("=")[0]] = item.split("=")[1]
    })

    if (queryDict.page == 'article') {
        const article = articles.find(article => article.id == queryDict.id);
        $("#banner").css("background", `url(../images/photos/${queryDict.id}/${article.id}.JPG) no-repeat bottom center`);
        $("#name").append(article.name);
        $("#text").append(article.text);

        for (const image of article.images) {
            const src = `../images/photos/${article.id}/${image}.JPG`;
            addPhotoToGalery(src, image);
        }
        CountDownTimer('07/05/2022 10:1 AM', 'countdown');

        $("#lightSlider").lightSlider({
            prevHtml: '<i class="fa fa-chevron-circle-left fa-2x"></i>',
            nextHtml: '<i class="fa fa-chevron-circle-right fa-2x"></i>',
        });
        getWeather();

    } else if (queryDict.page == 'photogalery') {

        for (const article of articles) {
            $("#galery").append(`<div id="${article.id}" class="gallery__column"></div>`);
            for (const image of article.images) {
                $(`#${article.id}`).append(
                `<a onclick="change_page('article.html?page=article&id=${article.id}')" href="#" target="_blank" class="gallery__link">
                  <figure class="gallery__thumb">
                    <img src="../images/photos/${article.id}/${image}.JPG" alt="${image}" class="gallery__image">
                    <figcaption class="gallery__caption">${image}</figcaption>
                  </figure>
                </a>`);
            }
        }
    } else if (!queryDict.page) {
        for (const article of articles) {
            $("#articlesContainer").append(`<div class="col-lg-4 col-sm-4 col-md-4">
                <div class="ratio ratio-16x9">
                <a onclick="change_page('pages/article.html?page=article&id=${article.id}')" href="#"><img src="images/photos/${article.id}/${article.id}.JPG" alt="${article.name}"/></a></div></div>`)
            for (const image of article.images) {
                const src = `images/photos/${article.id}/${image}.JPG`;
                addPhotoToGalery(src, image);
            }
        }
        CountDownTimer('07/05/2022 10:1 AM', 'countdown');

        $("#lightSlider").lightSlider({
            prevHtml: '<i class="fa fa-chevron-circle-left fa-2x"></i>',
            nextHtml: '<i class="fa fa-chevron-circle-right fa-2x"></i>',
        });
        getWeather();
    }
});