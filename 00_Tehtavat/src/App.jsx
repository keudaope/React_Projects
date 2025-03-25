import Numbers from "./lumoakatemia/R18_Numbers";
import Names from "./lumoakatemia/R19_Names";
import Products from "./lumoakatemia/R20_Products";
import Tervehdys from "./lumoakatemia/R21_Tervehdys";
import Tuote from "./lumoakatemia/R22_Tuote";
import KokoNimi from "./lumoakatemia/R23_KokoNimi";
import Kommentti from "./lumoakatemia/R24_Kommentti";
import Artikkeli from "./lumoakatemia/R25_Artikkeli";
import Kirja from "./lumoakatemia/R26_Kirja";
import Tehtava from "./lumoakatemia/R27_Tehtava";
import Elain from "./lumoakatemia/R28_Elain";
import Elokuva from "./lumoakatemia/R29_Elokuva";
import Saa from "./lumoakatemia/R30_Saa";
import Users from "./lumoakatemia/R31_Users";
import Memes from "./lumoakatemia/R32_Memes";
import GitHub from "./lumoakatemia/R33_GitHub";
import BitCoin from "./lumoakatemia/R34_BitCoin";
import DogPictures from "./lumoakatemia/R35_DogPictures";
import ChuckNorris from "./lumoakatemia/R38_ChuckNorris";
import News from "./lumoakatemia/R36_News";
import Weather from "./lumoakatemia/R37_Weather";
import "./App.css";
import {
  products,
  users,
  links,
  images,
  todos,
  buttons,
  countries,
  reviews,
  options,
} from "./data";
import ProductList from "./lumoakatemia/R40_ProductList";
import UserCards from "./lumoakatemia/R41_UserCards";
import Links from "./lumoakatemia/R42_Links";
import Images from "./lumoakatemia/R43_Images";
import Todos from "./lumoakatemia/R44_Todos";
import Buttons from "./lumoakatemia/R45_Buttons";
import Countries from "./lumoakatemia/R46_Countries";
import Reviews from "./lumoakatemia/R47_Reviews";
import Options from "./lumoakatemia/R48_Options";

function App() {
  return (
    <>
      <Options options={options} />
    </>
  );
}

export default App;
