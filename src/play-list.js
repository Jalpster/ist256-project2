import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class PlayList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.mediaImages;
    this.oppened = false;
    // this.currentImage;
    this.currentIndex = 0;
    document.body.addEventListener("toggle-play-list", (e) => this.togglePlaylist(e));
  }

  togglePlaylist(e) {
    if (this.oppened == true) {
      this.oppened = false;
    } else {
      this.getCurrentImage(e);
      this.oppened = true;
    }
    this.requestUpdate();
  }

  getImages(e) {
    this.mediaImages = document.querySelectorAll('media-image');

    var i = 0;
    this.mediaImages.forEach(element => {
      if (element == e.target) {
        this.currentIndex = i;
      }
      i = i + 1;
    });
  }

  static get styles() {

    return css`

      :host {
        --width: 900px;
        --height: 500px;
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

      .close-button {
        position: fixed;
        top: 20px;
        right: 20px;
        border: none;
        background-color: none;
        border-radius: 90%;
        height: 1.5rem;
        width: 1.5rem;
        font-size: 1rem;
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
        height: 40px;
        width: 80px;
        margin-right: 20px;
        margin-left: 20px;
      }

      .progress-numbers {
        display: flex;
        flex-direction: row;
      }

    `;
  }

  closeOverlay() {
    this.oppened = false;
    this.requestUpdate();
  }

  getCurrentImage(e) {
    this.getImages(e);
    this.currentImage = this.mediaImages[this.currentIndex].cloneNode();
  }

  moveLeft() {
    if (this.mediaImages[this.currentIndex - 1]) {
      this.currentIndex = this.currentIndex - 1;
      this.currentImage = this.mediaImages[this.currentIndex].cloneNode();
      this.requestUpdate();
    }
  }

  moveRight() {
    if (this.mediaImages[this.currentIndex + 1]) {
      this.currentIndex = this.currentIndex + 1;
      this.currentImage = this.mediaImages[this.currentIndex].cloneNode();
      this.requestUpdate();
    }
  }

  render() {
    return !this.oppened ? "" : html`
        <div class="background-overlay">
            <button class="close-button" @click="${this.closeOverlay}">X</button>
            <div class="content">
                <div class="image-box">
                  <span class="progress-numbers">
                    <p>${this.currentIndex + 1}</p>
                    <p>&nbsp;/&nbsp;</p>
                    <p>${this.mediaImages.length}</p>
                  </span>
                  ${this.currentImage}
                  <p>${this.currentImage.description}</p>
                  <span>
                    <button @click="${this.moveLeft}">Left</button>
                    <button @click="${this.moveRight}">Right</button>
                  </span>
                </div>
            </div>
        </div>    
    `;
  }

  static get properties() {
    return {
        // mediaImages: { type: Array, reflect: true, attribute: "media-images" },
    };
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);

// register globally so we can make sure there is only one
globalThis.PlayList = globalThis.PlayList || {};
// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same modal
globalThis.PlayList.requestAvailability = () => {
  if (!window.PlayList.instance) {
    globalThis.PlayList.instance = document.createElement("play-list");
    document.body.appendChild(globalThis.PlayList.instance);
  }
  return globalThis.PlayList.instance;
};

export const PlayListStore = globalThis.PlayList.requestAvailability();
