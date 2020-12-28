<template>
    <v-row>
        <v-col cols="12" sm="7">
            {{$vuetify.lang.t(`$vuetify.${question}`)}}
        </v-col>
        <v-col cols="12" sm="5" class="text-center">
            <v-btn-toggle mandatory>
                <v-btn width="80px" color="success" outlined @click="answer = true"
                       :elevation="answer ? 15 : 1">
                    {{$vuetify.lang.t(`$vuetify.button.yes`)}}
                </v-btn>
                <v-btn width="80px" color="error" outlined @click="answer = false"
                       :elevation="!answer ? 15 : 1">
                    {{$vuetify.lang.t(`$vuetify.button.no`)}}
                </v-btn>
            </v-btn-toggle>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "VMoleculeQuestionnaireBooleanQuestion",
        props: {
            question: {
                type: String,
                required: true
            },
            value: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                answer: this.value,
            }
        },
        watch: {
            answer(newValue) {
                this.$emit("input", newValue);
            }
        }
    }
</script>

<style scoped>

</style>
