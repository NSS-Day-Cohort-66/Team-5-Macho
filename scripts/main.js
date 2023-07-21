import { compileMoods } from "./moods.js";
const container = document.querySelector("#container");

container.innerHTML = compileMoods();
