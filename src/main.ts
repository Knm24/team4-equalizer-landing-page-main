import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import { MainCard } from "../src/components/MainCard/MainCard";

import "./style.css";

const header = Header();
const mainCard = MainCard();
const footer = Footer();

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.appendChild(header);
  app.appendChild(mainCard);
  app.appendChild(footer);
}
