import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  tracksArray:any[] = [];
  loading = true;

  constructor(private _ss:SpotifyService) { 

  }

  ngOnInit() {
    this._ss.getPlayList().subscribe(data=>{
      data.forEach(tracks=>{
        this.loading = false;
        this.tracksArray.push(tracks['track']);
      })
      // console.log(this.tracksArray);
    })
  }

}
