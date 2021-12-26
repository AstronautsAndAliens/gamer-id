import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment as env } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { IPersona } from '../../models/persona.model'
import { ISearchFilters } from 'src/app/models/search.model'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search = (filters?: ISearchFilters): Observable<IPersona[]> => {
    const endpoint = `${env.LAMBDA_API_URL}/search-personas`
    const options: any = {}
    if (filters?.nickname) {
      options.params = new HttpParams({
        fromString: `?nickname=${filters.nickname}`,
      })
    }
    return this.http.get<IPersona[]>(endpoint, options).pipe(
      map((resultList: any) => { //I dont know why it wont let me map this to IPersona[]
        return resultList
      })
    )
  }
}
