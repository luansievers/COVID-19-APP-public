import vuetifyTranslation from 'vuetify/es5/locale/fa'

const myTranslation = {
    marker: {
        sick: 'ممکن است کسی در اینجا بیمار باشد 😞',
        you: 'این تویی!'
    },
    button: {
        refresh: 'تازه کردن نقشه',
        facebook: 'در ادامه با فیس بوک همراه باشید',
        google: 'با Google ادامه دهید',
        continue: 'ادامه هید',
        finish: 'پایان',
        translation: 'زبان خود را انتخاب کنید',
        search: 'جستجوی مکانی',
        show: {
            official: 'نمایش داده های رسمی',
            unofficial: 'نمایش داده های غیررسمی',
        },
        yes: 'آره',
        no: 'نه',
        home: 'خانه'
    },
    login: {
        title: 'خوش آمدی 😊',
        subtitle: 'ورود به سیستم برای باز کردن قابلیت های کامل نقشه'
    },
    questionnaire: {
        question: 'سوال',
        question_tip: 'لطفاً برای دسترسی کامل به این سؤالات پاسخ دهید'
    },
    question: {
        age: 'سن شما چیست؟',
        contact_covid19: 'آیا در چند روز گذشته با شخصی با covid19 (coronavirus) با کسی ارتباط دارید یا ارتباطی دارید؟',
        fever: 'در چند روز گذشته تب داشتید یا تب داشتید؟',
        tiredness: 'آیا در چند روز گذشته تمام وقت احساس خستگی می کنید؟',
        cough: 'آیا در چند روز گذشته سرفه دارید یا دارید؟',
        aches_and_pains: 'آیا در چند روز اخیر دردهایی دارید یا دارید؟',
        nasal_congestion: 'آیا شما در چند روز گذشته گرفتگی بینی دارید یا دارید؟',
        runny_nose: 'آیا در چند روز گذشته بینی آبریزش دارید یا دارید؟',
        sore_throat: 'آیا در چند روز گذشته گلو درد دارید یا دارید؟'
    },
    cases: 'کل موارد',
    todayCases: 'موارد امروز',
    deaths: 'مرگ',
    todayDeaths: 'امروز مرگ',
    recovered: 'بهبود یافت',
    active: 'فعال',
    critical: 'بحرانی',
    casesPerOneMillion: 'موارد در هر یک میلیون',
    deathsPerOneMillion: 'مرگ و میر در هر میلیون',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'اطلاعات ارائه شده توسط',
    updated_at: 'به روز شده در',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
