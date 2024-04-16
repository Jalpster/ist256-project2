import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class PlayList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.currentDescription = "default desc";
    this.mediaImages = [];
  }

  static get styles() {

    return css`

      :host {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
      }

      .background-overlay {
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .content {
        display: flex;
        flex-direction: row;
        color: white;
        align-items: center;
      }

      .image-box {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      media-image {
        /* pointer-events: none; */
      }

      button {
        height: 20px;
      }

    `;
  }

  getDescription(e) {
    let description = e.target.description;
    
    this.currentDescription = description;
  }

  render() {
    return html`
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

globalThis.customElements.define(PlayList.tag, PlayList);
