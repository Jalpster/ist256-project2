import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageDialog extends DDD {

  static get tag() {
    return 'image-dialog';
  }

  constructor() {
    super();
    this.oppened = false;
  }

  static get styles() {

    return css`

      :host {
      }

    `;
  }

  render() {
    !this.oppened ? "" : html`
        <div class="background-overlay">
            <button>CLOSE</button>
            <div class="content">
                <button>Left</button>
                <div class="image-box">
                    <media-image @loadstart="${this.getDescription}"></media-image>
                    <p>${this.currentDescription}</p>
                </div>
                <button>Right</button>
            </div>
        </div>    
    `;
  }

  static get properties() {
    return {
        // asdasd
    };
  }
}

globalThis.customElements.define(ImageDialog.tag, ImageDialog);
