import { PageInfo } from "../../components/PageInfo";
import { RandomQuote } from "./solved";

const quotes = [
  "Frankly, my dear, I don't give a damn.",
  "I'm gonna make him an offer he can't refuse.",
  "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
  "Toto, I've a feeling we're not in Kansas anymore.",
  "Here's looking at you, kid.",
  "Go ahead, make my day.",
  "All right, Mr. DeMille, I'm ready for my close-up.",
  "May the Force be with you.",
  "Fasten your seatbelts. It's going to be a bumpy night.",
  "You talking to me?",
];

export const StateAndLifecycleSolution = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={
      <RandomQuote quotes={quotes} />
    }
  />
);
