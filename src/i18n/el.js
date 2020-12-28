import vuetifyTranslation from 'vuetify/es5/locale/el'

const myTranslation = {
    marker: {
        sick: 'Κάποιος μπορεί να είναι άρρωστος εδώ 😞',
        you: 'Αυτός είσαι εσύ!'
    },
    button: {
        refresh: 'Ανανέωση χάρτη',
        facebook: 'Συνεχίστε με το Facebook',
        google: 'Συνεχίστε με την Google',
        continue: 'Να συνεχίσει',
        finish: 'Φινίρισμα',
        translation: 'Επιλέξτε τη γλώσσα σας',
        search: 'Αναζήτηση σε ένα μέρος',
        show: {
            official: 'Εμφάνιση επίσημων δεδομένων',
            unofficial: 'Εμφάνιση ανεπίσημων δεδομένων',
        },
        yes: 'Ναί',
        no: 'Οχι',
        home: 'Σπίτι'
    },
    login: {
        title: 'καλως ΗΡΘΑΤΕ 😊',
        subtitle: 'Συνδεθείτε για να ξεκλειδώσετε τις πλήρεις δυνατότητες χαρτών'
    },
    questionnaire: {
        question: 'Ερώτηση',
        question_tip: 'Απαντήστε στις ερωτήσεις αυτές για να έχετε πλήρη πρόσβαση'
    },
    question: {
        age: 'Ποια είναι η ηλικία σου?',
        contact_covid19: 'Έχετε ή είχατε κάποια επαφή με κάποιον με covid19 (κοροναϊό) τις τελευταίες ημέρες;',
        fever: 'Έχετε ή είχατε πυρετό τις τελευταίες ημέρες;',
        tiredness: 'Αισθάνεστε κουρασμένοι όλη την ώρα τις τελευταίες ημέρες;',
        cough: 'Έχετε ή είχατε βήχα τις τελευταίες ημέρες;',
        aches_and_pains: 'Έχετε ή είχατε πόνους τις τελευταίες ημέρες;',
        nasal_congestion: 'Έχετε ή είχατε ρινική συμφόρηση τις τελευταίες ημέρες;',
        runny_nose: 'Έχετε ή είχατε τρέξιμο στη μύτη τις τελευταίες ημέρες;',
        sore_throat: 'Έχετε ή είχατε πονόλαιμο τις τελευταίες ημέρες;'
    },
    cases: 'Σύνολο περιπτώσεων',
    todayCases: 'Σήμερα περιπτώσεις',
    deaths: 'Θάνατοι',
    todayDeaths: 'Σήμερα θανάτους',
    recovered: 'Ανακτηθεί',
    active: 'Ενεργός',
    critical: 'Κρίσιμος',
    casesPerOneMillion: 'Περιπτώσεις ανά εκατομμύριο',
    deathsPerOneMillion: 'Θάνατοι ανά εκατομμύριο',
    corona_api: 'corona.lmao.ninja',
    information_provided_by: 'Πληροφορίες που παρέχονται από το',
    updated_at: 'Ενημερώθηκε στο',
	sign_in_to_covid_19_map: 'Sign in to COVID-19 MAP'
};

export default Object.assign(vuetifyTranslation, myTranslation)
