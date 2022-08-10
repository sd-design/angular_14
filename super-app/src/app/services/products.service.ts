import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError, delay, Observable, retry, throwError } from "rxjs";
import { IProduct } from '../models/product';
import { Login } from '../models/login';
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})


export class ProductService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ){}

    /**
     getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products',{
            params: new HttpParams({
                fromObject: {limit: 7}
              })
        }).pipe(
            delay(2000) //Delay - stopping loading data
        )
    } 
    */
    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products',{
            params: new HttpParams({
                fromObject: {limit: 9}
              })
        }).pipe(
            retry(2),
            delay(2000),
            catchError(this.errorHandler.bind(this))
            )
        }

        userLogin(): Observable<Login[]> {
            return this.http.post<Login[]>('https://fakestoreapi.com/auth/login',{
                params: new HttpParams({
                    fromObject: {limit: 9}
                  })
            }).pipe(
                retry(2),
                delay(2000),
                catchError(this.errorHandler.bind(this))
                )
            }

    private errorHandler(error: HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }

}