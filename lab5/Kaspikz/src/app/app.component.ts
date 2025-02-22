import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
}

interface Category{
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaspikz';
  categories: Category[] = [
    {
      name: 'Electronics',
      products: [
        { id: 1, name: 'Power Adapter', image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large', description: 'Apple 18W USB-C Power Adapter USB Type-C белый', rating: 4.5, link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000', likes: 12 },
        { id: 2, name: 'Iphone', image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large', description: 'Apple iPhone 13 128Gb черный', rating: 4.0, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000', likes: 130 },
        { id: 3, name: 'Mouse', image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large', description: 'Wireless Mouse черный', rating: 4.2, link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000', likes: 15 },
        { id: 4, name: 'Smartwatch', image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=preview-large', description: 'Xiaomi Redmi Watch 5 Active 51 мм черный-черный', rating: 4.7, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000', likes: 2 },
        { id: 5, name: 'Xiaomi', image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large', description: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный', rating: 4.6, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000', likes: 56 },
      ],
    },
    {
      name: 'Clothing',
      products: [
        { id: 6, name: 'Robe', image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hbf/83869525082142.jpg?format=preview-large', description: 'Пальто Tuba черный', rating: 4.5, link: 'https://kaspi.kz/shop/p/pal-to-tuba-chernyi-113392517/?c=750000000', likes: 5 },
        { id: 7, name: 'Jeans', image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/ha5/84052954415134.jpg?format=preview-large', description: 'Джинсы прямые Urban Outfit синий', rating: 4.3, link: 'https://kaspi.kz/shop/p/dzhinsy-prjamye-urban-outfit-sinii-113558315/?c=750000000', likes: 10 },
        { id: 8, name: 'Jacket', image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p1a/4071980.jpg?format=preview-large', description: 'Бомбер ZENGR бежевый', rating: 4.8, link: 'https://kaspi.kz/shop/p/bomber-zengr-bezhevyi-113591624/?c=750000000', likes: 17 },
        { id: 9, name: 'Sneakers', image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc3/85586422530078.jpg?format=gallery-medium', description: 'Кроссовки графит, черный', rating: 4.6, link: 'https://kaspi.kz/shop/p/krossovki-grafit-chernyi-117934727/?c=750000000', likes: 14 },
        { id: 10, name: 'Hat', image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/ha3/64408878448670.jpg?format=preview-large', description: 'Шапка Paola Belleza PB508 размер универсальный, графит', rating: 4.4, link: 'https://kaspi.kz/shop/p/shapka-paola-belleza-pb508-razmer-universal-nyi-grafit-106243497/?c=750000000', likes: 25 },
      ],
    },
    {
      name: 'Gaming products',
      products: [
        { id: 11, name: 'Headphone', image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/ha5/86475584110622.jpg?format=preview-large', description: 'HYDRA Minor бежевый', rating: 4.7, link: 'https://kaspi.kz/shop/p/hydra-minor-bezhevyi-120724130/?c=750000000', likes: 45 },
        { id: 12, name: 'MP4', image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=preview-large', description: 'Яндекс Станция Лайт 2 фиолетовый', rating: 4.8, link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000', likes: 74 },
        { id: 13, name: 'Sony', image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h18/63780476616734.jpg?format=preview-large', description: 'Sony Dualshock 4 v2 черный', rating: 4.6, link: 'https://kaspi.kz/shop/p/sony-dualshock-4-v2-chernyi-13000002/?c=750000000', likes: 41 },
        { id: 14, name: 'Red Dead Disk', image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/hf7/63779992109086.jpg?format=preview-large', description: 'Red Dead Redemption 2 PS4 RUS', rating: 4.5, link: 'https://kaspi.kz/shop/p/red-dead-redemption-2-ps4-rus-10700955/?c=750000000', likes: 89 },
        { id: 15, name: 'Drome', image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/hb4/83057291264030.jpg?format=preview-large', description: 'OEM Е88 черный', rating: 4.3, link: 'https://kaspi.kz/shop/p/oem-e88-chernyi-112769474/?c=750000000', likes: 78 },
      ],
    },
    {
      name: 'Furniture',
      products: [
        { id: 16, name: 'Sofa', image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=preview-large', description: 'Morbido диван прямой Комфорт, обивка микровелюр,', rating: 4.9, link: 'Morbido диван прямой Комфорт, обивка микровелюр,', likes:25},
        { id: 17, name: 'Chair', image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=preview-large', description: 'Стул Чили, 86x45x37 см, обивка серый велюр', rating: 4.6, link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000', likes: 50 },
        { id: 18, name: 'Case', image: 'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=preview-large', description: 'Стеллаж напольный Abuer, 66x31x132 см, белый', rating: 4.7, link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000', likes: 16 },
        { id: 19, name: 'Wardrobe', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg?format=preview-large', description: 'Распашной шкаф Fourdoor с зеркалом, 160x200х47 см,', rating: 4.5, link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-fourdoor-s-zerkalom-160x200h47-sm-belyi-108174703/?c=750000000', likes: 13 },
        { id: 20, name: 'Table', image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h4c/85762714075166.jpg?format=preview-large', description: 'Стол консоль-трансформер 329572, 300x100x76 см, ЛДСП', rating: 4.8, link: 'https://kaspi.kz/shop/p/stol-konsol--transformer-329572-300x100x76-sm-ldsp-115915958/?c=750000000', likes: 21 },
      ],
    }
  ];

  selectedCategory: Category | null = null;
  selectCategory(Category:Category){
    this.selectedCategory = Category;
  }

}
