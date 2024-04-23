import { LitElement, html, css, } from 'lit';

class ImageGallery extends LitElement {
    static get styles() {
        return css` 
            .image-gallery {
                display: flex; 
                flex-wrap: wrap; 
            } 
        `; 
    }

    static get tagName() {
        return 'image-gallery'; 
    }

    showPopup(id) {
        var popup = this.shadowRoot.getElementById(id);
        popup.style.display = "block"; 
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="image-gallery">
                Content
            </div>
        `; 
    }
}


customElements.define(ImageGallery.tag, ImageGallery);

