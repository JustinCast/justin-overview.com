import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-my-love",
  templateUrl: "./my-love.component.html",
  styleUrls: ["./my-love.component.scss"]
})
export class MyLoveComponent implements OnInit {
  constructor(private _router: Router, private _snackbar: MatSnackBar) {}

  ngOnInit() {
    var countDownDate = new Date("June 05, 2019").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML =
        days + " días | " + hours + " horas | " + minutes + " minutos | " + seconds + " segundos";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("acc").hidden = false;
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    
  }

  checkDate(date: any) {
    if(date === '2019-02-15')
      this._router.navigate(['/love'])
    else
      this._snackbar.open('Fecha incorrecta mi amor', "Ay :'(", {duration: 2000});
  }
}
