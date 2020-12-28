import vuetifyTranslation from 'vuetify/es5/locale/th'

const myTranslation = {
    marker: {
        sick: 'บางคนอาจป่วยที่นี่ 😞',
        you: 'นี่คือคุณ!'
    },
    button: {
        refresh: 'รีเฟรชแผนที่',
        facebook: 'ดำเนินการต่อด้วย Facebook',
        google: 'ดำเนินการต่อกับ Google',
        continue: 'ต่อ',
        finish: 'เสร็จสิ้น',
        translation: 'เลือกภาษาของคุณ',
        search: 'ค้นหาสถานที่',
        show: {
            official: 'แสดงข้อมูลอย่างเป็นทางการ',
            unofficial: 'แสดงข้อมูลที่ไม่เป็นทางการ',
        },
        yes: 'ใช่',
        no: 'ไม่',
        home: 'หน้าเริ่มต้น'
    },
    login: {
        title: 'ยินดีต้อนรับ 😊',
        subtitle: 'เข้าสู่ระบบเพื่อปลดล็อกความสามารถของแผนที่แบบเต็ม'
    },
    questionnaire: {
        question: 'คำถาม',
        question_tip: 'โปรดตอบคำถามเหล่านี้เพื่อเข้าถึงแบบเต็ม'
    },
    question: {
        age: 'คุณอายุเท่าไหร่?',
        contact_covid19: 'คุณมีหรือมีการติดต่อกับคนที่มี covid19 (coronavirus) ในไม่กี่วันที่ผ่านมา?',
        fever: 'คุณมีไข้ในช่วงสองสามวันที่ผ่านมาหรือไม่?',
        tiredness: 'คุณรู้สึกเหนื่อยตลอดเวลาในสองสามวันที่ผ่านมาหรือไม่?',
        cough: 'คุณมีหรือมีอาการไอในไม่กี่วันที่ผ่านมา?',
        aches_and_pains: 'คุณมีหรือมีอาการปวดในไม่กี่วันที่ผ่านมา?',
        nasal_congestion: 'คุณมีหรือมีอาการคัดจมูกในไม่กี่วันที่ผ่านมา?',
        runny_nose: 'คุณมีหรือมีอาการน้ำมูกไหลในช่วงไม่กี่วันที่ผ่านมาหรือไม่?',
        sore_throat: 'คุณมีหรือมีอาการเจ็บคอในช่วงไม่กี่วันที่ผ่านมาหรือไม่?'
    },
    cases: 'รวมรายกรณี',
    todayCases: 'กรณีวันนี้',
    deaths: 'การเสียชีวิต',
    todayDeaths: 'วันนี้เสียชีวิต',
    recovered: 'กู้คืน',
    active: 'คล่องแคล่ว',
    critical: 'วิกฤติ',
    casesPerOneMillion: 'รายละหนึ่งล้าน',
    deathsPerOneMillion: 'เสียชีวิตต่อหนึ่งล้าน',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'ข้อมูลที่จัดทำโดย',
    updated_at: 'อัปเดตเวลา',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
