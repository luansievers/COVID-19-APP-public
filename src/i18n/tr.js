import vuetifyTranslation from 'vuetify/es5/locale/tr'

const myTranslation = {
    marker: {
        sick: 'Burada biri hasta olabilir 😞',
        you: 'Bu sensin!'
    },
    button: {
        refresh: 'Haritayı yenile',
        facebook: 'Facebook ile devam',
        google: 'Google ile devam',
        continue: 'Devam et',
        finish: 'Bitiş',
        translation: 'Dilinizi seçin',
        search: 'Bir yer arayın',
        show: {
            official: 'Resmi verileri göster',
            unofficial: 'Resmi olmayan verileri göster',
        },
        yes: 'Evet',
        no: 'Hayır',
        home: 'Başlangıç ​​sayfası'
    },
    login: {
        title: 'Hoşgeldiniz 😊',
        subtitle: 'Tam harita özelliklerinin kilidini açmak için giriş yapın'
    },
    questionnaire: {
        question: 'Soru',
        question_tip: 'Tam erişim için lütfen bu soruları yanıtlayıns'
    },
    question: {
        age: 'Yaşınız nedir?',
        contact_covid19: "Son birkaç gün içinde covid19'lu (koronavirüs) biriyle temasınız oldu mu?",
        fever: 'Son birkaç gün içinde ateşiniz oldu mu veya hiç oldu mu?',
        tiredness: 'Son birkaç günde sürekli yorgun mu hissediyorsunuz?',
        cough: 'Son birkaç gündür öksürük geçirdiniz mi?',
        aches_and_pains: 'Son birkaç günde ağrılarınız oldu mu?',
        nasal_congestion: 'Son birkaç gün içinde burun tıkanıklığınız var mı veya var mı?',
        runny_nose: 'Son birkaç gün içinde burun akıntısı var mı veya var mı?',
        sore_throat: 'Son birkaç gün içinde boğaz ağrınız var mı veya var mı?'
    },
    cases: 'Toplam dava sayısı',
    todayCases: 'Bugünkü vakalar',
    deaths: 'Ölümler',
    todayDeaths: 'Bugün ölümler',
    recovered: 'Kurtarılan',
    active: 'Aktif',
    critical: 'kritik',
    casesPerOneMillion: 'Bir milyonda vaka',
    deathsPerOneMillion: 'Bir milyon başına ölüm',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Tarafından sağlanan bilgiler',
    updated_at: 'Güncelleme tarihi:',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
