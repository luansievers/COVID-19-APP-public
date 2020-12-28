import vuetifyTranslation from 'vuetify/es5/locale/fr'

const myTranslation = {
    marker: {
        sick: "Quelqu'un peut être malade ici 😞",
        you: "C'est toi!"
    },
    button: {
        refresh: 'Actualiser la carte',
        facebook: 'Continuez avec Facebook',
        google: 'Continuez avec Google',
        continue: 'Continuer',
        finish: 'terminer',
        translation: 'Choisissez votre langue',
        search: 'Rechercher un lieu',
        show: {
            official: 'Afficher les données officielles',
            unofficial: 'Afficher les données non officielles',
        },
        yes: 'Oui',
        no: 'Non',
        home: 'Accueil'
    },
    login: {
        title: 'Bienvenu 😊',
        subtitle: 'Connectez-vous pour déverrouiller les capacités de la carte'
    },
    questionnaire: {
        question: 'Question',
        question_tip: 'Veuillez répondre à ces questions pour obtenir un accès complet'
    },
    question: {
        age: 'Quel âge avez-vous?',
        contact_covid19: 'Avez-vous ou avez-vous eu des contacts avec une personne atteinte de covid19 (coronavirus) au cours des derniers jours?',
        fever: 'Avez-vous ou avez-vous eu de la fièvre ces derniers jours?',
        tiredness: 'Vous sentez-vous constamment fatigué ces derniers jours?',
        cough: 'Avez-vous ou avez-vous toussé au cours des derniers jours?',
        aches_and_pains: 'Vous avez ou avez eu des douleurs ces derniers jours?',
        nasal_congestion: 'Avez-vous ou avez-vous eu une congestion nasale au cours des derniers jours?',
        runny_nose: 'Avez-vous ou avez-vous eu le nez qui coule au cours des derniers jours?',
        sore_throat: 'Avez-vous ou avez-vous eu mal à la gorge au cours des derniers jours?'
    },
    cases: 'Nombre total de cas',
    todayCases: "Cas d'aujourd'hui",
    deaths: 'Des morts',
    todayDeaths: "Décès aujourd'hui",
    recovered: 'Rétabli',
    active: 'Actif',
    critical: 'Critique',
    casesPerOneMillion: 'Cas pour un million',
    deathsPerOneMillion: 'Décès par million',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informations fournies par',
    updated_at: 'Mis à jour à',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
