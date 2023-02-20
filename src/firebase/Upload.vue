<template>
  <Navbar />

  <div class="container mt-5">
    <div class="page-banner2">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb"></nav>
          <h1 class="text-center">Upload Page</h1>

          <div class="input-group flex-nowrap mt-3">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input
              v-model="email"
              type="username"
              class="form-control"
              placeholder="username"
              aria-label="username"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div class="input-group flex-nowrap mt-3">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input
              v-model="email"
              type=""
              class="form-control"
              placeholder="Profile Image"
              aria-label="username"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div class="input-group mt-4">
            <label class="input-group-text" for="inputGroupSelect01"
              >Categories</label
            >
            <select
              class="form-select"
              id="inputGroupSelect01"
              aria-describedby="inputGroup-sizing-lg"
            >
              <option selected>Please Select the Category</option>
              <option value="1">VueJs</option>
              <option value="2">Blockchain</option>
              <option value="3">FrontEnd</option>
            </select>
          </div>

          <div class="input-group flex-nowrap mt-5">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input
              v-model="email"
              type="username"
              class="form-control"
              placeholder="Title"
              aria-label="username"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div class="input-group flex-nowrap mt-3">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input
              v-model="email"
              type="username"
              class="form-control"
              placeholder="Introduction"
              aria-label="username"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div class="input-group mt-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02"
              >Upload</label
            >
          </div>

          <div class="cont mt-3">
       
            <textarea id="my-text" rows="15" placeholder="Content"></textarea>
          </div>

          

          <div class="text-center">
            <button
              v-on:click="signUp"
              type="button"
              class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md"
            >
             Upload
            </button>
          </div>

          <div class="text-center mt-4">
            
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

export default {
  name: 'Upload',
  components: {
    Navbar
  }
}
</script>

<style>


textarea{
  display: block;
  width: 100%;
  padding: 20px;
  resize: none;
  color: #202020;
  border: 1px solid #b2b2b2;
  border-radius: 5px; 
}

</style>
