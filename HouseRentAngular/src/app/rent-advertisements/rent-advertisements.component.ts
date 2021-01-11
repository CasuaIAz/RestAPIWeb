import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentAdvertisement, RentadvertisementService } from '../rentadvertisement.service';
import 'rxjs/Rx';

const API_URL: string = 'http://localhost:80';

@Component({
  selector: 'app-rent-advertisements',
  templateUrl: './rent-advertisements.component.html',
  styleUrls: ['./rent-advertisements.component.css']
})
export class RentAdvertisementsComponent implements OnInit {

	result: any;
	rentList = [];
	errorMessage: string;
	isLoading: boolean = true;

	constructor(private http: HttpClient) {

	}

	ngOnInit(): void {
		this.http.get(API_URL + '/HouseRent/public/api/advertisements')
		.subscribe(
			Response => {
				console.log(Response);
				this.result = Response;
				this.isLoading = false;
			},
			error => {
				this.errorMessage = <any>error;
				this.isLoading = false;
			}
		);

		/*function hideloader() {
			document.getElementById('loading').style.display = 'none';
		}*/
	}

}
