import "./style.css";
import "mathlive/dist/mathlive-fonts.css";
import * as mathlive from "mathlive";

/**
 * Apply styles to MathfieldElement
 * @param mfe
 */
const addStyles = (mfe) => {
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

const app = document.querySelector("#app");
app.innerHTML = `
  <h1>Reproduce your Mathlive Bug / Issue below:</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const mfe = new mathlive.MathfieldElement();
mfe.value = `\\sigma=\\sqrt[]{\\frac{1}{N}\\sum ^N_{i=1}(x_i-\\mu)^2}\\text{^^20where^^20}\\mu=\\frac{1}{N}\\sum ^N_{i=1}x_i`;
addStyles(mfe);
app.appendChild(mfe);
