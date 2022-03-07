import React, { forwardRef, useImperativeHandle, useRef } from "react";

function SecondComponent(props, ref) {
  const changeColor = useRef(null);
  useImperativeHandle(ref, () => ({
    onclick: () => {
      changeColor.current.style.backgroundColor = "tomato";
    },
  }));

  return <span ref={changeColor}>Change Me</span>;
}

export default forwardRef(SecondComponent);
