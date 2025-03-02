import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../../services/albums.service';

@Component({
  standalone:false,
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => this.album = data);
  }

  saveChanges(): void {
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(() => {
      alert('Album updated!');
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
