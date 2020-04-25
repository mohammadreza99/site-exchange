import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../../data.service';
import { Service } from 'src/app/model/service';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public carouselItems: Array<any> = [{
    color: '#0292B7',
    img: 'assets/images/other/4.png',
    title: 'ثبت نام آزمون های بین المللی',
    list: ['آزمون تافل (TOEFL)', 'آزمون آیلتس (IELTS)', 'آزمون جی آر ای (GRE)', 'آزمون جی مت (GMAT)']
  }, {
    color: '#8C756A',
    img: 'assets/images/other/1.png',
    title: 'آسودگی و اطمینان در پرداخت های آنلاین',
    list: ['۸ سال سابقه در حوز پرداخت های آنلاین', 'مورد اعتماد بیش از ۵۰۰۰۰ کاربر ایرانی', 'دارای نماد اعتماد از وزارت صنعت ُ معدن و تجارت', 'برگزیده برترین سایت مالی در نهمین جشنواره وب ایران', 'تلاش مستمر در بهبود کیفیت و جلب رضایت مشتریان']
  }, {
    color: '#658EA9',
    img: 'assets/images/other/3.png',
    title: 'نقد کردن درآمدهای ارزی',
    list: [' درآمد اینترنتی خود از مشتریان خارجی را به راحتی نقد کنید', 'بالاترین نرخ تبدیل ارز به ریال', 'تسویه حساب کمتر از ۲۴ ساعت', 'امکان تبدیل تا سقف ۱ میلیون دلار']
  }, {
    color: '#E98973',
    img: 'assets/images/other/2.png',
    title: 'پرداخت هزینه تعیین وقت سفارت و مهاجرت',
    list: ['سفارت آمریکا ( MRV FEE)', 'سویس فی (SEVIS FEE)', 'سفارت کانادا (MY CIC)', 'اقامت دانمارک (DENMARK)', 'سفارت انگلیس (VISA4UK)']
  }, {
    color: '#626121',
    img: 'assets/images/other/5.png',
    title: 'مستر کارت Gift و Travel',
    list: ['خرید از وب سایت ها و فروشگاه های خارجی', 'عدم نیاز به حمل پول نقد در سفرهای خارجی', 'قابلیت خرید از pos فروشگاهی در کشور های خارجی', ' دسترسی به اینترنت بانک و گردش حساب']
  }
  ];
  public customerItems: Array<any> = ['assets/images/customers/1.png', 'assets/images/customers/2.png', 'assets/images/customers/3.png', 'assets/images/customers/4.png', 'assets/images/customers/5.png', 'assets/images/customers/6.png', 'assets/images/customers/7.png', 'assets/images/customers/8.png', 'assets/images/customers/9.png', 'assets/images/customers/10.png', 'assets/images/customers/11.png', 'assets/images/customers/12.png', 'assets/images/customers/13.png', 'assets/images/customers/14.png', 'assets/images/customers/15.png', 'assets/images/customers/16.png',]
  public carousel: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 1000,
    load: this.carouselItems.length,
    loop: true,
    point: {
      visible: true
    },
    interval: {
      timing: 4000,
      initialDelay: 1000,
    },
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  public customer: NguCarouselConfig = {
    grid: { xs: 3, sm: 5, md: 5, lg: 7, all: 0 },
    speed: 800,
    slide:1,
    load: 5,
    loop: true,
    point: {
      visible: true
    },
    interval: {
      timing: 2000,
      initialDelay: 1000,
    },
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  specialServices: Service[];
  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.specialServices = this.dataService.getSpecificServices();
  }

}