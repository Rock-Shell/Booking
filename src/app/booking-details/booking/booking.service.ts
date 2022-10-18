import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookinDetails } from 'src/app/model/BookingDetails';

@Injectable({
  providedIn: 'root',
})
export class BookingService{
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'https://hotelmanagementsystem20221018114919.azurewebsites.net/api/';

  bookRoom(bookingDetails : BookinDetails) {
    //console.log(new Date(this.formModel.value.FromDate.toString()));
    let options = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    let newBookingDetails : BookinDetails = {
      CustomerFirstName : bookingDetails.CustomerFirstName.toString(),
      CustomerLastName : bookingDetails.CustomerLastName.toString(),
      NoOfPeople : parseInt(bookingDetails.NoOfPeople.toString()),
      EmailId : bookingDetails.EmailId.toString(),
      FromDate : new Date(bookingDetails.FromDate.toString()),
      ToDate : new Date(bookingDetails.ToDate.toString()),
      BookingDate : new Date(),
      PhoneNumber : bookingDetails.PhoneNumber.toString(),
      AlternatePhoneNumber : bookingDetails.AlternatePhoneNumber.toString(),
      HotelName : bookingDetails.HotelName.toString(),
      RoomType : bookingDetails.RoomType.toString()
    }
    console.log(newBookingDetails);
    return this.http.post(this.BaseURI + '/BookingDetails', newBookingDetails, options);
  }
}
