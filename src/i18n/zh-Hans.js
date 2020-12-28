import vuetifyTranslation from 'vuetify/es5/locale/zh-Hans'

const myTranslation = {
    marker: {
        sick: '这里有人病了 😞',
        you: '这是你！'
    },
    button: {
        refresh: '刷新地图',
        facebook: '继续Facebook',
        google: '继续使用Google',
        continue: '继续',
        finish: '完',
        translation: '选择你的语言',
        search: '搜索地点',
        show: {
            official: '显示官方数据',
            unofficial: '显示非官方数据',
        },
        yes: '是',
        no: '没有',
        home: '起始页'
    },
    login: {
        title: '欢迎 😊',
        subtitle: '登录以解锁完整的地图功能'
    },
    questionnaire: {
        question: '题',
        question_tip: '请回答以下问题以获得完全访问权限'
    },
    question: {
        age: '你几岁？',
        contact_covid19: '最近几天，您是否与covid19（冠状病毒）患者有接触或接触过？',
        fever: '最近几天有发烧吗？',
        tiredness: '您最近几天是否一直感到疲倦？',
        cough: '最近几天有咳嗽吗？',
        aches_and_pains: '最近几天您是否有痛苦？',
        nasal_congestion: '最近几天您是否有鼻塞？',
        runny_nose: '最近几天有流鼻涕吗？',
        sore_throat: '最近几天您有喉咙痛吗？'
    },
    cases: '案件总数',
    todayCases: '今天的情况',
    deaths: '死亡人数',
    todayDeaths: '今天的死亡',
    recovered: '已恢复',
    active: '活性',
    critical: '危急',
    casesPerOneMillion: '百万例',
    deathsPerOneMillion: '每百万人死亡',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: '提供的信息',
    updated_at: '更新于',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
