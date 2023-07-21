import { getMoods } from "./database.js";

export const compileMoods = () => {
  const moods = getMoods();
  let htmlString = "";
  for (const mood of moods) {
    htmlString += `
        <h2 class="mood-name"> ${mood.name} </h2>
        <img src="${mood.imageUrl}" alt="${mood.text}">
        <div class="macho-advice">
            <h3>Macho Advice:</h3>`;
    for (const quote of mood.quotes) {
      htmlString += `<div class="macho-quote">${quote}</div>`;
    }
    htmlString += `</div>`;
    //make sure to come back and fill out html string to add the rest of the mood information
  }
  return htmlString;
};
