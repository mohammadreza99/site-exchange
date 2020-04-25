import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  financialWarnings = [
    ` چنانچه تسویه به واسطه ی نقد کردن درآمد ارزی صورت گردد برای تسویه می بایست کلیه ی مدارک
  هویتی(اسکن پشت و روی کارت ملی، تلفن ثابت، کدپستی) تایید گردد.`,
    `در صورتی که کلیه ی مدارک هویتی شما تایید شده باشد جهت تسویه ارائه ی شماره ی شبای حساب
بانکی به نام خود کافی است.`,
    `چنانچه مدارک هویتی شما تایید نگردیده باشد تسویه حساب تنها به واسطه واریز به کارتی که پرداخت
توسط آن در سایت صورت گرفته است امکان پذیر است.بدین منظور ارائه شماره ی کارت واریزی و شماره ی شبای مربوط
به کارت واریزی و نام واریز کننده جهت تسویه الزامی است`,
    `شماره ی شبا را می توانید با ارائه ی شماره ی حساب در وبسایت بانک مورد نظرتان دریافت نمایید.`,
    `توجه داشته باشید که تسویه حساب به واسطه ی حواله ی بانکی پایا انجام می گردد که پس از اعلام
تسویه تا نشستن وجه مورد نظر به حساب بانکی تان زمان بر می باشد.این مدت زمان بر اساس سیکل تسویه ی پایا
  (تعیین شده توسط بانک مرکزی) تعیین می گردد`,
  ]
  documentsWarnings = [
    `برای تایید کد ملی ،لطفا اسکن و یا عکس با کیفیت پشت و روی کارت ملی خود را آپلود نمایید.`,
    `در صورت عدم ارائه کارت ملی میتوانید اسکن و یا عکس با کیفیت صفحه اول شناسنامه +مدرک شناسایی
                    معتبر دیگر(گواهینامه،کارت پایان خدمت و یا دفترچه بیمه)آپلود نمایید.`,
    `تصاویر ارسالی شما باید وضوح و کیفیت مناسبی داشته باشد و حجم مدارک ارسالی باید حداکثر 1مگابایت
  و حداقل 600 کیلوبایت باشد.`,
  ]
}