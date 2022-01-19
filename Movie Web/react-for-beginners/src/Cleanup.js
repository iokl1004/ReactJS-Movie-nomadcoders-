// 6-4장 Cleanup
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>;
}

function Cleanup() {
  const [showing, setShwoing] = useState(false);
  const onClick = () => setShwoing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}
export default Cleanup;