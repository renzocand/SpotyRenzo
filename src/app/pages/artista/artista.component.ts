import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent {
  tracks: any[];
  artista: any;
  loading = true;

  constructor(
    private _ss: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(data => {
      this.getArtista(data['id'])
      this.topSongArtista(data['id'])

    });

  }

  ngOnInit() {}

  getArtista(id:string) {
    this._ss.getArtista(id).subscribe(data => {
      // console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  topSongArtista(id:string){
    this._ss.TopTracksArtista(id).subscribe(data=>{
      this.tracks = data;
    })
  }
}
