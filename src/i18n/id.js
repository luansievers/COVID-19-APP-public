import vuetifyTranslation from 'vuetify/es5/locale/id'

const myTranslation = {
    marker: {
        sick: 'Seseorang mungkin sakit di sini 😞',
        you: 'Ini adalah Anda!'
    },
    button: {
        refresh: 'Segarkan peta',
        facebook: 'Lanjutkan dengan Facebook',
        google: 'Lanjutkan dengan Google',
        continue: 'Terus',
        finish: 'Selesai',
        translation: 'Pilih bahasamu',
        search: 'Cari tempat',
        show: {
            official: 'Tampilkan data resmi',
            unofficial: 'Tampilkan data tidak resmi',
        },
        yes: 'Iya',
        no: 'Tidak',
        home: 'Rumah'
    },
    login: {
        title: 'Selamat datang 😊',
        subtitle: 'Masuk untuk membuka kunci kemampuan peta lengkap'
    },
    questionnaire: {
        question: 'Pertanyaan',
        question_tip: 'Jawab pertanyaan ini untuk mendapatkan akses penuh'
    },
    question: {
        age: 'Berapa umurmu?',
        contact_covid19: 'Apakah Anda memiliki atau pernah melakukan kontak dengan seseorang dengan covid19 (coronavirus) dalam beberapa hari terakhir?',
        fever: 'Apakah Anda mengalami demam dalam beberapa hari terakhir?',
        tiredness: 'Apakah Anda merasa lelah sepanjang waktu dalam beberapa hari terakhir?',
        cough: 'Apakah Anda menderita batuk dalam beberapa hari terakhir?',
        aches_and_pains: 'Apakah Anda menderita atau merasa sakit dalam beberapa hari terakhir?',
        nasal_congestion: 'Apakah Anda mengalami hidung tersumbat dalam beberapa hari terakhir?',
        runny_nose: 'Apakah Anda menderita pilek dalam beberapa hari terakhir?',
        sore_throat: 'Apakah Anda menderita sakit tenggorokan dalam beberapa hari terakhir?'
    },
    cases: 'Total kasus',
    todayCases: 'Kasus hari ini',
    deaths: 'Kematian',
    todayDeaths: 'Kematian hari ini',
    recovered: 'Dipulihkan',
    active: 'Aktif',
    critical: 'Kritis',
    casesPerOneMillion: 'Kasing per satu juta',
    deathsPerOneMillion: 'Kematian per satu juta',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informasi disediakan oleh',
    updated_at: 'Diperbarui pada',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
