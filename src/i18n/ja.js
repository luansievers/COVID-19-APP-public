import vuetifyTranslation from 'vuetify/es5/locale/ja'

const myTranslation = {
    marker: {
        sick: '誰かがここで病気かもしれません 😞',
        you: 'これはあなたです！'
    },
    button: {
        refresh: '地図を更新',
        facebook: 'Facebookを続行',
        google: 'Googleで続行',
        continue: '継続する',
        finish: '仕上げ',
        translation: '言語を選択してください',
        search: '場所を検索',
        show: {
            official: '公式データを表示',
            unofficial: '非公式データを表示',
        },
        yes: 'はい',
        no: '番号',
        home: 'ホーム'
    },
    login: {
        title: 'ようこそ 😊',
        subtitle: 'ログインして完全なマップ機能のロックを解除します'
    },
    questionnaire: {
        question: '質問',
        question_tip: 'これらの質問に答えて完全なアクセス権を取得してください'
    },
    question: {
        age: 'あなたは何歳ですか？',
        contact_covid19: '過去数日間にcovid19（コロナウイルス）の人との接触はありましたか？',
        fever: 'ここ数日で熱はありましたか、またはありましたか？',
        tiredness: 'ここ数日、いつも疲れていませんか？',
        cough: 'この数日で咳が出ましたか？',
        aches_and_pains: 'ここ数日、苦痛はありますか？',
        nasal_congestion: '過去数日間、鼻づまりはありましたか？',
        runny_nose: '過去数日間、鼻水はありましたか？',
        sore_throat: '過去数日間に喉の痛みはありますか？'
    },
    cases: '総件数',
    todayCases: '今日のケース',
    deaths: '死',
    todayDeaths: '今日の死亡',
    recovered: '回復した',
    active: 'アクティブ',
    critical: 'クリティカル',
    casesPerOneMillion: '100万件あたりの件数',
    deathsPerOneMillion: '100万人あたりの死亡',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'によって提供される情報',
    updated_at: 'に更新',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
