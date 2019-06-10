import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recomendaciones",
  templateUrl: "./recomendaciones.component.html",
  styles: []
})
export class RecomendacionesComponent implements OnInit {
  id: string;
  nombre: string;
  tracks: any[] = [];

  constructor(
    private _ss: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(param => {
      this.id = param["id"];
    });
  }

  ngOnInit() {
    this._ss.getRecomendadas(this.id).subscribe(data => {
      this.tracks = data;
      // console.log(this.tracks);
    });

    //OBTENER NOMBRE
    this._ss.getPlayList().subscribe(data => {
      let idDB = data.find((data:object) => data["track"].id === this.id);
      this.nombre = idDB["track"].name;
    });
  }
}
