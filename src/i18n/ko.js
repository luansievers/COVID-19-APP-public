import vuetifyTranslation from 'vuetify/es5/locale/ko'

const myTranslation = {
    marker: {
        sick: '여기 누군가가 아플 수 있습니다 😞',
        you: '이것은 당신입니다!'
    },
    button: {
        refresh: '지도 새로 고침',
        facebook: 'Facebook으로 계속',
        google: 'Google 계속',
        continue: '계속하다',
        finish: '끝',
        translation: '당신의 언어를 선택하세요',
        search: '장소 검색',
        show: {
            official: '공식 데이터 표시',
            unofficial: '비공식 데이터 표시',
        },
        yes: '예',
        no: '아니',
        home: '집'
    },
    login: {
        title: '어서 오십시오 😊',
        subtitle: '전체지도 기능을 잠금 해제하려면 로그인'
    },
    questionnaire: {
        question: '질문',
        question_tip: '전체 액세스 권한을 얻으려면 다음 질문에 답하십시오'
    },
    question: {
        age: '나이가 어떻게 되세요?',
        contact_covid19: '지난 며칠 동안 covid19 (코로나 바이러스)에 감염된 사람이 있습니까?',
        fever: '지난 며칠 동안 열이 있습니까?',
        tiredness: '지난 며칠 동안 항상 피곤함을 느끼십니까?',
        cough: '지난 며칠 동안 기침이 있었습니까?',
        aches_and_pains: '지난 며칠 동안 고통을 겪었습니까?',
        nasal_congestion: '지난 며칠 동안 코 막힘이 있었습니까?',
        runny_nose: '지난 며칠 동안 콧물이 있거나 콧물이 있습니까?',
        sore_throat: '지난 며칠 동안 목이 아프거나 목이 있었습니까?'
    },
    cases: '총 사례',
    todayCases: '오늘의 경우',
    deaths: '죽음',
    todayDeaths: '오늘의 죽음',
    recovered: '회복 된',
    active: '유효한',
    critical: '위독한',
    casesPerOneMillion: '백만 건당 사례',
    deathsPerOneMillion: '백만 명당 사망',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: '제공 한 정보',
    updated_at: '에 업데이트',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
