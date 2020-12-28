<template>
    <v-btn depressed block v-google-signin-button="clientId" color="#de5246" dark @click="clickOn">
        {{ $vuetify.lang.t('$vuetify.button.google') }}
    </v-btn>
</template>

<script>
    import GoogleSignInButton from 'vue-google-signin-button-directive'

    export default {
        name: 'VAtomButtonGoogle',
        directives: {
            GoogleSignInButton
        },
        computed: {
            clientId() {
                return process.env.VUE_APP_GOOGLE_CLIENT_ID;
            }
        },
        methods: {
            clickOn() {
                this.$ga.event('button', 'click', 'google-login');
            },
            OnGoogleAuthSuccess(idToken) {
                this.$ga.event('button', 'click', 'google-success');
                this.$store.dispatch('users/onGoogleFacebookSuccess', {id_token: idToken, login_source: 'google'});
            },
            OnGoogleAuthFail(exception) {
                this.$ga.event('button', 'click', 'google-success');
                this.$ga.exception(JSON.stringify(exception));
                console.log(exception);
            }
        }
    }
</script>

<style>
</style>
