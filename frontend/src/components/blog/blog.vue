<template>
  <v-layout column>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex sm10 xs12 mt-4>
          <h2 class="content-title text-xs-center mb-4">Blog</h2>
          <v-layout justify-center content-subtitle mt-2 mb-4>
            <v-btn depressed color="primary" to="/blogs">Blogs</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./blog.ts"></script>