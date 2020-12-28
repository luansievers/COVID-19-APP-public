import vuetifyTranslation from 'vuetify/es5/locale/uk'

const myTranslation = {
    marker: {
        sick: 'Хтось може захворіти тут 😞',
        you: 'Це ви!'
    },
    button: {
        refresh: 'Оновити карту',
        facebook: 'Продовжуйте з Facebook',
        google: 'Продовжуйте з Google',
        continue: 'Продовжуйте',
        finish: 'Закінчити',
        translation: 'Виберіть свою мову',
        search: 'Шукайте місце',
        show: {
            official: 'Показати офіційні дані',
            unofficial: 'Показати неофіційні дані',
        },
        yes: 'Так',
        no: 'Немає',
        home: 'Початкова сторінка'
    },
    login: {
        title: 'Ласкаво просимо 😊',
        subtitle: 'Увійдіть, щоб розблокувати повні можливості карти'
    },
    questionnaire: {
        question: 'Питання',
        question_tip: 'Будь ласка, дайте відповіді на ці запитання, щоб отримати повний доступ'
    },
    question: {
        age: 'Скільки тобі років?',
        contact_covid19: 'Чи мали ви чи мали якийсь контакт з кимось із covid19 (коронавірус) протягом останніх кількох днів?',
        fever: 'Чи були у вас або були якісь гарячки в останні кілька днів?',
        tiredness: 'Ви відчуваєте втому весь час за останні кілька днів?',
        cough: 'У вас чи були кашель в останні кілька днів?',
        aches_and_pains: 'У вас були або були болі в останні кілька днів?',
        nasal_congestion: 'У вас були або були закладеність носа в останні кілька днів?',
        runny_nose: 'У вас є або у вас нежить в останні кілька днів?',
        sore_throat: 'У вас болить горло в останні кілька днів?'
    },
    cases: 'Всього випадків',
    todayCases: 'Сьогодні випадки',
    deaths: 'Смерть',
    todayDeaths: 'Сьогодні смерть',
    recovered: 'Відновлено',
    active: 'Активний',
    critical: 'Критичний',
    casesPerOneMillion: 'Випадки на мільйон',
    deathsPerOneMillion: 'Смерть на мільйон',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Інформація, надана',
    updated_at: 'Оновлено о',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
