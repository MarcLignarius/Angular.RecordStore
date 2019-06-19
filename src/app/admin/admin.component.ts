import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {
  showAddFormTrue = false;
  showEditFormTrue = false;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    var newAlbum: Album = new Album(title, artist, description);
    this.albumService.addAlbum(newAlbum);
  }

  showAddForm() {
    if(this.showAddFormTrue == true) {
      this.showAddFormTrue = false;
    } else {
      this.showAddFormTrue = true;
    }
  }

  showEditForm() {
    if(this.showEditFormTrue == true) {
      this.showEditFormTrue = false;
    } else {
      this.showEditFormTrue = true;
    }
  }

}
