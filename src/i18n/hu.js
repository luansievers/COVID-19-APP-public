import vuetifyTranslation from 'vuetify/es5/locale/hu'

const myTranslation = {
    marker: {
        sick: 'Lehet, hogy itt valaki beteg 😞',
        you: 'Ez vagy te!'
    },
    button: {
        refresh: 'Térkép frissítése',
        facebook: 'Folytassa a Facebook-lal',
        google: 'Folytassa a Google-lal',
        continue: 'Folytatni',
        finish: 'Befejez',
        translation: 'Válassza ki a nyelvet',
        search: 'Keressen egy helyet',
        show: {
            official: 'Mutassa meg a hivatalos adatokat',
            unofficial: 'Nem hivatalos adatok megjelenítése',
        },
        yes: 'Igen',
        no: 'Nem',
        home: 'itthon'
    },
    login: {
        title: 'Üdvözlet 😊',
        subtitle: 'Jelentkezzen be a térkép teljes képességének feloldásához'
    },
    questionnaire: {
        question: 'Kérdés',
        question_tip: 'Kérjük, válaszoljon ezekre a kérdésekre a teljes hozzáférés érdekében'
    },
    question: {
        age: 'Hány éves vagy?',
        contact_covid19: 'Van-e valami kapcsolatad valakivel a covid19-sel (koronavírus) az elmúlt napokban?',
        fever: 'Van vagy volt láz az elmúlt napokban?',
        tiredness: 'Fáradtnak érzi magát az elmúlt napokban?',
        cough: 'Önnek van vagy volt köhögése az elmúlt napokban?',
        aches_and_pains: 'Van vagy volt fájdalma az elmúlt napokban?',
        nasal_congestion: 'Van vagy volt orrdugulása az elmúlt néhány napban?',
        runny_nose: 'Van vagy volt orrfolyása az elmúlt néhány napban?',
        sore_throat: 'Van vagy fáj fáj a torkád az elmúlt napokban?'
    },
    cases: 'Összes eset',
    todayCases: 'A mai esetekben',
    deaths: 'halálesetek',
    todayDeaths: 'Ma halálesetek',
    recovered: 'gyógyult',
    active: 'Aktív',
    critical: 'Kritikai',
    casesPerOneMillion: 'Események egymilliónként',
    deathsPerOneMillion: 'Halálozások egymilliónként',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'A Bizottság által nyújtott információk',
    updated_at: 'Frissítve:',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
