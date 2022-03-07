import React, { useRef, useImperativeHandle, forwardRef } from "react";
import SecondComponent from "./SecondComponent";

function FirstComponent(props, ref) {
  const changeColor = useRef(null);
  useImperativeHandle(ref, () => ({
    onclick: () => {
      changeColor.current.onclick();
    },
  }));
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <SecondComponent ref={changeColor} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default forwardRef(FirstComponent);
