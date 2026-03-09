import "./styles.css";
import "./home.js";

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")

const piss = () => {
    console.log("piss")
}

home.addEventListener("click", piss)
menu.addEventListener("click", piss)
about.addEventListener("click", piss)