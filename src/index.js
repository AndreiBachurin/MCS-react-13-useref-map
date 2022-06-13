import React, { useRef, useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";

function App() {
  const [random, setRandom] = useState(Math.random());
  const mapRef = useRef();

  useMapbox(mapRef);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div ref={mapRef} id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));