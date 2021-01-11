import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RentAdvertisement {
	id: Number,
	adName: String,
	created_at: Date,
	description: Text,
	price: Number
}

interface ResponseRentAdvertisement {
	results: RentAdvertisement[];
}

const API_URL: string = 'https://localhost:80';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})
export class RentadvertisementService {
	
}
