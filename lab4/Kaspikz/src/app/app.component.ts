import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaspikz';
}
