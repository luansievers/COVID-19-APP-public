import vuetifyTranslation from 'vuetify/es5/locale/cs'

const myTranslation = {
    marker: {
        sick: 'Někdo tady může být nemocný 😞',
        you: 'To jsi ty!'
    },
    button: {
        refresh: 'Aktualizovat mapu',
        facebook: 'Pokračujte na Facebooku',
        google: 'Pokračujte s Googlem',
        continue: 'Pokračovat',
        finish: 'Dokončit',
        translation: 'Vyberte si jazyk',
        search: 'Vyhledejte místo',
        show: {
            official: 'Zobrazit oficiální údaje',
            unofficial: 'Zobrazit neoficiální data',
        },
        yes: 'Ano',
        no: 'Ne',
        home: 'Domov'
    },
    login: {
        title: 'Vítejte 😊',
        subtitle: 'Přihlaste se a odemkněte plné možnosti map'
    },
    questionnaire: {
        question: 'Otázka',
        question_tip: 'Chcete-li získat plný přístup, odpovězte na tyto otázky'
    },
    question: {
        age: 'Jaký je váš věk?',
        contact_covid19: 'Měli jste v posledních několika dnech kontakt s někým s covid19 (koronavirus)?',
        fever: 'Máte nebo jste v posledních několika dnech měli horečku?',
        tiredness: 'Cítíte se unaveni po celou dobu v posledních několika dnech?',
        cough: 'Máte nebo jste kašel v posledních několika dnech?',
        aches_and_pains: 'Máte nebo jste měl bolesti v posledních několika dnech?',
        nasal_congestion: 'Máte nebo jste měli v posledních několika dnech nosní ucpání?',
        runny_nose: 'Máte nebo jste měli v posledních několika dnech rýmu?',
        sore_throat: 'Máte nebo jste měl v posledních dnech bolesti v krku?'
    },
    cases: 'Celkový počet případů',
    todayCases: 'Dnešní případy',
    deaths: 'Smrt',
    todayDeaths: 'Dnes smrt',
    recovered: 'Obnoveno',
    active: 'Aktivní',
    critical: 'Kritický',
    casesPerOneMillion: 'Případy na jeden milion',
    deathsPerOneMillion: 'Úmrtí na jeden milion',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informace poskytnuté',
    updated_at: 'Aktualizováno dne',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
