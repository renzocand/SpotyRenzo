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
  error:boolean;
  mensajeError:string;

  constructor(private _ss:SpotifyService) { 
    this.error = false;
    // this._ss.obtenerToken().subscribe(data=>console.log(data))
  }

  ngOnInit() {
    this._ss.getPlayList().subscribe(data=>{
      data.forEach(tracks=>{
        this.loading = false;
        this.tracksArray.push(tracks['track']);
      })
      // console.log(this.tracksArray);
    },(error:any)=>{
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message
    })
  }



}
