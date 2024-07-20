import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  productImages: string[] = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'

  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 10
  };


  constructor() { }

  ngOnInit(): void {
    this.productImages
  }
  slidePrev(slides: IonSlides) {
    slides.slidePrev();
  }

  slideNext(slides: IonSlides) {
    slides.slideNext();
  }
}
