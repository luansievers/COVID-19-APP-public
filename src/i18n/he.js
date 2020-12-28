import vuetifyTranslation from 'vuetify/es5/locale/he'

const myTranslation = {
    marker: {
        sick: 'מישהו יכול להיות חולה כאן 😞',
        you: 'זה אתה!'
    },
    button: {
        refresh: 'רענן מפה',
        facebook: 'המשך עם פייסבוק',
        google: 'המשך עם גוגל',
        continue: 'המשך',
        finish: 'סיים',
        translation: 'בחר את השפה שלך',
        search: 'חפש מקום',
        show: {
            official: 'הצג נתונים רשמיים',
            unofficial: 'הצג נתונים לא רשמיים',
        },
        yes: 'כן',
        no: 'לא',
        home: 'בית'
    },
    login: {
        title: 'ברוך הבא 😊',
        subtitle: 'התחבר כדי לפתוח יכולות מפה מלאות'
    },
    questionnaire: {
        question: 'שאלה',
        question_tip: 'אנא ענה על שאלות אלה כדי לקבל גישה מלאה'
    },
    question: {
        age: 'מה הגיל שלך?',
        contact_covid19: 'האם יש לך או היה לך קשר עם מישהו עם covid19 (וירוס קורונה) בימים האחרונים?',
        fever: 'האם יש לך או היה לך חום בימים האחרונים?',
        tiredness: 'האם אתה מרגיש עייף כל הזמן בימים האחרונים?',
        cough: 'האם יש לך שיעול או היה לך שיעול בימים האחרונים?',
        aches_and_pains: 'האם סובלים מכאבים בימים האחרונים?',
        nasal_congestion: 'האם יש לך גודש באף בימים האחרונים?',
        runny_nose: 'האם יש לך נזלת בימים האחרונים?',
        sore_throat: 'האם יש לך כאב גרון בימים האחרונים?'
    },
    cases: 'סך כל המקרים',
    todayCases: 'היום מקרים',
    deaths: 'מקרי מוות',
    todayDeaths: 'היום מקרי מוות',
    recovered: 'התאושש',
    active: 'פעיל',
    critical: 'קריטי',
    casesPerOneMillion: 'תיקים למיליון',
    deathsPerOneMillion: 'מקרי מוות למיליון',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'מידע שנמסר על ידי',
    updated_at: 'עודכן בשעה',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
