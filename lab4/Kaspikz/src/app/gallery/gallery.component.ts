import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';


interface Product {
  image: string;
  name: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: string[] = [
    'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=preview-large',
    'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large',
    'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large'
  ];

  currentIndex: number = 0;

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
