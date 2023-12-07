import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default class Parallaximage{
        constructor({imageSection}){
            this.section = imageSection;
            this.image = this.section.querySelector('img');
            this.heightOffset = this.image.offsetHeight - this.section.offsetHeight;
            this._animate();
        } 
        _animate(){
            gsap.fromTo(this.image, {
                y: -this.heightOffset,

            },{
                scrollTrigger: {
                    trigger: this.section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                y : 0,
                ease: 'none',
            })
        }  
};