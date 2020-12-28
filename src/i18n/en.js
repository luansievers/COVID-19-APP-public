import vuetifyTranslation from 'vuetify/es5/locale/en'

const myTranslation = {
    marker: {
        sick: 'Someone may be sick here 😞',
        you: 'This is you!'
    },
    button: {
        update_answers: 'Update my answers',
        refresh: 'Refresh map',
        facebook: 'Continue with Facebook',
        google: 'Continue with Google',
        continue: 'Continue',
        finish: 'Finish',
        translation: 'Choose your language',
        search: 'Search a place',
        show: {
            official: 'Show official data',
            unofficial: 'Show unofficial data',
        },
        yes: 'Yes',
        no: 'No',
        home: 'Home',
        privacy: 'Privacy',
        terms: 'Terms',
        about: 'About',
        close: 'Close',
        contact: 'Contact',
        got_it: 'Got it'
    },
    login: {
        title: 'Welcome 😊',
        subtitle: 'Login to unlock full map capabilities'
    },
    questionnaire: {
        question: 'Question',
        question_tip: 'Please answer these questions to get full access'
    },
    question: {
        age: 'What is your age?',
        contact_covid19: 'Do you have or had any contact with someone with covid19 (coronavirus)  in the last few days?',
        fever: 'Do you have or had any fever in the last few days?',
        tiredness: 'Do you feel tired all the time in the last few days?',
        cough: 'Do you have or had a cough in the last few days?',
        aches_and_pains: 'Do you have or had pains in the last few days?',
        nasal_congestion: 'Do you have or had nasal congestion in the last few days?',
        runny_nose: 'Do you have or had a runny nose in the last few days?',
        sore_throat: 'Do you have or had a sore throat in the last few days?'
    },
    cases: 'Total cases',
    todayCases: 'Today cases',
    deaths: 'Deaths',
    todayDeaths: 'Today deaths',
    recovered: 'Recovered',
    active: 'Active',
    critical: 'Critical',
    casesPerOneMillion: 'Cases per one million',
    deathsPerOneMillion: 'Deaths per one million',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Information provided by',
    updated_at: 'Updated at',
    sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP',
    about: {
        title: 'About us',
        text: 'COVID-19 Map 🗺️ was born out of the minds of two programmers who wanted to know how their neighbourhood was dealing with the coronavirus situation. With this website, it is possible to track official and unofficial cases around the world.'
    },
    contact: {
        title: 'Get in touch with us',
        text: 'Feel free to contact us through the email',
        text2: 'We will do everything we can to respond quickly.'
    },
    clickMap: {
        text: 'Click on any country',
        clickHere: 'Click here for',
        browser: 'Browser compatibility'
    },
    location: {
        title: 'We need your location',
        text: 'To use our website we need your location. \nPlease allow your location to be used so you can use full capabilities.',
        noLocation: 'No Location',
        correct: 'How to fix?'
    },
    consent_cookie: 'This website uses cookies to ensure you get the best experience on our website.'
};

export default Object.assign(vuetifyTranslation, myTranslation)
