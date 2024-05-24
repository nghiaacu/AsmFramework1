import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { error, log } from 'console';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listProjects: any = [];
 
  // tạo 1 đối tượng dựa trên HttpClient
  constructor(private nghiahd:HttpClient) {}
  ngOnInit():void{
    // Khai báo apiUrl
    let apiUrl ='http://localhost:3000/project'
    // gửi request lên json server
    // this.HttpClient.method(apiUrl).subscribe( res => {})
    this.nghiahd.get(apiUrl).subscribe( res => { //res là dư liệu json-server
      this.listProjects = res; //gán dữ liệu json-server trả về
    })
  }
  
  delete(id: any): void {
    let apiUrl = 'http://localhost:3000/project/'+id;
    if (confirm('Bạn có muốn xóa không ?')) {           
      this.nghiahd.delete(apiUrl).subscribe( res =>{
          this.ngOnInit();         
        });   
    }
  }
}
