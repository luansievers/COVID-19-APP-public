import vuetifyTranslation from 'vuetify/es5/locale/sv'

const myTranslation = {
    marker: {
        sick: 'Någon kan vara sjuk här 😞',
        you: 'Detta är du!'
    },
    button: {
        refresh: 'Uppdatera karta',
        facebook: 'Fortsätt med Facebook',
        google: 'Fortsätt med Google',
        continue: 'Fortsätta',
        finish: 'Avsluta',
        translation: 'Välj ditt språk',
        search: 'Sök efter en plats',
        show: {
            official: 'Visa officiella data',
            unofficial: 'Visa inofficiella data',
        },
        yes: 'Ja',
        no: 'Nej',
        home: 'Startsida'
    },
    login: {
        title: 'Välkommen 😊',
        subtitle: 'Logga in för att låsa upp fullständiga kartfunktioner'
    },
    questionnaire: {
        question: 'Fråga',
        question_tip: 'Svara på dessa frågor för att få full tillgång'
    },
    question: {
        age: 'Hur gammal är du?',
        contact_covid19: 'Har du eller har haft någon kontakt med någon med covid19 (coronavirus) de senaste dagarna?',
        fever: 'Har du eller har haft någon feber de senaste dagarna?',
        tiredness: 'Känner du dig trött hela tiden de senaste dagarna?',
        cough: 'Har eller har du haft hosta de senaste dagarna?',
        aches_and_pains: 'Har du eller har haft smärta de senaste dagarna?',
        nasal_congestion: 'Har du eller haft nästäppa de senaste dagarna?',
        runny_nose: 'Har du eller har en rinnande näsa de senaste dagarna?',
        sore_throat: 'Har du eller haft ont i halsen de senaste dagarna?'
    },
    cases: 'Totalt fall',
    todayCases: 'Idag fall',
    deaths: 'dödsfall',
    todayDeaths: 'Idag dödsfall',
    recovered: 'återvunna',
    active: 'Aktiva',
    critical: 'Kritisk',
    casesPerOneMillion: 'Fall per en miljon',
    deathsPerOneMillion: 'Dödsfall per en miljon',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Information tillhandahållen av',
    updated_at: 'Uppdaterad kl',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
