import vuetifyTranslation from 'vuetify/es5/locale/no'

const myTranslation = {
    marker: {
        sick: 'Noen kan være syke her 😞',
        you: 'Dette er deg!'
    },
    button: {
        refresh: 'Oppdater kart',
        facebook: 'Fortsett med Facebook',
        google: 'Fortsett med Google',
        continue: 'Fortsette',
        finish: 'Bli ferdig',
        translation: 'Velg ditt språk',
        search: 'Søk etter et sted',
        show: {
            official: 'Vis offisielle data',
            unofficial: 'Vis uoffisielle data',
        },
        yes: 'Ja',
        no: 'Nei',
        home: 'Hjem'
    },
    login: {
        title: 'Velkommen 😊',
        subtitle: 'Logg inn for å låse opp full kartfunksjoner'
    },
    questionnaire: {
        question: 'Spørsmål',
        question_tip: 'Svar på disse spørsmålene for å få full tilgang'
    },
    question: {
        age: 'Hvor gammel er du?',
        contact_covid19: 'Har du eller har hatt noen kontakt med noen med covid19 (coronavirus) de siste dagene?',
        fever: 'Har du eller har hatt feber de siste dagene?',
        tiredness: 'Føler du deg sliten hele tiden de siste dagene?',
        cough: 'Har du hatt eller hatt en hoste de siste dagene?',
        aches_and_pains: 'Har du eller har hatt smerter de siste dagene?',
        nasal_congestion: 'Har du eller hatt nesetetthet de siste dagene?',
        runny_nose: 'Har du eller har hatt en rennende nese de siste dagene?',
        sore_throat: 'Har du eller har vondt i halsen de siste dagene?'
    },
    cases: 'Totalsaker',
    todayCases: 'I dag saker',
    deaths: 'dødsfall',
    todayDeaths: 'I dag dødsfall',
    recovered: 'Gjenvunnet',
    active: 'Aktiv',
    critical: 'Kritisk',
    casesPerOneMillion: 'Saker per million',
    deathsPerOneMillion: 'Dødsfall per million',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informasjon gitt av',
    updated_at: 'Oppdatert kl',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
