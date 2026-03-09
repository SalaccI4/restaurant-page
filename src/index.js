import "./styles.css";
import {loadHome} from "./home.js";

const content = document.querySelector("#content")
const homeButton = document.querySelector("#homebtn")
const menuButton = document.querySelector("#menubtn")
const aboutButton = document.querySelector("#aboutbtn")

loadHome()
if (content.firstElementChild.id !== "home") {
    homeButton.addEventListener("click", loadHome)
}