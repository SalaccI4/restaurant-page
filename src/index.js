import "./styles.css";
import {loadHome} from "./home.js";

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")

home.addEventListener("click", loadHome)