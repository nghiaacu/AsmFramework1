import { Component } from '@angular/core'; //  nhúng thư viện
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router'; //  nhúng thư viện


@Component({
  selector: 'app-root', //meta-data
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//export class tên Component
export class AppComponent {
  title = 'wd18327';
  email = 'nghiahdph39065@fpt.edu.vn';

  infor = {
    name: 'nghiahdph39065',
    email: 'nghiahdph39065@fpt.edu.vn',
    phone: '03987621***',
    address: 'Ha Noi',
  };
  
  name ='ngia';
}