<template>
    <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent inset>
            <v-card tile>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-subheader>{{ $vuetify.lang.t('$vuetify.consent_cookie') }}</v-subheader>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-btn color="success" dark outlined @click="accept">
                                {{ $vuetify.lang.t('$vuetify.button.got_it') }}
                            </v-btn>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import * as Cookie from 'tiny-cookie'

    const STORAGE_TYPES = {
        local: 'localStorage',
        cookies: 'cookies'
    };

    export default {
        name: "VMoleculeCookieLaw",
        data() {
            return {
                sheet: false,
                storageType: STORAGE_TYPES.local,
                supportsLocalStorage: true,
                storageName: 'cookie:accepted'
            }
        },
        computed: {
            canUseLocalStorage() {
                return this.storageType === STORAGE_TYPES.local && this.supportsLocalStorage
            }
        },
        methods: {
            getVisited() {
                let visited = false;
                if (this.canUseLocalStorage) {
                    visited = localStorage.getItem(this.storageName)
                } else {
                    visited = Cookie.get(this.storageName)
                }
                if (typeof visited === 'string') {
                    visited = JSON.parse(visited)
                }
                return !(visited === null || visited === undefined)
            },

            setVisited() {
                if (this.canUseLocalStorage) {
                    localStorage.setItem(this.storageName, true);
                } else {
                    Cookie.set(this.storageName, true, {expires: '1Y'})
                }
            },
            setAccepted() {
                if (this.canUseLocalStorage) {
                    localStorage.setItem(this.storageName, true)
                } else {
                    Cookie.set(this.storageName, true, {expires: '1Y'})
                }
            },
            accept() {
                this.setVisited();
                this.setAccepted();
                this.sheet = false;
            },
        },
        created() {
            if (this.storageType === STORAGE_TYPES.local) {
                // Check for availability of localStorage
                try {
                    const test = '__cookielaw-check-localStorage';
                    if (typeof window !== 'undefined') {
                        window.localStorage.setItem(test, test);
                        window.localStorage.removeItem(test);
                    }
                } catch (e) {
                    console.info('Local storage is not supported, falling back to cookie use');
                    this.supportsLocalStorage = false
                }
            }
            if (!this.getVisited()) {
                this.sheet = true
            }
        }
    }
</script>

<style scoped>

</style>
