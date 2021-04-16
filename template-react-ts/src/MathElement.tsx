import * as mathlive from "mathlive";
import "mathlive/dist/mathlive-fonts.css";
import React, { useCallback, useState, useRef } from "react";

/**
 * Apply styles to MathfieldElement
 * @param mfe
 */
const addStyles = (mfe: mathlive.MathfieldElement) => {
  var style = document.createElement("style");
  style.innerHTML = `
      /* the top level container */
      .ML__fieldcontainer {
        background-color: white;
        border: 1px #ccc solid;
        color: black;
      }
      /* selection background color */
      .ML__selection{
        background-color: #F9FAFB !important;
      }
      /* do not show border on focus */
      :host(:focus), :host(:focus-within) {
        outline: Highlight auto 0px;    /* For Firefox */
        outline: -webkit-focus-ring-color auto 0px;
      }
      `;
  mfe.shadowRoot?.appendChild(style);
};

const configureMathElement = (mfe: mathlive.MathfieldElement) => {
  mfe.setOptions({
    smartFence: true,
    virtualKeyboardMode: "off", // "manual"
    virtualKeyboards: "numeric symbols",
  });

  mfe.addEventListener("focus", (ev: Event) => {
    // console.log("Got focus", ev);
  });

  mfe.addEventListener("focus-out", (ev: Event) => {
    // console.log("Lost focus", ev.detail.direction);
  });

  mfe.addEventListener("mount", (ev: Event) => {
    // console.log("Mounted", ev);
  });

  // https://cortexjs.io/docs/mathlive/?q=selection-change
  mfe.addEventListener("selection-change", (ev: Event) => {
    const sel = mfe.selection;
    console.log(sel, "SELECTION");
    if (sel) {
      const s1 = sel.ranges[0];
      console.log(`${s1[0]} -> ${s1[1]}`);
      console.log("RANGE", s1);
      console.log(mfe.getValue(s1));
    }
  });
};

interface MathElementProps {
  value: string;
}
export const MathElement = ({ value }: MathElementProps) => {
  const [curval, setCurVal] = useState(value);
  const [configured, setConfigured] = useState(false);
  const [actionParam, setActionParam] = useState("");
  const [mfe, setMfe] = useState(new mathlive.MathfieldElement());
  const selInput = useRef<HTMLInputElement>(null);

  const elRef = useCallback((node) => {
    if (node !== null) {
      if (!configured) {
        configureMathElement(mfe);
        addStyles(mfe);
        setConfigured(true);
      }
      mfe.setValue(curval);
      node.appendChild(mfe);
    }
  }, []);

  /**
   * here you can read the value from the action input and process it in creative ways
   * e.g.: modify / reconfigure the `mfe` instance
   */
  const doAction = () => {
    console.log("ACTION INPUT", actionParam);
    mfe.focus();
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div ref={elRef}></div>
        <button onClick={doAction}>ACTION</button>
        <input
          type="text"
          className="action"
          ref={selInput}
          width="100px"
          onChange={(e) => setActionParam(e.target.value)}
        />
      </div>
    </div>
  );
};
