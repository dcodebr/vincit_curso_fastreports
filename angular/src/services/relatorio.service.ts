import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Relatorio } from "../app/models/relatorio.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RelatorioService {
    private baseURL = "https://localhost:7003/api/relatorio";

    constructor(private httpClient: HttpClient) {
    }

    public listar(): Observable<Relatorio[]> {
        return this.httpClient.get<Relatorio[]>(this.baseURL);
    }

    public gerar(id: number): Observable<string> {
        let postURL = `${this.baseURL}/${id}`;
        let response = this.httpClient.post(postURL, null, {responseType: 'blob'});

        var result = new Observable<string>(obs => {
            response.subscribe({
                next: value => {
                    var objectURL = URL.createObjectURL(value);
                    obs.next(objectURL);
                },
                error: err => obs.error(err),
                complete: () => obs.complete()
            });
        });

        return result;
    } 
}