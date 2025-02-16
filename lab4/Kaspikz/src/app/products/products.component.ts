import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product{
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  shareOnWhatsApp(link: string) {
    const encodedLink = encodeURIComponent(link);
    const whatsappUrl = `https://wa.me/?text=${encodedLink}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(link: string) {
    const encodedLink = encodeURIComponent(link);
    const telegramUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramUrl, '_blank'); 
  }
  products: Product[]=[
    {//1
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=preview-large',
      name: 'Для Apple iPhone 13 прозрачный',
      description: 'Цена 99 ₸.  <br>В рассрочку 33 ₸ * 3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000'
    },

    {//2
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large',
      name: 'Apple 18W USB-C Power Adapter USB Type-C белый',
      description: 'Цена 8 228 ₸.  <br>В рассрочку 2 743 ₸ * 3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },

    {//3
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
      name: 'Apple 20W USB-C Power Adapter белый',
      description: 'Цена 3 739 ₸.  <br>В рассрочку 1 247 ₸ * 3',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
    },

    {//4
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
      name: 'Apple iPhone 13 128Gb черный',
      description: 'Цена 272 048 ₸.  <br>В рассрочку 11 336 ₸ * 24',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },

    {//5
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hf3/86260519796766.jpg?format=preview-large',
      name: 'Для Apple iPhone 11 прозрачный',
      description: 'Цена 90 ₸.  <br>В рассрочку 30 ₸ * 3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000'
    },

    {//6
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
      name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      description: 'Цена 54 255 ₸.  <br>В рассрочку 2 261 ₸ * 24',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },

    {//7
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Цена 686 240 ₸.  <br>В рассрочку 28 594 ₸ * 24',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },

    {//8
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=preview-large',
      name: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
      description: 'Цена 1 499 ₸.  <br>В рассрочку 138 ₸ * 3',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000'
    },

    {//9
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h78/82920434892830.jpg?format=preview-large',
      name: 'NRS1708 розовый',
      description: 'Цена 414 ₸.  <br>В рассрочку 138 ₸ * 3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },

    {//10
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large',
      name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Цена 656 800 ₸.  <br>В рассрочку 27 367 ₸ * 24',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },

    {//11
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h92/80944372514846.jpg?format=preview-large',
      name: 'JS0000084 серебристый',
      description: 'Цена 439 ₸.  <br>В рассрочку 147 ₸ * 3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/js0000084-serebristyi-110564899/?c=750000000'
    },

    {//12
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hea/83724869828638.jpg?format=preview-large',
      name: 'Для Apple iPhone 15 Pro прозрачный',
      description: 'Цена 118 ₸.  <br>В рассрочку 40 ₸ * 3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000'
    },
  ]
}
