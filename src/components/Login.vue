<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-slide-y-transition mode="out-in">
              <v-layout column align-center>
                <img src="@/assets/logo.png" alt="Vuetify.js" class="logo mb-5">
              </v-layout>
            </v-slide-y-transition>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Usuário" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Senha" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mx-2" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <main-footer/>
  </v-app>
</template>

<script>
import MainFooter from '@/components/common/MainFooter'

export default {
  name: 'Login',
  components: {
    MainFooter
  }
}
</script>
