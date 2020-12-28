import vuetifyTranslation from 'vuetify/es5/locale/sl'

const myTranslation = {
    marker: {
        sick: 'Tu je morda nekdo bolan 😞',
        you: 'To si ti!'
    },
    button: {
        refresh: 'Osveži zemljevid',
        facebook: 'Nadaljujte s Facebookom',
        google: 'Nadaljujte z Googlom',
        continue: 'Nadaljujte',
        finish: 'Dokončaj',
        translation: 'Izberite jezik',
        search: 'Poiščite kraj',
        show: {
            official: 'Pokaži uradne podatke',
            unofficial: 'Pokaži neuradne podatke',
        },
        yes: 'Da',
        no: 'Ne',
        home: 'domača stran'
    },
    login: {
        title: 'Dobrodošli 😊',
        subtitle: 'Prijavite se, če želite sprostiti popolne zmogljivosti zemljevida'
    },
    questionnaire: {
        question: 'Vprašanje',
        question_tip: 'Odgovorite na ta vprašanja in si zagotovite popoln dostop'
    },
    question: {
        age: 'Kakšna je tvoja starost?',
        contact_covid19: 'Ali ste imeli ali ste imeli kakšen stik z nekom z covid19 (koronavirusom) v zadnjih nekaj dneh?',
        fever: 'Imate ali ste imeli vročino v zadnjih nekaj dneh?',
        tiredness: 'Se v zadnjih dneh ves čas počutite utrujeni?',
        cough: 'Imate ali ste imeli kašelj v zadnjih nekaj dneh?',
        aches_and_pains: 'Imate ali ste imeli bolečine v zadnjih nekaj dneh?',
        nasal_congestion: 'Ali imate ali ste imeli nosno zamašitev v zadnjih nekaj dneh?',
        runny_nose: 'Imate ali imate izcedek iz nosu v zadnjih nekaj dneh?',
        sore_throat: 'Imate ali ste imeli vneto grlo v zadnjih nekaj dneh?'
    },
    cases: 'Skupaj primerov',
    todayCases: 'Danes primeri',
    deaths: 'Smrti',
    todayDeaths: 'Danes smrti',
    recovered: 'Pridobljeno',
    active: 'Aktivno',
    critical: 'Kritično',
    casesPerOneMillion: 'Primerov na milijon',
    deathsPerOneMillion: 'Število smrti na milijon',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informacije, ki jih je posredoval',
    updated_at: 'Posodobljeno ob',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
