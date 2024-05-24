import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  id: string = '';
  oldProject : any ={};
  apiUrl: string = 'http://localhost:3000/project';
  constructor(
    private activeRoute: ActivatedRoute, //
    private nghiahd: HttpClient,
    private router:Router //điều hướng redirect
  ) {
    // b1: lay gia trị faram da truyền lên url
    this.id = this.activeRoute.snapshot.params['project'];
    //Gán gia trị param
    // b2: gui http
    this.nghiahd.get(this.apiUrl + '/' + this.id).subscribe(res =>{
      this.oldProject= res;      
    })
  }
    
  onEdit(project: any): void { //project là dữ liệu người dùng nhập
     //gửi http request update
    this.nghiahd.put(this.apiUrl + '/' + this.id, project).subscribe(res =>{
      if(res){
        alert("Cập nhật thành công!!!")
        // điều hướng trang dnah sách
        this.router.navigate(['/list']);
      }
      
    })
  }
}
