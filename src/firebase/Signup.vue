<template>
  <Navbar />

  <div class="container mt-5">
    <div class="page-banner2">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb"></nav>
          <h1 class="text-center">Registration</h1>

          <div class="input-group flex-nowrap mt-3">
            <span class="input-group-text" id="addon-wrapping">#</span>
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group flex-nowrap mt-3">
            <span class="input-group-text" id="addon-wrapping">*</span>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="google text-center mt-5">
            <div class="google-button">
              <img
                class="google-icon mx-2"
                href="#"
                src="../images/google.png"
                alt="Image alt"
                style="width: 25px; height: 25px"
              />
              <button @click="googleSignIn" class="btn-primary google-word">
                Continue with Google
              </button>
            </div>
          </div>
          <div class="text-center">
            <button
              v-on:click="signUp"
              type="button"
              class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md"
            >
              Sign Up
            </button>
          </div>

          <div class="text-center mt-4">
            <p class="px-4">
              Don't have an account?
              <router-link to="/login">Start Now</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  
</template>

<script>
import Navbar from '../components/Navbar'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification
} from 'firebase/auth'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: '',
      username: '',
      alertBox : false,
    }
  },

  components: {
    Navbar
  },

  methods: {
    signUp () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)

        .then(
          user => {
            alert('Registration Successfully^^!!')
            this.$router.replace('login')
          },

          function (err) {
            alert('Error : ' + err.message)
          }
        )
    },

    googleSignIn: function () {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
         alert('Registration Successfully^^!!')
         this.$router.replace('login')
          let token = result.credential.accessToken
          let user = result.user
          console.log(token)
          console.log(user)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
