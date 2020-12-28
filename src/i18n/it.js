import vuetifyTranslation from 'vuetify/es5/locale/it'

const myTranslation = {
    marker: {
        sick: 'Qualcuno potrebbe essere malato qui 😞',
        you: 'Questo sei tu!'
    },
    button: {
        refresh: 'Aggiorna mappa',
        facebook: 'Continua con Facebook',
        google: 'Continua con Google',
        continue: 'Continua',
        finish: 'Finire',
        translation: 'scegli la tua LINGUA',
        search: 'Cerca un posto',
        show: {
            official: 'Mostra i dati ufficiali',
            unofficial: 'Mostra dati non ufficiali',
        },
        yes: 'Sì',
        no: 'No',
        home: 'Casa'
    },
    login: {
        title: 'Benvenuto 😊',
        subtitle: 'Accedi per sbloccare le funzionalità complete della mappa'
    },
    questionnaire: {
        question: 'Domanda',
        question_tip: 'Rispondi a queste domande per ottenere l\'accesso completo'
    },
    question: {
        age: 'Quanti anni hai?',
        contact_covid19: 'Hai o hai avuto contatti con qualcuno con covid19 (coronavirus) negli ultimi giorni?',
        fever: 'Hai o hai avuto la febbre negli ultimi giorni?',
        tiredness: 'Ti senti sempre stanco negli ultimi giorni?',
        cough: 'Hai o hai avuto tosse negli ultimi giorni?',
        aches_and_pains: 'Hai avuto dolori negli ultimi giorni?',
        nasal_congestion: 'Hai o hai avuto congestione nasale negli ultimi giorni?',
        runny_nose: 'Hai o hai avuto il naso che cola negli ultimi giorni?',
        sore_throat: 'Hai o hai mal di gola negli ultimi giorni?'
    },
    cases: 'Totale casi',
    todayCases: 'Casi oggi',
    deaths: 'Morti',
    todayDeaths: 'Oggi morti',
    recovered: 'Recuperato',
    active: 'Attivo',
    critical: 'Critico',
    casesPerOneMillion: 'Casi per milione',
    deathsPerOneMillion: 'Morti per milione',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informazioni fornite da',
    updated_at: 'Aggiornato a',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
