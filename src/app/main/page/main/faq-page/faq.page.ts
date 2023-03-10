import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'faq-page',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  faqs = [
    {
      q: `پیمنت 24 چه خدماتی را ارائه می دهد؟`,
      a: `پیمنت 24 خدماتی هم چون عرضه کارت های اعتباری ویزا ، گیفت کارت ها، نقد کردن در آمد ارزی؛ خرید بلیط هواپیما، پرداخت حق ثبت مقالات در نشریه های بین المللی، پرداخت هزینه های مربوط به امور مهاجرت، پرداخت هزینه ها و Application Fee های مربوط به دانشگاه ها، پرداخت هزینه های آزمون های بین المللی، پرداخت سایت هایی که درگاه پرداخت پی پال ، ویزا، وب مانی ، پرفکت مانی ، اسکریل و وسترن یونیون داشته باشند را با رعایت شرایط و قوانین مربوط به هر درگاه پرداخت و قوانین جاری کشور را در کوتاه ترین زمان ممکن انجام می دهد.`
    },
    {
      q: `ساعت کاری پیمنت 24 به چه صورت بوده و سفارشات تا چه زمانی پس از ثبت سفارش انجام می شوند؟`,
      a: `ساعت کاری دفتر مرکزی این مجموعه (دفتر شیراز) از ساعت 8:30 تا 12 شب می باشد و مابقی دفاتر از ساعت 9 الی 18 بعد از ظهر آمادگی ارائه خدمات به کاربران را دارند. کلیه سفارشات در کوتاهترین زمان ممکن ، کمتر از 1 الی 2 ساعت بعد از ثبت سفارش بررسی و در صورت نداشتن مشکل انجام می شود.`
    },
    {
      q: `چگونه می توانم به پیمنت 24 اعتماد کنم؟`,
      a: `پیمنت 24 دارای نماد اعتماد الکترونیکی دو ستاره بوده و بیش از هفت سال سابقه کار در زمینه پرداخت های ارزی و سیستم های مالی آنلاین را دارد. همچنین پیمنت 24 دارای بیشترین بازخورد مثبت ثبت شده در فضای مجازی می باشد.`
    },
    {
      q: `نحوه ایجاد سفارش و پرداخت آن به چه صورت می باشد؟`,
      a: `برای ایجاد سفارش ابتدا باید در سایت عضو شده باشید (لطفا این مورد را در نظر داشته باشید که با هر ایمیل و یا هر شماره تلفن همراه تنها 1 بار می توانید در سایت عضو شوید) ، پس از ثبت نام با ورود به ناحیه کاربری در بخش سفارشات (سفارش جدید) می توانید سفارش مورد نظرتان را ثبت نمایید. برای اطلاع از وضعیت سفارش خود هم می توانید از طریق پنل کاربری بخش "لیست سفارشات" از وضعیت سفارش خود مطلع شوید.`
    },
    {
      q: `در چه صورتی نیاز به ارسال مدارک برای انجام سفارش یا موارد دیگر می باشد؟`,
      a: `بطور کلی برای انجام تمامی سفارشات باید ایمیل و تلفن همراه تایید شده باشد اما برای تعدادی از سفارشات باید مدارک دیگر نیز ارسال شود که در صفحه ثبت سفارش قابل مشاهده می باشد. این مدارک تنها یکبار از شما اخذ می شود.`
    },
    {
      q: `شرایط نقد کردن به چه صورت می باشد؟`,
      a: `<ul>برای نقد کردن درآمد ارزی باید این نکته را در نظر داشته باشید که :
    <li>حداقل میزان دلار قابل نقد کردن 100 دلار می باشد.</li>
    <li>امکان نقد کردن مستفیم از سایتهای PTC وجود ندارد.</li>
    <li>جهت تسویه حساب باید کلیه مدارک هویتی شما تایید شده باشد.</li>
  </ul>`
    },
    {
      q: `کارمزد پی پال برای هر تراکنش چه مقدار می باشد؟ این کارمزد از چه کسی کسر می شود؟`,
      a: `کارمزد پی پال برای هر تراکنش بین 2.9 الی 5.2 درصد می باشد که از گیرنده کسر می شود.`
    },
    {
      q: `آیا برای پرداخت در سایت مورد نظر باید طبق نرخ اعلام شده در سایت ثبت سفارش کرد یا باید کارمزد پی پال را هم در نظر گرفت؟`,
      a: `خیر در این شرایط نیازی به در نظر گرفتن کارمزد پی پال نمی باشد و شما باید به همان میزانی که در سایت پرداختی اعلام شده است ثبت سفارش کنید. هر چند که باید در صورت وجود مالیات آن را هم به مبلغ نهایی پرداخت خود اضافه نمایید.`
    },
    {
      q: `شرایط افتتاح حساب پی پال به چه صورتی می باشد؟`,
      a: `<ul>هزینه افتتاح حساب پی پال در حال حاضر 499,000 تومان می باشد که در بازه زمانی 2 الی 3 روزه صورت می پذیرد و شامل موارد زیر می باشد:
    <li>افتتاح حساب پی پال وریفای شده به نام شخص شما و یا یکی از آشنایان شما که دارای پاسپورت باشد.</li>
    <li>اختصاص یک آدرس خارج از کشور ( امارات(</li>
    <li>اختصاص یک عدد ریموت دسکتاپ امارات</li>
    <li>صدور یک ویزا گیفت کارت فیزیکی یکساله برای وریفای حساب</li>
    <li>ارائه مدارک شامل یک قبض آب / برق از آدرس مورد نظر و یک اسکرین شات از ویزا کارت.</li>
  </ul>`
    },
    {
      q: `برای شارژ حساب وب مانی چگونه می توان اقدام کرد؟`,
      a: `برای شارژ حساب وب مانی باید ابتدا تمامی مدارکتان را ارسال کرده و سپس در بخش شارژ حساب وب مانی ثبت سفارش کنید و در بخش کیف پول شماره کیف پول دلاری که با حرف Z شروع می شود را ارسال نمایید.( لطفا از شماره کیف پول وارد شده اطمینان کامل داشته و سپس ثبت سفارش را به طور کامل انجام دهید. )`
    },
    {
      q: `کارمزد وب مانی برای انجام هر سفارش چه مقدار می باشد؟این مبلغ از چه کسی کسر می شود؟`,
      a: `کارمزد وب مانی 0.8% می باشد که از فرستنده کسر می شود.`
    },
    {
      q: `محدودیت حساب وب مانی به چه صورت می باشد؟`,
      a: `حساب وبمانی تازه افتتاح شده از نوع mini می باشد که شامل محدودیت دریافتی به صورت روزانه : 200 دلار ، هفتگی : 500 دلار و ماهانه : 1500 دلار می باشد. برای رفع این محدودیت با ارائه مدارک و ایجاد تنظیمات امنیتی در سایت وبمانی می توانید نسبت به ارتقا پلن خود اقدام نمایید.`
    },
    {
      q: `ویژگی کارت های TravelEZ به چه صورت می باشد؟`,
      a: `این کارتها از نوع گیفت یا هدیه (Gift) می باشند و مدت اعتبار آن ها تا یک سال پس از صدور کارت می باشد. هزینه صدور کارت در حال حاضر 15 دلار است که بسته به نیاز خود می توانید بین 10 تا 1000 دلار درخواست شارژ ثبت نمایید.`
    },
    {
      q: `آیا با استفاده از این کارتها می توانم از دستگاه ATM پول برداشت کنم؟`,
      a: `خیر. با استفاده از این کارتها تنها می توان در بیشتر سایت ها و درگاه های آنلاین با قابلیت پشتیبانی از کارت های Gift پرداخت آنلاین داشته و از دستگاه های pos خارج از کشور استفاده نمود.`
    },
    {
      q: `مدت زمان صدور کارت چه قدر می باشد؟`,
      a: `در صورتیکه مدارک مورد نیاز برای انجام سفارش تایید شده باشد در کمتر از 30 دقیقه پس از ثبت سفارش اسکن کارت برای شما ارسال خواهد شد.`
    },
    {
      q: `آیا با استفاده از این کارت ها می توانم در تمامی سایت هایی که درگاه پرداخت ویزا دارند پرداخت انجام دهم؟`,
      a: `این کارت ها در بیشتر درگاه های پرداخت ویزا/مسترکارت معتبر می باشد البته ممکن است برخی سایت ها بسته به سیاست های کاری خود از این کارت ها پشتیبانی نکنند.`
    },
    {
      q: `آیا امکان وریفای حساب های الکترونیکی مانند پی پال توسط این کارت امکان پذیر است یا خیر؟`,
      a: `بله ، شما میتوانید با این کارت ها حساب های الکترونیکی مانند حساب پی پال را وریفای کنید.`
    },
    {
      q: `آیا برای پرداخت در سایت ها کارمزدی از کارت کسر می شود؟`,
      a: `به ازاء خریدهای موفق زیر 10 دلار مبلغ 25 سنت و به ازاء خریدهای ناموفق 50 سنت از حساب شما کسر می گردد . ضمنا ممکن است برخی سایت ها طبق سیاست شان Hidden Fee یا کارمزد خاصی داشته باشند..`
    },
    {
      q: `آیا می توانم پرداخت های آنلاین خود را توسط ویزا کارت ها با آی پی ایران انجام دهم؟`,
      a: `خیر ، در صورتی که بخواهید با آی پی ایران پرداخت خود را انجام دهید ، پرداخت شما توسط درگاه مورد نظر رد شده و انجام نخواهد شد. البته در این حالت مشکلی برای کارت شما پیش نخواهد آمد بلکه فقط خرید شما در سایت مورد نظر انجام نمی شود. بنابراین همیشه از آی پی غیر از ایران برای انجام پرداخت های خود در اینترنت استفاده نمایید.`
    },
    {
      q: `مزایای انتقال وجه از طریق وسترن یونیون چیست؟`,
      a: `نکته برتر این شرکت نسبت به روش ارسال بانکی ، سرعت ارسال آن است. بدین صورت که به محض ارسال حواله از کشور مبدا ، فرد گیرنده می تواند مبلغ را با مراجعه به هر یک از دفاتر این شرکت در کشور مقصد ، حواله را دریافت کند. مزیت دیگر ارسال و دریافت حواله وسترن یونیون عدم نیاز به حساب بانکی است. بدین صورت که فرستنده فقط با داشتن اطلاعات پاسپورتی فرد گیرنده می تواند وجه را ارسال و گیرنده نیز با داشتن اصل پاسپورت می تواند مبلغ را دریافت کند.`
    },
    {
      q: `سفارشات مربوط به حواله وسترن تا چه زمانی انجام می شود؟`,
      a: `سفارشات مربوط به حواله وسترن یونیون همه روزه به غیر از روزهای تعطیل و جمعه انجام می شوند. در صورتي که سفارش شما قبل ازساعت 15:00 ثبت گردد طي چند ساعت کد امنيتي (MTCN) همراه با رسید پرداخت براي شما ارسال خواهد شد.`
    },
    {
      q: `برای سفارش حواله وسترن یونیون چه اطلاعاتی از گیرنده مورد نیاز است ؟`,
      a: `<ul>برای ارسال حواله از طریق وسترن یونیون به اطلاعات زیر نیاز می باشد :
    <li>نام و نام خانوادگی پاسپورتی دریافت کننده وجه</li>
    <li>کشور مقصد ( این نکته را در نظر داشته باشید که برای کشور امریکا باید علاوه بر کشور ، ایالت (State) و شهر (City) حتما قید شود.)</li>
    </ul>`
    },
    {
      q: `شرایط نقد کردن وسترن یونیون به چه صورت می باشد؟`,
      a: `برای نقد کردن حواله وسترن یونیون باید از طریق بخش تیکت ابتدا درخواست خود را اعلام کنید تا اطلاعات دریافت کننده کارگزار ما در امارات ، ترکیه یا عراق در اختیار شما قرار گیرد و بعد از اینکه مبلغ ارسال گردید شما باید کد MTCN و میزان مبلغ ارسالی و مشخصات کامل ارسال کننده و کشور ارسال کننده را از طریق همان تیکت اعلام نمایید. در صورت عدم بروز مشکل حواله ها بین 24 تا 48 ساعت کاری نقد و به حساب بانکی شما واریز می گردد.`
    },
    {
      q: `این کارتها صادره از کدام کشور بوده و چه مزیت هایی نسبت به کارتهای هدیه دارند؟`,
      a: `این کارت ها صادره از کشور تاجیکستان می باشند. به حساب بانکی متصل بوده و دارای کد سویفت جهت دریافت حواله های ارزی می باشند. علاوه بر این قابلیت تمدید مجدد کارت بعد از اتمام دوره وجود دارد.`
    },
    {
      q: `برای صدور کارت چه مدارکی مورد نیاز است؟`,
      a: `برای صدور این کارت ها اسکن پاسپورت تمام صفحع با وضوح بالا (حداقل 300 dpi ) مورد نیاز می باشد.( این نکته را در نظر داشته باشید که پاسپورت مورد نظر حداقل باید 6 ماه اعتبار داشته باشد. )`
    },
    {
      q: `حساب بانکی که بر روی کارت صادر می شود چه مزیتی دارد؟`,
      a: `بر روی کارت های اعتباری یک حساب ارزی دارای کد سویفت باز می شود که با داشتن این حساب شما می توانید علاوه بر شارژ کارت خود از طریق صرافی ، از هر نقطه دنیا به هر میزان حواله دریافت کرده و از طریق کارت خود آن را برداشت نمایید.`
    },
    {
      q: `چگونه میتوانم گردش حساب خود را چک کنم؟`,
      a: `این کارت ها دارای قابلیت اینترنت بانکینگ می باشد و شما میتوانید از طریق آن گردش حساب خود را چک نمایید.`
    },
    {
      q: `مدت زمان مورد نیاز برای شارژ کارت چقدر است؟`,
      a: `اگر بخواهید کارت خود را بواسطه ما شارژ نمایید کمتر از 48 ساعت پس از واریز هزینه و ثبت درخواست کارت شما شارژ می شود. لازم به ذکر است که شارژ کارت ها فقط در روزهای دوشنبه تا جمعه صورت می گیرد و روزهای شنبه و یکشنبه بدلیل تعطیلی بانک شارژ کارت قابل انجام نمی باشد.`
    },
    {
      q: `آیا میتوانم کارت خود را به حساب های الکترونیکی مانند پی پال متصل کنم؟`,
      a: `بله ، شما میتوانید کارت خود را به حساب های الکترونیکی مثل پی پال (فارغ از اینکه حساب در کدام کشور باز شده غیر از امریکا) متصل نمایید. همچنین شما میتوانید روزانه تا سقف ۵۰۰ دلار کارت خود را بواسطه موجودی پی پال شارژ نمایید و همچنین میتوانید بواسطه پی پال با کارت خود خرید انجام دهید.`
    },
    {
      q: `آیا توسط ویزا کارت بدون داشتن شارژ و با اتکا به مبلغ دیپازیت هلد شده نزد بانک میتوان برای اجاره (Rent) خانه و ماشین اقدام کرد؟`,
      a: `خیر ، برای اجاره خانه و یا ماشین کارت باید موجودی داشته باشد و میزان آن به میزان درخواست شرکت اجاره دهنده بستگی دارد . این مبلغ معمولا تا 1-2 ماه پس از تحویل ماشین یا خانه ای که در اجاره ی شماست توسط شرکت ارائه دهنده خدمات هلد می ماند.`
    },
    {
      q: `اگر رمز خودپرداز گم و یا فراموش شود آیا امکان گرفتن رمز یا تغییر رمز هست؟`,
      a: `خیر در صورت نیاز برای ارسال رمز جدید یا مالک کارت باید شخصا به بانک تاجیکستان مراجعه نماید یا کارت با رمز جدید صادر گردد.`
    },
    {
      q: `آیا برای پرداخت در سایت ها کارمزدی از کارت کسر می شود؟`,
      a: `از آنجایی که ارز پیش فرض کارت دلار می باشد لذا برای کلیه پرداخت های دلاری بانک هیچ گونه کارمزدی کسر نمی کند و فقط برای تبدیل به سایر ارزها کارمزدی حدودا 2 درصدری کسر می شود.`
    }
  ]
}
