import vuetifyTranslation from 'vuetify/es5/locale/ca'

const myTranslation = {
    marker: {
        sick: 'Algú pot estar malalt aquí 😞',
        you: 'Es tracta de vostè!'
    },
    button: {
        refresh: 'Actualitza el mapa',
        facebook: 'Continua amb Facebook',
        google: 'Continua amb Google',
        continue: 'Continua',
        finish: 'Acabar',
        translation: 'Trieu el vostre idioma',
        search: 'Busca un lloc',
        show: {
            official: 'Mostra dades oficials',
            unofficial: 'Mostra dades no oficials',
        },
        yes: 'Sí',
        no: 'No',
        home: 'a casa'
    },
    login: {
        title: 'Benvingut 😊',
        subtitle: 'Inicieu la sessió per desbloquejar les funcions del mapa complet'
    },
    questionnaire: {
        question: 'Pregunta',
        question_tip: 'Respon a aquestes preguntes per obtenir accés complet'
    },
    question: {
        age: 'Quants anys tens?',
        contact_covid19: 'Ha tingut o ha tingut contacte amb algú amb covid19 (coronavirus) durant els darrers dies?',
        fever: 'Tens o tens febre en els darrers dies?',
        tiredness: 'Et sents cansat tot el temps durant els darrers dies?',
        cough: 'Tens o tens tos els darrers dies?',
        aches_and_pains: 'Ha tingut o ha tingut dolors els darrers dies?',
        nasal_congestion: 'Teniu o teniu congestió nasal els darrers dies?',
        runny_nose: 'Tens o tens un nas corrent els darrers dies?',
        sore_throat: 'Ha tingut o tenia mal de gola els darrers dies?'
    },
    cases: 'Total de casos',
    todayCases: 'Avui casos',
    deaths: 'Morts',
    todayDeaths: 'Avui morts',
    recovered: 'Recuperat',
    active: 'Actiu',
    critical: 'Crítics',
    casesPerOneMillion: 'Casos per milió',
    deathsPerOneMillion: 'Morts per un milió',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informació proporcionada per',
    updated_at: "S'ha actualitzat a"
};

export default Object.assign(vuetifyTranslation, myTranslation)
