import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as jsPDF from 'jspdf'

@Injectable({
  providedIn: 'root'
})
export class ApiManagementService {
  countries: Array<any>;
  constructor(private _http: HttpClient) { }

  getCountries(): void {
    this._http.get<any>("https://restcountries.eu/rest/v2/all").subscribe(
      data => {this.countries = data; console.log(data)},
      (err: HttpErrorResponse) => {
        this.errorHandler(err);
      }
    );
  }

  /*downloadCV() {
    this._http.get<any>(`${environment.SERVER_BASE_URL}download/cv`)
    .subscribe(
      success => {
        console.log(success.text);
        /*const downloadLink = document.createElement("a");
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.setAttribute("href", window.URL.createObjectURL(file));
        downloadLink.setAttribute("download", 'cv.pdf');
        downloadLink.click();
        document.body.removeChild(downloadLink); // remove the element*/

  errorHandler(err: HttpErrorResponse) {
		if (err.error instanceof Error) {
			// Error del lado del cliente
			console.log("An error occurred:", err.error.message);
		} else {
			// The backend returned an unsuccessful response code.
      // Error del lado del backend
      /*var doc = new jsPDF()
      doc.text(err.error.text, 10, 10)
      doc.save('cv.pdf')*/
			console.log(`${err.error.text}`);
		}
	}
}
