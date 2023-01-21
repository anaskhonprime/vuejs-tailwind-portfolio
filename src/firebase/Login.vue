<template>
  <Navbar />

  <div class="container mt-5">
    <div class="page-banner2">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb"></nav>
          <h1 class="text-center">Login Page</h1>
          <div class="input-group flex-nowrap mt-5">
            <span class="input-group-text" id="addon-wrapping">#</span>
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group flex-nowrap mt-3">
            <span class="input-group-text" id="addon-wrapping">#</span>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="text-center">
            <button
              @click="login"
              type="button"
              class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md"
            >
              Login
            </button>
          </div>

          <div class="text-center mt-4">
            <p class="px-4">
              Don't have an account?<router-link to="/signup">
                Signup</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import Navbar from '../components/Navbar'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isSignin: false
    }
  },

  components: {
    Navbar
  },

  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert('Login Successfully^^!!')
            this.$router.replace('dashboard')
          },
          function (err) {
            alert('에러 : ' + err.message)
          }
        )
    },

    signout(){
      firebase.auth().signOut().then(() => {

      }).catch((error)=> {
        console.log(error)
      })
      

    }


  }
}
</script>

<style></style>
