import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      tap(albums => this.albumsSubject.next(albums)) // 获取数据时更新 BehaviorSubject
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  updateAlbum(id: number, updatedAlbum: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${id}`, updatedAlbum).pipe(
      tap(() => {
        this.getAlbums().subscribe();
      })

    );
  }

  

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        // 删除本地存储的 album
        const updatedAlbums = this.albumsSubject.value.filter(album => album.id !== id);
        this.albumsSubject.next(updatedAlbums);
      })
    );
  }
}
