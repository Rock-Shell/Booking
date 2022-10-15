import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import {
  FormGroup,
  FormControl,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';
import { BookinDetails } from 'src/app/model/BookingDetails';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  newBooking
  constructor(public service: BookingService) {}

  ngOnInit() {}

  bookRoom(formValues) {
    let bookingDetails = {
      CustomerFirstName: formValues.CustomerFirstName,
      CustomerLastName: formValues.CustomerLastName,
      NoOfPeople: formValues.NoOfPeople,
      EmailId: formValues.EmailId,
      FromDate: formValues.FromDate,
      ToDate: formValues.ToDate,
      BookingDate: new Date(),
      PhoneNumber: formValues.PhoneNumber,
      AlternatePhoneNumber: formValues.AlternatePhoneNumber
    }
    this.newBooking = bookingDetails as BookinDetails
    console.log(this.newBooking)
    this.service.bookRoom(this.newBooking).subscribe(()=>{
      window.location.reload();
    })
  }
}
