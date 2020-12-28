import vuetifyTranslation from 'vuetify/es5/locale/lt'

const myTranslation = {
    marker: {
        sick: 'Čia kažkas gali sirgti 😞',
        you: 'Tai esi tu!'
    },
    button: {
        refresh: 'Atnaujinti žemėlapį',
        facebook: 'Tęsti „Facebook“',
        google: 'Tęsti su „Google“',
        continue: 'Tęsti',
        finish: 'Baigti',
        translation: 'Pasirinkite kalbą',
        search: 'Ieškokite vietos',
        show: {
            official: 'Rodyti oficialius duomenis',
            unofficial: 'Rodyti neoficialius duomenis',
        },
        yes: 'Taip',
        no: 'Ne',
        home: 'Namai'
    },
    login: {
        title: 'Sveiki 😊',
        subtitle: 'Prisijunkite, kad atrakintumėte visas žemėlapio galimybes'
    },
    questionnaire: {
        question: 'Klausimas',
        question_tip: 'Atsakykite į šiuos klausimus, jei norite gauti visišką prieigą'
    },
    question: {
        age: 'Kiek tau metų?',
        contact_covid19: 'Ar per pastarąsias kelias dienas jūs turite kontaktų su covid19 (koronavirusu)?',
        fever: 'Ar pastarosiomis dienomis sirgote ar sirgote karščiavimu?',
        tiredness: 'Ar jaučiatės pavargęs per pastarąsias kelias dienas?',
        cough: 'Ar pastarosiomis dienomis sirgote ar sirgote kosuliu?',
        aches_and_pains: 'Ar pastarosiomis dienomis skauda ar buvo skausmai?',
        nasal_congestion: 'Ar pastarosiomis dienomis buvo ar buvo nosies užgulimas?',
        runny_nose: 'Ar pastarosiomis dienomis turite ar buvo sloga?',
        sore_throat: 'Ar pastarosiomis dienomis skauda gerklę ar skauda?'
    },
    cases: 'Iš viso atvejų',
    todayCases: 'Šiandien atvejai',
    deaths: 'Mirtys',
    todayDeaths: 'Šiandien mirtys',
    recovered: 'Atsigavo',
    active: 'Aktyvus',
    critical: 'Kritinis',
    casesPerOneMillion: 'Atvejų milijonui',
    deathsPerOneMillion: 'Mirčių milijonui',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informacija pateikta',
    updated_at: 'Atnaujinta',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
