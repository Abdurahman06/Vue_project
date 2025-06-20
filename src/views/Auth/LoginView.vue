<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" lg="6">
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid" ref="form" @submit.prevent="onSubmit">
                <v-text-field
                  prepend-icon="mdi-email"
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  label="Password"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="onSubmit"
                :loading="loading"
                :disabled="!valid || loading"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }),
    computed: {
      loading() {
        return this.$store.getters['user/isLoading']
      }
    },
    methods: {
      async onSubmit() {
        if (this.$refs.form.validate()) {
          const result = await this.$store.dispatch('user/loginUser', {
            email: this.email,
            password: this.password
          })
          
          if (result.success) {
            this.$router.push('/')
          }
        }
      }
    }
  }
  </script>