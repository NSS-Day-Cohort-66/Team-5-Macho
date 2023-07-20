import { getMoods } from "./database.js"

export const compileMoods = () => {
    const moods = getMoods();
    let htmlString = "";
    for (const mood of moods) {
        htmlString += `
        <h2 class="mood-name"> ${mood.name} </h2>
        <img src="${mood.imageUrl}" alt="${mood.text}">
        `
        //make sure to come back and fill out html string to add the rest of the mood information
    }
}