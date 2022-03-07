import { useRef } from "react";
import FirstComponent from "./FirstComponent";

function BackgroundColor() {
  const changeColor = useRef(null);

  const Change = () => {
    changeColor.current.onclick();
  };

  return (
    <>
      <button onClick={() => Change()}>Change Color</button>
      <FirstComponent ref={changeColor} />
    </>
  );
}

export default BackgroundColor;
