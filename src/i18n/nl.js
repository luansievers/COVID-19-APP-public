import vuetifyTranslation from 'vuetify/es5/locale/nl'

const myTranslation = {
    marker: {
        sick: 'Mogelijk is hier iemand ziek 😞',
        you: 'Dit ben jij!'
    },
    button: {
        refresh: 'Kaart vernieuwen',
        facebook: 'Ga verder met Facebook',
        google: 'Ga verder met Google',
        continue: 'Doorgaan met',
        finish: 'Af hebben',
        translation: 'Kies je taal',
        search: 'Zoek een plaats',
        show: {
            official: 'Toon officiële gegevens',
            unofficial: 'Toon niet-officiële gegevens',
        },
        yes: 'Ja',
        no: 'Nee',
        home: 'Huis'
    },
    login: {
        title: 'Welkom 😊',
        subtitle: 'Log in om volledige kaartmogelijkheden te ontgrendelen'
    },
    questionnaire: {
        question: 'Vraag',
        question_tip: 'Beantwoord deze vragen om volledige toegang te krijgen'
    },
    question: {
        age: 'Wat is jouw leeftijd?',
        contact_covid19: 'Heeft u de afgelopen dagen contact met iemand met covid19 (coronavirus)?',
        fever: 'Heeft of heeft u de afgelopen dagen koorts gehad?',
        tiredness: 'Voel je je de afgelopen dagen de hele tijd moe?',
        cough: 'Heeft u de afgelopen dagen hoest gehad of gehad?',
        aches_and_pains: 'Heeft of heeft u de afgelopen dagen pijn gehad?',
        nasal_congestion: 'Heeft of heeft u de afgelopen dagen een verstopte neus gehad?',
        runny_nose: 'Heeft u de afgelopen dagen een loopneus of heeft u die gehad?',
        sore_throat: 'Hebt u of heeft u de afgelopen dagen een zere keel gehad?'
    },
    cases: 'Totaal gevallen',
    todayCases: 'Gevallen van vandaag',
    deaths: 'Sterfgevallen',
    todayDeaths: 'Vandaag sterfgevallen',
    recovered: 'Hersteld',
    active: 'Actief',
    critical: 'Kritiek',
    casesPerOneMillion: 'Gevallen per miljoen',
    deathsPerOneMillion: 'Sterfgevallen per miljoen',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informatie verstrekt door',
    updated_at: 'Bijgewerkt op',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
