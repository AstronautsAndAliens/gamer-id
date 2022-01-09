import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root' //this should be provided by the persona.module
})
export class SteamService {

  constructor(
    private http: HttpClient,
  ) { }

  getSteamPlayerSummary = (steamId: string) => {
    const endpoint = `${env.LAMBDA_API_URL}/get-steam-player-summary`
    const options = {
      params: new HttpParams({ fromString: `?steam_id=${steamId}` })
    }
    return this.http.get<any>(endpoint, options).pipe(map(steamData => {
      return steamData.steam_player_summary
    }))
  }
}
