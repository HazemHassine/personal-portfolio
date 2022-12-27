import { useState } from "react";
import React from "react";

export default function Cont() {
  const [placeholder, setPlaceholder] = useState("");

  const string = "Taahis is the final string.",
    index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      setPlaceholder((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 500);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return <div>{placeholder}</div>;
}
