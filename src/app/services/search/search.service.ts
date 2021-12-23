import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search = (filters?:any):any => {
    const endpoint = `${env.LAMBDA_API_URL}/search-personas`
    const options: any = {}
    if(filters?.nickname) { 
      options.params = new HttpParams({ fromString: `?nickname=${filters.nickname}` })
    }
    return this.http.get<any>(endpoint, options)
  }
}
