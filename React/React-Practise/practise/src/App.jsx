import { Suspense } from "react";
import "./App.css";
import Bottels from "./components/bottels";

const bottlesPromise = fetch('../public/bottles.json').then( res => res.json())

function App() {
  return <>
  <Suspense fallback={<h3>Battles are loading ...</h3>}>
    <Bottels bottlesPromise = {bottlesPromise} />
  </Suspense>
  </>;
}

export default App;
