import vuetifyTranslation from 'vuetify/es5/locale/sr-Cyrl'

const myTranslation = {
    marker: {
        sick: 'Можда је овде неко болестан 😞',
        you: 'Ово си ти!'
    },
    button: {
        refresh: 'Освежи мапу',
        facebook: 'Наставите са Фацебоок-ом',
        google: 'Наставите са Гооглеом',
        continue: 'Настави',
        finish: 'Заврши',
        translation: 'Одаберите језик',
        search: 'Претражите место',
        show: {
            official: 'Прикажи званичне податке',
            unofficial: 'Прикажи неслужбене податке',
        },
        yes: 'да',
        no: 'Не',
        home: 'почетна страница'
    },
    login: {
        title: 'Добродошли 😊',
        subtitle: 'Пријавите се да бисте откључали пуне могућности мапе'
    },
    questionnaire: {
        question: 'Питање',
        question_tip: 'Одговорите на ова питања да бисте добили потпуни приступ'
    },
    question: {
        age: 'Колико имаш година?',
        contact_covid19: 'Да ли сте имали или сте имали било какав контакт са неким ковид19 (цоронавирус) у последњих неколико дана?',
        fever: 'Да ли имате или сте имали неку грозницу у последњих неколико дана?',
        tiredness: 'Да ли се осећате уморно све време у последњих неколико дана?',
        cough: 'Имате ли или имате кашаљ у последњих неколико дана?',
        aches_and_pains: 'Да ли сте имали или имали болове у последњих неколико дана?',
        nasal_congestion: 'Имате ли или сте имали зачепљење носа у последњих неколико дана?',
        runny_nose: 'Да ли имате или имате цурење носа у последњих неколико дана?',
        sore_throat: 'Да ли имате или боли грло у последњих неколико дана?'
    },
    cases: 'Укупно случајева',
    todayCases: 'Данас случајеви',
    deaths: 'Смрти',
    todayDeaths: 'Данас смрти',
    recovered: 'Опоравили',
    active: 'Активно',
    critical: 'Критичан',
    casesPerOneMillion: 'Случајеви на милион',
    deathsPerOneMillion: 'Смрт на милион',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Информације које пружа',
    updated_at: 'Ажурирано у',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
