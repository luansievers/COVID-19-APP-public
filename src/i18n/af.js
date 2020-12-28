import vuetifyTranslation from 'vuetify/es5/locale/af'

const myTranslation = {
    marker: {
        sick: 'Iemand kan hier siek wees 😞',
        you: 'Dit is jy!'
    },
    button: {
        refresh: 'Verfris kaart',
        facebook: 'Gaan voort met Facebook',
        google: 'Gaan voort met Google',
        continue: 'Aanhou',
        finish: 'afwerking',
        translation: 'Kies u taal',
        search: "Soek 'n plek",
        show: {
            official: 'Toon amptelike data',
            unofficial: 'Toon nie-amptelike data',
        },
        yes: 'ja',
        no: 'geen',
        home: 'huis'
    },
    login: {
        title: 'Welkom 😊',
        subtitle: 'Meld aan om volledige kaartfunksies te ontsluit'
    },
    questionnaire: {
        question: 'vraag',
        question_tip: 'Beantwoord hierdie vrae om volledige toegang te verkry'
    },
    question: {
        age: 'Wat is jou ouderdom?',
        contact_covid19: 'Het u die afgelope paar dae kontak gehad met iemand met covid-19 (coronavirus)?',
        fever: 'Het u die laaste paar dae koors gehad of gehad?',
        tiredness: 'Voel u die laaste paar dae heeltyd moeg?',
        cough: 'Het u die laaste paar dae n hoes?',
        aches_and_pains: 'Het u die laaste paar dae pyn gehad?',
        nasal_congestion: 'Het u die laaste paar dae neusverstopping gehad of gehad?',
        runny_nose: "Het u die laaste paar dae 'n loopneus gehad of gehad?",
        sore_throat: "Het u die laaste paar dae 'n seer keel gehad?"
    },
    cases: 'Totale gevalle',
    todayCases: 'Vandag gevalle',
    deaths: 'sterftes',
    todayDeaths: 'Vandag sterftes',
    recovered: 'verhaal',
    active: 'aktiewe',
    critical: 'kritieke',
    casesPerOneMillion: 'Gevalle per miljoen',
    deathsPerOneMillion: 'Sterftes per miljoen',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Inligting verskaf deur',
    updated_at: 'Opgedateer op',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
