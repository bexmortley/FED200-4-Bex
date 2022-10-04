import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Componet extends LitElement {
  render() {
    return html` 
        <div>
           <value-counter label = "Cookies" count="3"> </value-counter>
           <value-counter label = "Milk" count=""> </value-counter>

        </div> `;
  }
}

// class BexCustom extends HTMLElement {
//     inner = this.attachShadow({ mode: "closed" });
//     count = 0;

//     connectedCallback() {
//         this.inner.innerHTML = `
//         <style>
//         div {
//             display: flex;
//             border: 1px solid blue;
//         }
//         </style>

//         <div>
//         <span>0</span>
//         <button>+</button>
//         </div>
//         `;
//         const button = this.inner.querySelector(`button`);
//         const display = this.inner.querySelector('span');

//         const handler = () => {
//                 this.count = this.count + 1
//                 display.innerText = this.count;
//         }
//         button.addEventListener(`click`, handler);
//     }
// }

customElements.define("tmin-app", Componet);
