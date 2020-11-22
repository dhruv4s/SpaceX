import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SpaceXLaunchProgramsService {
  constructor(private http: HttpClient) {}

  getAllPrograms(limit: any, year: any, launch: any, land: any): Observable<any> {
    let url = `https://api.spaceXdata.com/v3/launches?limit=${limit}`
    if(launch!=""){
        url=url+`&launch_success=${launch}`
    }
    if(land!=""){
        url=url+`&land_success=${land}`
    }
    if(year!=""){
        url=url+`&launch_year=${year}`
    }
    return this.http.get(url)
    .pipe(map(response=>{
        return response;
    }))
    .pipe(catchError(err=>{
        return err;
    }))
  }
}
