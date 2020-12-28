import vuetifyTranslation from 'vuetify/es5/locale/es'

const myTranslation = {
    marker: {
        sick: 'Alguien puede estar enfermo aquí 😞',
        you: '¡Este Eres tu!'
    },
    button: {
        refresh: 'Actualizar mapa',
        facebook: 'Continuar con Facebook',
        google: 'Continuar con Google',
        continue: 'Seguir',
        finish: 'Terminar',
        translation: 'Elige tu idioma',
        search: 'Busca un lugar',
        show: {
            official: 'Mostrar datos oficiales',
            unofficial: 'Mostrar datos no oficiales',
        },
        yes: 'si',
        no: 'No',
        home: 'Hogar'
    },
    login: {
        title: 'Bienvenidos 😊',
        subtitle: 'Inicie sesión para desbloquear capacidades completas del mapa'
    },
    questionnaire: {
        question: 'Pregunta',
        question_tip: 'Responda estas preguntas para obtener acceso completo'
    },
    question: {
        age: '¿Cuál es tu edad?',
        contact_covid19: '¿Tiene o ha tenido contacto con alguien con covid19 (coronavirus) en los últimos días?',
        fever: '¿Tiene o ha tenido fiebre en los últimos días?',
        tiredness: '¿Te sientes cansado todo el tiempo en los últimos días?',
        cough: '¿Tiene o ha tenido tos en los últimos días?',
        aches_and_pains: '¿Tienes o has tenido dolores en los últimos días?',
        nasal_congestion: '¿Tiene o ha tenido congestión nasal en los últimos días?',
        runny_nose: '¿Tiene o ha tenido secreción nasal en los últimos días?',
        sore_throat: '¿Tiene o ha tenido dolor de garganta en los últimos días?'
    },
    cases: 'Total de casos',
    todayCases: 'Hoy casos',
    deaths: 'Muertes',
    todayDeaths: 'Hoy muertes',
    recovered: 'Recuperado',
    active: 'Activo',
    critical: 'Crítico',
    casesPerOneMillion: 'Casos por un millón',
    deathsPerOneMillion: 'Muertes por un millón',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Información proporcionada por',
    updated_at: 'Actualizado en',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
