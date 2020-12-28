import vuetifyTranslation from 'vuetify/es5/locale/ro'

const myTranslation = {
    marker: {
        sick: 'Cineva poate fi bolnav aici 😞',
        you: 'Acesta esti tu!'
    },
    button: {
        refresh: 'Actualizați harta',
        facebook: 'Continuați cu Facebook',
        google: 'Continuați cu Google',
        continue: 'Continua',
        finish: 'finalizarea',
        translation: 'Alegeți-vă limba',
        search: 'Căutați un loc',
        show: {
            official: 'Afișează date oficiale',
            unofficial: 'Afișează date neoficiale',
        },
        yes: 'da',
        no: 'Nu',
        home: 'pagina principală'
    },
    login: {
        title: 'Bine ati venit 😊',
        subtitle: 'Autentificați-vă pentru a debloca funcțiile de hartă complete'
    },
    questionnaire: {
        question: 'Întrebare',
        question_tip: 'Vă rugăm să răspundeți la aceste întrebări pentru a avea acces complet'
    },
    question: {
        age: 'Ce vârstă ai?',
        contact_covid19: 'Aveți sau ați avut vreun contact cu cineva cu covid19 (coronavirus) în ultimele zile?',
        fever: 'Aveți sau aveți febră în ultimele zile?',
        tiredness: 'Vă simțiți obosit tot timpul în ultimele zile?',
        cough: 'Ai avut sau ai avut o tuse în ultimele zile?',
        aches_and_pains: 'Aveți sau aveți dureri în ultimele zile?',
        nasal_congestion: 'Aveți sau aveți congestie nazală în ultimele zile?',
        runny_nose: 'Ai sau ai avut nasul curgător în ultimele zile?',
        sore_throat: 'Aveți sau aveți o durere în gât în ​​ultimele zile?'
    },
    cases: 'Total cazuri',
    todayCases: 'Cazurile de astăzi',
    deaths: 'decese',
    todayDeaths: 'Astăzi morți',
    recovered: 'Recuperat',
    active: 'Activ',
    critical: 'Critic',
    casesPerOneMillion: 'Cazuri la un milion',
    deathsPerOneMillion: 'Decese la un milion',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informații furnizate de',
    updated_at: 'Actualizat la',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
