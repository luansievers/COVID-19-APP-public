<template>
    <v-f-b-login-scope :app-id="appId" @login="OnFacebookAuthSuccess" @error="OnFacebookAuthFail"
                       @sdk-init="handleSdkInit">
        <v-btn slot-scope="scope" depressed block color="#3b5998" dark @click="login(scope)">
            {{ $vuetify.lang.t('$vuetify.button.facebook') }}
        </v-btn>
    </v-f-b-login-scope>
</template>

<script>
    import {VFBLoginScope} from 'vue-facebook-login-component'

    export default {
        name: 'VAtomButtonFacebook',
        components: {
            VFBLoginScope
        },
        data: () => ({
            FB: {},
        }),
        computed: {
            appId() {
                return process.env.VUE_APP_FACEBOOK_APP_ID;
            }
        },
        methods: {
            handleSdkInit({FB}) {
                this.FB = FB
            },
            login(scope) {
                scope.login();
                this.$ga.event('button', 'click', 'facebook-login');
            },
            OnFacebookAuthSuccess() {
                this.FB.getLoginStatus((response) => {
                    // eslint-disable-next-line no-debugger
                    if (response.status === 'connected') {
                        // The user is logged in and has authenticated your
                        // app, and response.authResponse supplies
                        // the user's ID, a valid access token, a signed
                        // request, and the time the access token
                        // and signed request each expire.
                        this.$ga.event('button', 'click', 'facebook-success');
                        this.$store.dispatch('users/onGoogleFacebookSuccess', {
                            id_token: response.authResponse.accessToken,
                            login_source: 'facebook'
                        });
                    } else if (response.status === 'not_authorized') {
                        // The user hasn't authorized your application.  They
                        // must click the Login button, or you must call FB.login
                        // in response to a user gesture, to launch a login dialog.
                        this.$ga.event('button', 'click', 'facebook-not-authorized');
                    } else {
                        // The user isn't logged in to Facebook. You can launch a
                        // login dialog with a user gesture, but the user may have
                        // to log in to Facebook before authorizing your application.
                        this.$ga.event('button', 'click', `facebook-${response.status}`);
                    }
                });

            },
            OnFacebookAuthFail(exception) {
                this.$ga.event('button', 'click', 'facebook-fail');
                this.$ga.exception(JSON.stringify(exception));
                console.log(exception);
            }
        }
    }
</script>

<style>
</style>
