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
    this.oppened = false;
    document.body.addEventListener('toggle-play-list', this.togglePlaylist());
  }

  togglePlaylist(e) {
    if (this.oppened == true) {
      this.oppened = false;
    } else {
      this.oppened = true;
    }
    this.requestUpdate();
  }

  static get styles() {

    return css`

      :host {
      }

      .background-overlay { 
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
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
        pointer-events: none;
      }

      button {
        height: 20px;
      }

    `;
  }

  closeOverlay() {
    this.oppened = false;
    this.requestUpdate();
    // document.querySelector("play-list").remove();
  }

  getDescription(e) {
    let description = e.target.description;
    
    this.currentDescription = description;
  }

  render() {
    return !this.oppened ? "" : html`
        <div class="background-overlay">
            <button @click="${this.closeOverlay}">CLOSE</button>
            <div class="content">
                <button>Left</button>
                <div class="image-box">
                    <media-image></media-image>
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
