
const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null  = document.querySelector('#input-localizacao');

//-----------------dados para colocar no html

const sectionTempoInfo =  document.querySelector('#tempo-info');


//----para pegar os dados e requisição
form?.addEventListener("submit", async (event)=>{
    event.preventDefault();// console.log('submeteu');

if (!input || !sectionTempoInfo)return

const localizacao = input.value;

if(localizacao.length < 3 ){
    alert ('o local precisa ter mais que  03 letras');
    return;
} 
const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=64ab62870295924816d11c27160ab99b&lang=pt_br&units=metric`);
const dados = await resposta.json();//console.log(dados);

const info ={
    temperatura:Math.round(dados.main.temp),
    local: dados.name,
    icone:`https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
};

sectionTempoInfo.innerHTML=   

`<div class="tempo-dados">
<h2>${info.local}</h2>
<span>${info.temperatura}°C</span>
</div>
<img src="${info.icone}"/>
`;

}); 

