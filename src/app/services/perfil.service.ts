import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PerfilService {
  
  API_ENDPOINT = "https://gorest.co.in/public-api/users/:id?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X";
  //API_ENDPOINTT = "https://gorest.co.in/public-api";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
    "Allow": "GET, POST, OPTIONS, PUT, DELETE"
  });
  constructor(private httpClient: HttpClient) {}

  getAllData(): Observable<any> {
    return this.httpClient.get(
      this.API_ENDPOINT.replace('/:id', ''),
      { headers: this.headers }
    );
  }

  getOneRecord(id): Observable<any> {
    return this.httpClient.get(
      this.API_ENDPOINT.replace(':id', id)
    );
    
  }
}
