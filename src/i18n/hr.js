import vuetifyTranslation from 'vuetify/es5/locale/hr'

const myTranslation = {
    marker: {
        sick: 'Netko je ovdje možda bolestan 😞',
        you: 'Ovo si ti!'
    },
    button: {
        refresh: 'Osvježi kartu',
        facebook: 'Nastavite s Facebookom',
        google: 'Nastavite s Googleom',
        continue: 'Nastaviti',
        finish: 'Završi',
        translation: 'Odaberite svoj jezik',
        search: 'Pretražite mjesto',
        show: {
            official: 'Pokažite službene podatke',
            unofficial: 'Pokaži neslužbene podatke',
        },
        yes: 'Da',
        no: 'Ne',
        home: 'Dom'
    },
    login: {
        title: 'Dobrodošli 😊',
        subtitle: 'Prijavite se kako biste otključali potpune mogućnosti karata'
    },
    questionnaire: {
        question: 'Pitanje',
        question_tip: 'Odgovorite na ova pitanja kako biste dobili potpuni pristup'
    },
    question: {
        age: 'Koliko imaš godina?',
        contact_covid19: 'Imate li ili ste imali kontakta s nekim tko ima covid19 (coronavirus) u posljednjih nekoliko dana?',
        fever: 'Imate li ili ste imali neku groznicu u posljednjih nekoliko dana?',
        tiredness: 'Osjećate li se umorno cijelo vrijeme posljednjih dana?',
        cough: 'Imate li ili ste imali kašalj u posljednjih nekoliko dana?',
        aches_and_pains: 'Imate li ili ste bolovali zadnjih nekoliko dana?',
        nasal_congestion: 'Imate li ili ste imali začepljenje nosa u posljednjih nekoliko dana?',
        runny_nose: 'Imate li ili ste imali curenje nosa u posljednjih nekoliko dana?',
        sore_throat: 'Imate li ili ste imali grlobolju zadnjih nekoliko dana?'
    },
    cases: 'Ukupno slučajeva',
    todayCases: 'Danas slučajeva',
    deaths: 'smrti',
    todayDeaths: 'Danas smrti',
    recovered: 'oporavljen',
    active: 'Aktivan',
    critical: 'Kritično',
    casesPerOneMillion: 'Slučajeva na milijun',
    deathsPerOneMillion: 'Smrt na milijun',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informacije koje je pružio',
    updated_at: 'Ažurirano u',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
