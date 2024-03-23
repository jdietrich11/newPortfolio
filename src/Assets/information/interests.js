import Programming from "../../Components/programming/programming";
import Gaming from "../../Components/gaming/gaming";
import Movies from "../../Components/movies/movies";
import Shows from "../../Components/shows/shows";
import Cars from "../../Components/cars/cars";
import Misc from "../../Components/misc/misc";
import Outdoors from "../../Components/outdoors/outdoors";
import Sports from "../../Components/sports/sports";
import Family from "../../Components/family/family";

const personalInterests = [
  {
    id: 1,
    name: "programming",
    object: <Programming />,
  },
  {
    id: 2,
    name: "gaming",
    object: <Gaming />,
  },
  {
    id: 3,
    name: "movies",
    object: <Movies />,
  },
  {
    id: 4,
    name: "TV Shows",
    object: <Shows />,
  },
  {
    id: 5,
    name: "Cars",
    object: <Cars />,
  },
  {
    id: 7,
    name: "Misc Projects",
    object: <Misc />,
  },
  { id: 8, name: "outdoors", object: <Outdoors /> },
  { id: 9, name: "sports", object: <Sports /> },
  { id: 10, name: "family", object: <Family /> },
];

export default personalInterests;
