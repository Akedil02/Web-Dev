import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

@Component({
  standalone : false,
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .subscribe(data => this.photos = data);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
