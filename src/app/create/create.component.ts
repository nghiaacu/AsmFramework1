import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule], //để sử dunhj form cần import FormsModule
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private http:HttpClient, // dùng để gửi http request
    private router:Router //điều hướng redirect
  ){}
  create(project: any): void { //project là dữ liệu người dùng nhập
    let apiUrl = 'http://localhost:3000/project'; //khai báo apiUrl
    this.http.post(apiUrl,project).subscribe(res =>{
      if(res){
        alert("Thêm mới thành công!!!")
        // điều hướng trang dnah sách
        this.router.navigate(['/list']);
      }
      
    })
  }
}
