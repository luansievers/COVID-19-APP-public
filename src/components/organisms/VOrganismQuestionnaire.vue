<template>
    <v-dialog v-model="dialog" persistent max-width="700px">
        <v-molecule-questionnaire-skeleton-loader v-if="loading || !show"/>
        <v-stepper v-model="stepper" vertical v-else-if="show">
            <template v-for="question in questions">
                <v-stepper-step
                        :key="`${question.id}-step`"
                        :complete="stepper > question.id"
                        :step="question.id"
                >
                    {{ $vuetify.lang.t('$vuetify.questionnaire.question') }} {{ question.id }}
                    <small>{{ $vuetify.lang.t('$vuetify.questionnaire.question_tip') }}</small>
                </v-stepper-step>
                <v-stepper-content
                        class="pb-5"
                        :key="`${question.id}-content`"
                        :step="question.id"
                >
                    <v-card color="grey lighten-2">
                        <v-card-text class="mt-3 mb-2 pt-10">
                            <v-molecule-questionnaire-boolean-question v-if="question.type === 'boolean'"
                                                                       v-model="answers[question.value]"
                                                                       :question="question.value"/>
                            <v-molecule-questionnaire-number-question v-else-if="question.type === 'number'"
                                                                       v-model="answers[question.value]"
                                                                       :question="question.value" @invalid="disableButtons = $event"/>
                        </v-card-text>
                    </v-card>

                    <v-btn :disabled="disableButtons" v-if="question.id === questions.length" block color="success"
                           @click="finish">
                        {{ $vuetify.lang.t('$vuetify.button.finish') }}
                    </v-btn>
                    <v-btn :disabled="disableButtons" v-else color="primary" block @click="nextStep(question.id)">
                        {{ $vuetify.lang.t('$vuetify.button.continue') }}
                    </v-btn>
                </v-stepper-content>
            </template>
        </v-stepper>
    </v-dialog>
</template>

<script>

    import VMoleculeQuestionnaireSkeletonLoader from "../molecules/VMoleculeQuestionnaireSkeletonLoader";
    import VMoleculeQuestionnaireBooleanQuestion from "../molecules/VMoleculeQuestionnaireBooleanQuestion";
    import VMoleculeQuestionnaireNumberQuestion from "../molecules/VMoleculeQuestionnaireNumberQuestion";

    export default {
        name: "VOrganismQuestionnaire",
        components: {
            VMoleculeQuestionnaireNumberQuestion,
            VMoleculeQuestionnaireBooleanQuestion, VMoleculeQuestionnaireSkeletonLoader},
        data: () => ({
            toggle_one: '',
            stepper: 1,
            dialog: true,
            show: false,
            answers: [],
            disableButtons: false,
            storeLocation: false,
        }),
        computed: {
            questions() {
                return this.$store.getters['questions/getAll'];
            },
            loading() {
                return this.$store.getters['questions/isLoading'];
            },
        },
        methods: {
            nextStep(n) {
                this.disableButtons = true;
                if (n === 1) {
                    this.$ga.event('button', 'click', 'questionnaire-init');
                }

                if (n === this.questions.length) {
                    this.stepper = 1
                } else {
                    this.stepper = n + 1
                }
                //Give a time to the user
                setTimeout(() => {
                    this.disableButtons = false
                }, 2500)
            },
            async finish() {
                this.$ga.event('button', 'click', 'questionnaire-finish');
                const payload = Object.entries(this.answers);
                for (let i = 0; i < payload.length; i++) {
                    if (payload[i][0] !== 'question.age' && payload[i][1]) {
                        this.storeLocation = true;
                    }
                    await this.$store.dispatch('answers/store', {
                        question: payload[i][0],
                        value: payload[i][1]
                    })
                }
                if (this.storeLocation) {
                    await this.$store.dispatch('locations/store');
                }
                await this.$store.dispatch('locations/find');
                await this.$store.dispatch('users/me');
            }
        },
        watch: {
            //Fix steppers
            questions(newValue) {
                if (newValue.length > 0) {
                    this.show = true;
                    //Populate boolean answers
                    newValue.forEach(question => {
                        if (question.type === 'boolean') {
                            this.answers[question.value] = false
                        } else if (question.type === 'number') {
                            this.answers[question.value] = 1
                        }
                    })
                }
            }
        },
        created() {
            this.$store.dispatch('questions/index')
        }
    }
</script>

<style scoped>

</style>
