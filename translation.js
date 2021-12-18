const btn = document.querySelector("#translatorButton");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  content.classList.toggle("translated");
  const text = document.querySelector('#fact');
  
  const translatedText = getTheApi(text);
  if(!content.classList.contains("translated")) {
      alert(translatedText);
      text.innerHTML = translatedText;
  }
})

async function getTheApi(textToTranslate) {
  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q= ${textToTranslate.textContent}&langpair=en|pt`);
    const  data  = await response.json();
    const translatedText = data.responseData.translatedText;
    alert(data.responseData.translatedText);
    return translatedText;
    // textToTranslate.innerHTML = data.responseData.translatedText;
  } catch(error) {
    console.error(error);
  }
}