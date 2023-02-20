<template>
  <Navbar />
  <div class="container mt-5">
    <div class="page-banner1">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ul>
          </nav>
          <h1 class="text-center">Login Info</h1>
          <h4 id="user-email" class = "text-center mt-5">{{isEmail}}</h4>
          <div class="text-center mt-4">
            <button @click="signout" class="btn btn-primary mt-5 px-4">
              Logout
            </button>
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
  data () {
    return {
      email: '',
      password: '',
      isEmail : '',     
    }
  },
  created: () => {
    var user = firebase.auth().currentUser;
    console.log(user);

     firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       this.isEmail == user.email
        
      } else {

      }
    });
  },


  components: {
    Navbar
  },

  methods: {
    signout () {
      firebase
        .auth()
        .signOut()
        .then(user => {
          alert('Logout Successfully')
          this.$router.replace('/')
        })
        .catch(error => {
          alert('Error : ' + err.message)
        })
    }
  }
}
</script>

<style>
</style>
