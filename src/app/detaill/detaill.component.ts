import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaill',
  standalone: true,
  imports: [],
  templateUrl: './detaill.component.html',
  styleUrl: './detaill.component.css'
})
export class DetaillComponent {
  id: Number = 0;
  project : any ={};
  constructor(
    private route: ActivatedRoute,
    private nghiahd: HttpClient
  ) {
    // lay gia trị faram da truyền lên url
    this.id = this.route.snapshot.params['project'];
    //Gán gia trị param
  }
  ngOnInit(): void {
    // Khai báo apiUrl
    let apiUrl = 'http://localhost:3000/project/'+ this.id;
    
    // b2: gui http
    this.nghiahd.get(apiUrl).subscribe(res =>{
      this.project= res;
    })
  }
}
