import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class MediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.source = "https://github.com/pennstate.png";
    this.caption = "PSU"
    this.description = "Wonderful image of the Penn State logo :D"
    this.altText = "PSU Logo";
    this.primary = "green";
    this.secondary = "black";
  }

  static get styles() {

    return css`

      :host([primary="green"]) {
        --background-color: var(--ddd-theme-default-opportunityGreen);
      }

      :host {
        margin: 25px;
      }

      .background {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: .15rem solid var(--border-color, var(--ddd-theme-default-coalyGray));
        border-radius: 8px;
        width: var(--width, 400px);
        height: var(--height, 400px);
        padding: 1%;
        background-color: var(--background-color);
      }

      .background:hover {
        transform: translate(8px,-8px);
        box-shadow: -8px 8px #000;
        transition: .5s;
      }

      .foreground {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 90%;
        border: .15rem solid var(--border-color, var(--ddd-theme-default-coalyGray));
        border-radius: 8px;
        background-color: var(--foreground-color, white);
      }

      .foreground img {
        width: var(--image-width, 85%);
        /* height: var(--image-height, 90%); */
      }

      .caption {
        color: var(--caption-color, var(--ddd-theme-default-slateMaxLight))
      }

    `;
  }

  render() {
    return html`
        <div class="background">
            <div class="foreground">
                <image src="${this.source}" alt="${this.altText}"></image>
            </div>
            <p class="caption">${this.caption}</p>
        </div>
    `;
  }

  static get properties() {
    return {
        source: { type: String, reflect: true },
        caption: {type: String, reflect: true},
        altText: { type: String, reflect: true, attribute: "alt-text" },
        description: { type: String, reflect: true },
        primary: { type: String, reflect: true },
        secondary: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);
