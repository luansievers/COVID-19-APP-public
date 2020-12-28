import vuetifyTranslation from 'vuetify/es5/locale/ru'

const myTranslation = {
    marker: {
        sick: 'Здесь кто-то может болеть 😞',
        you: 'Это ты!'
    },
    button: {
        refresh: 'Обновить карту',
        facebook: 'Продолжить с Facebook',
        google: 'Продолжить с Google',
        continue: 'Продолжать',
        finish: 'финиш',
        translation: 'Выберите свой язык',
        search: 'Поиск места',
        show: {
            official: 'Показать официальные данные',
            unofficial: 'Показать неофициальные данные',
        },
        yes: 'да',
        no: 'нет',
        home: 'домашняя страница'
    },
    login: {
        title: 'желанный 😊',
        subtitle: 'Войдите, чтобы разблокировать все возможности карты'
    },
    questionnaire: {
        question: 'Вопрос',
        question_tip: 'Пожалуйста, ответьте на эти вопросы, чтобы получить полный доступ'
    },
    question: {
        age: 'Сколько вам лет?',
        contact_covid19: 'Был ли у вас или был какой-либо контакт с кем-либо с covid19 (коронавирус) в последние несколько дней?',
        fever: 'У вас была или была лихорадка в последние несколько дней?',
        tiredness: 'Чувствуете ли вы усталость все время в последние несколько дней?',
        cough: 'У вас был или был кашель в последние несколько дней?',
        aches_and_pains: 'У вас были или были боли в последние несколько дней?',
        nasal_congestion: 'У вас были или были заложенность носа в последние несколько дней?',
        runny_nose: 'У вас был или был насморк в последние несколько дней?',
        sore_throat: 'У вас были или были боли в горле в последние несколько дней?'
    },
    cases: 'Всего случаев',
    todayCases: 'Сегодня дела',
    deaths: 'Смертей',
    todayDeaths: 'Сегодня смерти',
    recovered: 'Восстановленные',
    active: 'активный',
    critical: 'критический',
    casesPerOneMillion: 'Случаи на миллион',
    deathsPerOneMillion: 'Смертей на миллион',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Информация предоставлена',
    updated_at: 'Обновлено в',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
