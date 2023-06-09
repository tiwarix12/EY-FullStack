import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-form';
  constructor (
    private matIconRegistry: MatIconRegistry,
    private http: HttpClient,
    private domSanitizer: DomSanitizer) {
          this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    }

    myData: any;

    ngOnInit(): void {
        this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
            const countries = [];
            for (let i = 0; i < resp.length; ++i) {
                const country = resp[i];
                countries.push({ text: country.text, value: country.value });
            }
            this.myData = countries;
        });
    }
}

