import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MemberListResponse} from '../models/member-list.response';

@Injectable({
    providedIn: 'root'
})
export class MemberService {

    constructor(private http: HttpClient) {
    }

    list(pageIndex: number, pageSize: number): Observable<MemberListResponse> {

        const queryParams = new HttpParams()
            .append('page', pageIndex.toString())
            .append('results', pageSize.toString());

        return this.http.get<MemberListResponse>('https://randomuser.me/api/',
            {observe: 'response', params: queryParams})
            .pipe(
                map(response => response.body)
            );

    }

}
