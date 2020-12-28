<template>
    <v-row>
        <v-col cols="12" sm="7">
            {{$vuetify.lang.t(`$vuetify.${question}`)}}
        </v-col>
        <v-col cols="12" sm="5">
            <v-text-field v-model="answer" type="number" solo min="1" :rules="[v => !!v]"
                          hide-details
                          max="100" prepend-icon="mdi-plus" append-outer-icon="mdi-minus">
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "VMoleculeQuestionnaireNumberQuestion",
        props: {
            question: {
                type: String,
                required: true
            },
            value: {
                type: Number,
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
                if (newValue) {
                    this.$emit("input", Number(newValue));
                    this.$emit("invalid", false);
                } else {
                    this.$emit("invalid", true);
                }
            }
        }
    }
</script>

<style scoped>

</style>
