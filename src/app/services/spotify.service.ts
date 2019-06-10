import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){

    let token:string = 'BQD7eWwbTcKMsnveFVIq-a7Y1iifhFGjpIfp2UpRXnloWw3IpL9JyIb19IQJGE60rEJlMvo7W3zDfvc-W8c';

    const headers= new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers})
  }

  getPlayList(){
    return this.getQuery("playlists/3wOq4Lguu0LaWxRBPGRUKJ/tracks").pipe(map(
      data => data['items']
    ))
  }

  getRecomendadas(id:string){
    return this.getQuery(`recommendations?limit=20&seed_tracks=${id}`).pipe(map(
      data => data['tracks']
    ))
  }

  buscarArtista(texto:string){
    return this.getQuery(`search?q=${texto}&type=artist&limit=20`).pipe(map(
      data=>data['artists'].items
    ))
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`).pipe(map(
      data=>data
    ))
  }

  TopTracksArtista(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=PE`).pipe(map(
      data=>data['tracks']
    ))
  }
}



