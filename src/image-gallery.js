import { LitElement, html, css, } from 'lit';

class ImageGallery extends LitElement {

    static get tag() {
        return 'image-gallery';
    }

    constructor() {
        super();
        this.title = "image-gallery";
        this.image=[];
        this.imageNumber = ; 
        this.visible = false; 
        
    }

    static get styles() {
        return css` 

            :host {
                display: block; 
            }

            .image-gallery {
                display: flex; 
                flex-wrap: wrap; 
            } 
        `; 
    }

    document.addEventListener(function() { 
        const slides = document.querySelectorAll('.slide');
        let index = 0; 

        function showSlide(n) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[n].style.display = 'block';
        }

        function nextSlide() {
            index++;
    
            if(index >= slide.length) {
                index = 0;
            }
            showSlide(index); 
        }

        function backSlide() {
            index--;
    
            if(index < 0) {
                index = slide.length -1;
            }
            showSlide(index);
        }

        document.querySelector('.next').addEventListener('click', nextSlide);
        document.querySelector('.back').addEventListener('click', backSlide); 
    
        showSlide(index);
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.setupPopup(); 
    }

    popupClick() { 
        const card1 = this.shadowRoot.querySelector('#card1'); 
        const popupCard = this.shadowRoot.querySelector('#popupCard'); 

        card1.addEventListener('click', () => {
            card1.style.display = 'none';
            popupCard.style.display = 'block'; 
        });
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="image-gallery">
                <div id="card1" class="card1"></div> 
                <div id="popupCard" class="card" style="display: none;"></div> 
            </div>
        `; 
    }
}


customElements.define(ImageGallery.tag, ImageGallery);

