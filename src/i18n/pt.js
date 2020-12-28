import vuetifyTranslation from 'vuetify/es5/locale/pt'

const myTranslation = {
    marker: {
        sick: 'Alguém pode estar doente aqui 😞',
        you: 'Este é você!'
    },
    button: {
        update_answers: 'Atualizar minhas respostas',
        refresh: 'Atualizar mapa',
        facebook: 'Continue com o Facebook',
        google: 'Continue com o Google',
        continue: 'Continuar',
        finish: 'Terminar',
        translation: 'Escolha seu idioma',
        search: 'Pesquisar um local',
        show: {
            official: 'Mostrar dados oficiais',
            unofficial: 'Mostrar dados não oficiais',
        },
        yes: 'Sim',
        no: 'Não',
        home: "Página Inicial",
        privacy: 'Privacidade',
        terms: 'Termos',
        about: 'Sobre nós',
        close: 'Fechar',
        contact: 'Contato',
        got_it: 'Entendi!'
    },
    login: {
        title: 'Bem-vindo 😊',
        subtitle: 'Faça login para desbloquear todos os recursos do mapa'
    },
    questionnaire: {
        question: 'Questão',
        question_tip: 'Responda a estas perguntas para obter acesso total'
    },
    question: {
        age: 'Qual é a sua idade?',
        contact_covid19: 'Você tem ou teve contato com alguém com covid19 (coronavírus) nos últimos dias?',
        fever: 'Você tem ou teve febre nos últimos dias?',
        tiredness: 'Você se sente cansado o tempo todo nos últimos dias?',
        cough: 'Você tem ou teve tosse nos últimos dias?',
        aches_and_pains: 'Você tem ou teve dores nos últimos dias?',
        nasal_congestion: 'Você tem ou teve congestão nasal nos últimos dias?',
        runny_nose: 'Você tem ou teve corrimento nasal nos últimos dias?',
        sore_throat: 'Você tem ou teve dor de garganta nos últimos dias?'
    },
    cases: 'Total de casos',
    todayCases: 'Casos de hoje',
    deaths: 'Mortes',
    todayDeaths: 'Mortes hoje',
    recovered: 'Recuperados',
    active: 'Ativos',
    critical: 'Critico',
    casesPerOneMillion: 'Casos por milhão',
    deathsPerOneMillion: 'Mortes por um milhão',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Informações fornecidas por',
    updated_at: 'Atualizado em',
    sign_in_to_covid_19_map: 'Entre COVID-19 MAP',
    about: {
        title: 'Sobre nós',
        text: 'O COVID-19 Map 🗺️ nasceu da mente de dois programadores que queriam saber como seu bairro estava lidando com a situação do coronavírus. Com este site, é possível rastrear casos oficiais e não oficiais em todo o mundo.'
    },
    contact: {
        title: 'Entre em contato',
        text: 'Não hesite em contactar-nos através do email',
        text2: 'Faremos o possível para responder rapidamente.'
    },
    clickMap: {
        text: 'Clique no país de interesse',
        clickHere: 'Clique aqui para',
        browser: 'Compatibilidade do navegador'
    },
    location: {
        title: 'Localizaçao',
        text: 'Para utilizar nosso website precisamos de sua localização. \nPor favor, permita o compartilhamento de sua localização para você poder ter acesso a todas funcionalidades.',
        noLocation: 'Não conseguimos acessar a sua localização',
        correct: 'Como arrumar?'
    },
    consent_cookie: 'Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.'
};

export default Object.assign(vuetifyTranslation, myTranslation)
