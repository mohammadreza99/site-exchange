import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'add-funds-page',
  templateUrl: './add-funds.page.html',
  styleUrls: ['./add-funds.page.scss']
})
export class AddFundsPage implements OnInit {
  warnings = ['چنانچه از طریق حواله های بانکی (کارت به کارت یا واریز به حساب) اقدام به افزایش موجودی حساب کاربری خود نمایید، پس از واریز می بایست حتما مشخصات مالی را جهت بررسی به ثبت برسانید.', 'توجه داشته باشید که امور مالی در ساعات و روزهای اداری (شنبه تا چهارشنبه از 8:30 صبح تا 17 و روز های پنج شنبه از 8:30 صبح تا 13:30)کمتر از 1 ساعت پس از ثبت مشخصات مالی انجام می گردد.', 'در موارد بروز خطا در پرداخت های آنلاین، چنانچه تا نیم ساعت آینده وجه واریزی به حساب بانکی تان مسترد نگردید، لطفا مراتب را به همراه رسید پرداخت پس از گذشت 72 ساعت توسط ارسال تیکت جدید در منوی پشتیبانی اعلام و ارسال نمایید.']
  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
