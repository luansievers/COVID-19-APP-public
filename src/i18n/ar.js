import vuetifyTranslation from 'vuetify/es5/locale/ar'

const myTranslation = {
    marker: {
        sick: 'قد يكون هناك شخص مريض هنا 😞',
        you: 'هذا هو أنت!'
    },
    button: {
        refresh: 'تحديث الخريطة',
        facebook: 'تواصل مع Facebook',
        google: 'تابع مع Google',
        continue: 'استمر',
        finish: 'إنهاء',
        translation: 'اختر لغتك',
        search: 'ابحث عن مكان',
        show: {
            official: 'إظهار البيانات الرسمية',
            unofficial: 'إظهار بيانات غير رسمية',
        },
        yes: 'نعم',
        no: 'لا',
        home: 'الصفحة الرئيسية'
    },
    login: {
        title: 'أهلا بك 😊',
        subtitle: 'تسجيل الدخول لفتح قدرات الخريطة الكاملة'
    },
    questionnaire: {
        question: 'سؤال',
        question_tip: 'يرجى الإجابة على هذه الأسئلة للوصول الكامل'
    },
    question: {
        age: 'ما هو عمرك؟',
        contact_covid19: 'هل كان لديك أو كان لديك أي اتصال مع شخص مصاب بـ 19 (الفيروس التاجي) في الأيام القليلة الماضية؟',
        fever: 'هل عانيت أو عانيت من حمى في الأيام القليلة الماضية؟',
        tiredness: 'هل تشعر بالتعب طوال الوقت في الأيام القليلة الماضية؟',
        cough: 'هل عانيت أو عانيت من السعال في الأيام القليلة الماضية؟',
        aches_and_pains: 'هل عانيت أو عانيت من آلام في الأيام القليلة الماضية؟',
        nasal_congestion: 'هل عانيت من احتقان بالأنف في الأيام القليلة الماضية؟',
        runny_nose: 'هل كان لديك سيلان في الأيام الأخيرة؟',
        sore_throat: 'هل عانيت أو أصبت بالتهاب الحلق في الأيام القليلة الماضية؟'
    },
    cases: 'إجمالي الحالات',
    todayCases: 'حالات اليوم',
    deaths: 'الوفيات',
    todayDeaths: 'وفيات اليوم',
    recovered: 'تعافى',
    active: 'نشيط',
    critical: 'حرج',
    casesPerOneMillion: 'الحالات لكل مليون',
    deathsPerOneMillion: 'الوفيات لكل مليون',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'المعلومات المقدمة من',
    updated_at: 'تم التحديث في',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
