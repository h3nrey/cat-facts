var fatos;
const contentDiv = document.querySelector(".content");
factText = document.querySelector('#fact');
const randomButtons = document.querySelector("#random-fact-button");
randomButtons.addEventListener('click', () => {
    
    getContent();
})

async function getContent() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        showFact(data.fact)
        getTranslationApi(data.fact)
    } catch(error) {
        console.error(error);
    }
}
    
    getContent();
    function showFact(fact) {
        factText.innerHTML = fact;      
    }
    
    //translation stuff
    
    const Translatorbtn = document.querySelector("#translatorButton");
    Translatorbtn.addEventListener("click", () => {
        contentDiv.classList.toggle("translated");
        const spans = document.querySelectorAll("#translatorButton span");
        for (const span of spans) {
            span.classList.toggle("selected");
        }
    })

async function getTranslationApi(textToTranslate) {
        try {
            alert(textToTranslate);
            const response = await fetch(`https://api.mymemory.translated.net/get?q= ${textToTranslate.textContent}&langpair=en|pt`);
            const  data  = await response.json();
            const text = data.responseData.translatedText;
            alert(data.responseData.translatedText);
            if(contentDiv.classList.contains("translated")) {
                factText.innerHTML = text;
            }
          } catch(error) {
            console.error(error);
        } 
  
}