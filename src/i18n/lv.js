import vuetifyTranslation from 'vuetify/es5/locale/lv'

const myTranslation = {
    marker: {
        sick: 'Kāds te var būt slims 😞',
        you: 'Tas esi tu!'
    },
    button: {
        refresh: 'Atsvaidzināt karti',
        facebook: 'Turpiniet ar Facebook',
        google: 'Turpiniet ar Google',
        continue: 'Turpināt',
        finish: 'Pabeidz',
        translation: 'Izvēlieties valodu',
        search: 'Meklējiet vietu',
        show: {
            official: 'Rādīt oficiālos datus',
            unofficial: 'Rādīt neoficiālus datus',
        },
        yes: 'Jā',
        no: 'Nē',
        home: 'Mājas'
    },
    login: {
        title: 'Laipni lūdzam 😊',
        subtitle: 'Piesakieties, lai atbloķētu visas kartes iespējas'
    },
    questionnaire: {
        question: 'Jautājums',
        question_tip: 'Lūdzu, atbildiet uz šiem jautājumiem, lai iegūtu pilnīgu piekļuvi'
    },
    question: {
        age: 'Kāds ir jūsu vecums?',
        contact_covid19: 'Vai jums pēdējās dienās ir bijis vai ir bijis kāds kontakts ar kādu ar covid19 (koronavīrusu)?',
        fever: 'Vai jums ir vai bija drudzis pēdējās dienās?',
        tiredness: 'Vai jūs jūtaties noguris visu laiku pēdējās dienās?',
        cough: 'Vai jums ir vai bija klepus pēdējās dienās?',
        aches_and_pains: 'Vai jums ir vai ir bijušas sāpes pēdējās dienās?',
        nasal_congestion: 'Vai pēdējās dienās Jums ir vai ir bijis deguna nosprostojums?',
        runny_nose: 'Vai jums pēdējās dienās ir bijis vai ir iesnas?',
        sore_throat: 'Vai jums pēdējās dienās ir bijis vai ir iekaisis kakls?'
    },
    cases: 'Kopā gadījumi',
    todayCases: 'Mūsdienās gadījumi',
    deaths: 'Nāves gadījumi',
    todayDeaths: 'Šodien nāves gadījumi',
    recovered: 'Atgūta',
    active: 'Aktīvs',
    critical: 'Kritisks',
    casesPerOneMillion: 'Gadījumi uz vienu miljonu',
    deathsPerOneMillion: 'Nāves gadījumi uz vienu miljonu',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informācija, ko sniedza',
    updated_at: 'Atjaunināts plkst',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
