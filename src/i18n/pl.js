import vuetifyTranslation from 'vuetify/es5/locale/pl'

const myTranslation = {
    marker: {
        sick: 'Ktoś może tu być chory 😞',
        you: 'To jesteś ty!'
    },
    button: {
        refresh: 'Odśwież mapę',
        facebook: 'Kontynuuj z Facebookiem',
        google: 'Kontynuuj z Google',
        continue: 'Kontyntynuj',
        finish: 'koniec',
        translation: 'Wybierz swój język',
        search: 'Wyszukaj miejsce',
        show: {
            official: 'Pokaż oficjalne dane',
            unofficial: 'Pokaż nieoficjalne dane',
        },
        yes: 'tak',
        no: 'Nie',
        home: 'Dom'
    },
    login: {
        title: 'Witamy 😊',
        subtitle: 'Zaloguj się, aby odblokować pełne możliwości mapy'
    },
    questionnaire: {
        question: 'Pytanie',
        question_tip: 'Odpowiedz na te pytania, aby uzyskać pełny dostęp'
    },
    question: {
        age: 'Ile masz lat?',
        contact_covid19: 'Czy masz lub miałeś kontakt z kimś z covid19 (koronawirusem) w ciągu ostatnich kilku dni?',
        fever: 'Czy masz lub miałeś gorączkę w ciągu ostatnich kilku dni?',
        tiredness: 'Czy przez ostatnie kilka dni czujesz się zmęczony?',
        cough: 'Czy masz lub miałeś kaszel w ciągu ostatnich kilku dni?',
        aches_and_pains: 'Czy masz lub miałeś bóle w ciągu ostatnich kilku dni?',
        nasal_congestion: 'Czy masz lub miałeś przekrwienie błony śluzowej nosa w ciągu ostatnich kilku dni?',
        runny_nose: 'Czy masz lub miałeś katar w ciągu ostatnich kilku dni?',
        sore_throat: 'Czy masz lub miałeś ból gardła w ciągu ostatnich kilku dni?'
    },
    cases: 'Wszystkich przypadków',
    todayCases: 'Dzisiaj przypadki',
    deaths: 'Zgony',
    todayDeaths: 'Dzisiaj śmierć',
    recovered: 'Odzyskany',
    active: 'Aktywny',
    critical: 'Krytyczny',
    casesPerOneMillion: 'Liczba przypadków na milion',
    deathsPerOneMillion: 'Zgony na milion',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informacje dostarczone przez',
    updated_at: 'Zaktualizowano o',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
