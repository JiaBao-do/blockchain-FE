import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from './model/block';
import { Data } from './model/data';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private baseURL = "http://localhost:8080/v1/blockchain"

  constructor(private httpClient: HttpClient) { }


  getBlockchain(): Observable<Block[]>{
    return this.httpClient.get<Block[]>(this.baseURL);
  }

  startBlockchain(): Observable<Block[]>{
    return this.httpClient.get<Block[]>(`${this.baseURL+"/start"}`);
  }

  createBlock(data: Data): Observable<object>{
    return this.httpClient.post((`${this.baseURL+"/create"}`), data)
  }

}
