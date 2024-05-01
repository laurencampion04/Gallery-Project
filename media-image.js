import { LitElement, html, css } from "lit";
import { DDD } from ;

export class mediaImage extends DDD {
    static get tag() {
        return 'media-image'; 
    }

    constructor() {
        super();
        this.imgSrc = ""; 
    }

    handleClick() {
        console.log("Image Clicked"); 

        const evt = new CustomEvent("image-clicked", {
            bubbles: true, 
            cancelable: true,
            compopsed: true,
            detail: {
            opened: true,
            invokedBy: this.invokedBy,
            },
        });
        this.distpatchEvent(evt); 
    } 

    static get styles() {
        return[
            super.styles,
            css`
                :host {

                }`
        ]
    }

    render() {
        return html`
            <div class="img-color-bord" @click="${this.handleClick}">
                <img class="image" src="${this.imgSrc}">
            </div>
            `;
    }
} 