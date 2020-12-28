import vuetifyTranslation from 'vuetify/es5/locale/de'

const myTranslation = {
    marker: {
        sick: 'Jemand könnte hier krank sein 😞',
        you: 'Das bist du!'
    },
    button: {
        refresh: 'Karte aktualisieren',
        facebook: 'Weiter mit Facebook',
        google: 'Fahren Sie mit Google fort',
        continue: 'Fortsetzen',
        finish: 'Fertig',
        translation: 'Wähle deine Sprache',
        search: 'Suche einen Ort',
        show: {
            official: 'Offizielle Daten anzeigen',
            unofficial: 'Inoffizielle Daten anzeigen',
        },
        yes: 'Ja',
        no: 'Nein',
        home: 'Zuhause'
    },
    login: {
        title: 'Herzlich willkommen 😊',
        subtitle: 'Melden Sie sich an, um alle Kartenfunktionen freizuschalten'
    },
    questionnaire: {
        question: 'Frage',
        question_tip: 'Bitte beantworten Sie diese Fragen, um vollen Zugriff zu erhalten'
    },
    question: {
        age: 'Wie alt bist du?',
        contact_covid19: 'Haben oder hatten Sie in den letzten Tagen Kontakt zu jemandem mit covid19 (Coronavirus)?',
        fever: 'Haben oder hatten Sie in den letzten Tagen Fieber?',
        tiredness: 'Fühlen Sie sich in den letzten Tagen ständig müde?',
        cough: 'Haben oder hatten Sie in den letzten Tagen Husten?',
        aches_and_pains: 'Haben oder hatten Sie in den letzten Tagen Schmerzen?',
        nasal_congestion: 'Haben oder hatten Sie in den letzten Tagen eine verstopfte Nase?',
        runny_nose: 'Haben oder hatten Sie in den letzten Tagen eine laufende Nase?',
        sore_throat: 'Haben oder hatten Sie in den letzten Tagen Halsschmerzen?'
    },
    cases: 'Gesamtzahl der Fälle',
    todayCases: 'Heute Fälle',
    deaths: 'Todesfälle',
    todayDeaths: 'Heute Todesfälle',
    recovered: 'Wiederhergestellt',
    active: 'Aktiv',
    critical: 'Kritisch',
    casesPerOneMillion: 'Fälle pro eine Million',
    deathsPerOneMillion: 'Todesfälle pro eine Million',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informationen bereitgestellt von',
    updated_at: 'Aktualisiert am',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
