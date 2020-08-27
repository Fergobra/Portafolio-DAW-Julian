 var recomendadas = document.getElementById('reco');
fetch('https://lalocaracheo.ml/json/data.json')
.then(function(response) {
    return response.json();
})
.then(function(myJson){
     console.log(Object.values(myJson.recomendadas));
    myJson.recomendadas = Object.values(myJson.recomendadas);
    myJson.recomendadas.map(recomendada => {
        var img = document.createElement('img');
        img.src = recomendada.imagen;

        recomendadas.appendChild(img);
    });
});

var nuevas=document.getElementById('est');
fetch('https://lalocaracheo.ml/json/data.json')
.then(function(response) {
    return response.json();
})
.then(function(myJson){
    console.log = Object.values(myJson.nuevas);
    myJson.nuevas = Object.values(myJson.nuevas);
    myJson.nuevas.map(nueva => {
        var img=document.createElement('img');
        img.src=nueva.imagen;

        nuevas.appendChild(img);
    });
});