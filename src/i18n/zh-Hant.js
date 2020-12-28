import vuetifyTranslation from 'vuetify/es5/locale/zh-Hant'

const myTranslation = {
    marker: {
        sick: '這裡有人病了 😞',
        you: '這是你！'
    },
    button: {
        refresh: '刷新地圖',
        facebook: '繼續Facebook',
        google: '繼續使用Google',
        continue: '繼續',
        finish: '完',
        translation: '選擇你的語言',
        search: '搜索地點',
        show: {
            official: '顯示官方數據',
            unofficial: '顯示非官方數據',
        },
        yes: '是',
        no: '沒有',
        home: '起始頁'
    },
    login: {
        title: '歡迎 😊',
        subtitle: '登錄以解鎖完整的地圖功能'
    },
    questionnaire: {
        question: '題',
        question_tip: '請回答以下問題以獲得完全訪問權限'
    },
    question: {
        age: '你幾歲？',
        contact_covid19: '最近幾天，您是否與covid19（冠狀病毒）患者有接觸或接觸過？',
        fever: '最近幾天有發燒嗎？',
        tiredness: '您最近幾天是否一直感到疲倦？',
        cough: '最近幾天有咳嗽嗎？',
        aches_and_pains: '最近幾天您是否有痛苦？',
        nasal_congestion: '最近幾天您是否有鼻塞？',
        runny_nose: '最近幾天有流鼻涕嗎？',
        sore_throat: '最近幾天您有喉嚨痛嗎？'
    },
    cases: '案件總數',
    todayCases: '今天的情況',
    deaths: '死亡人數',
    todayDeaths: '今天的死亡',
    recovered: '已恢復',
    active: '活性',
    critical: '危急',
    casesPerOneMillion: '百萬例',
    deathsPerOneMillion: '每百萬人死亡',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: '提供的信息',
    updated_at: '更新於',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
