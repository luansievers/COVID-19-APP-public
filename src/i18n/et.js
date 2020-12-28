import vuetifyTranslation from 'vuetify/es5/locale/et'

const myTranslation = {
    marker: {
        sick: 'Keegi võib siin haige olla 😞',
        you: 'See oled sina!'
    },
    button: {
        refresh: 'Värskenda kaarti',
        facebook: 'Jätka Facebookiga',
        google: "Jätkake Google'iga",
        continue: 'Jätkake',
        finish: 'Lõpetama',
        translation: 'Valige keel',
        search: 'Otsige kohta',
        show: {
            official: 'Kuva ametlikud andmed',
            unofficial: 'Kuva mitteametlikud andmed',
        },
        yes: 'Jah',
        no: 'Ei',
        home: 'Kodu'
    },
    login: {
        title: 'Tere tulemast 😊',
        subtitle: 'Logi sisse kaardi täielike võimaluste avamiseks'
    },
    questionnaire: {
        question: 'Küsimus',
        question_tip: 'Täieliku juurdepääsu saamiseks vastake neile küsimustele'
    },
    question: {
        age: 'Mis on su vanus?',
        contact_covid19: 'Kas teil on olnud või on olnud kokkupuudet kellegagi covid19 (koroonaviirus) mõne viimase päeva jooksul?',
        fever: 'Kas teil on või on olnud viimastel päevadel palavikku?',
        tiredness: 'Kas tunnete end viimastel päevadel kogu aeg väsinuna?',
        cough: 'Kas teil on või on olnud viimastel päevadel köha?',
        aches_and_pains: 'Kas teil on või on olnud valusid viimastel päevadel?',
        nasal_congestion: 'Kas teil on või on olnud viimastel päevadel ninakinnisus?',
        runny_nose: 'Kas teil on või oli teil viimastel päevadel nohu?',
        sore_throat: 'Kas teil on või on olnud viimastel päevadel kurguvalu?'
    },
    cases: 'Juhtumeid kokku',
    todayCases: 'Tänapäeval juhtumid',
    deaths: 'Surmad',
    todayDeaths: 'Täna surmajuhtumid',
    recovered: 'Taastunud',
    active: 'Aktiivne',
    critical: 'Kriitiline',
    casesPerOneMillion: 'Haigusjuhte miljoni kohta',
    deathsPerOneMillion: 'Surnud miljoni kohta',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Andmed esitas',
    updated_at: 'Uuendatud kell',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
