import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponseLogin } from '../services/auth/response-login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      username: [null],
      password: [null],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    let payload = this.form.value;
    /*
      payload format = {
        username: '',
        password: '',
      }
    */
    this.authService.login(payload).subscribe({
      next: (response: ResponseLogin) => {
        this.router.navigate(['product']);
      },
      error: (err) => {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      },
    });
  }
}
