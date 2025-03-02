import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // 根路径重定向到 /home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },  // 选中的相册详情
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },  // 选中相册的照片
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
