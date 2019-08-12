<template>
  <v-layout column>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex sm10 xs12 mt-5 v-if="!loading">
          <v-card flat class="mb-4">
            <v-card-text>
              <h3 class="title mb-4">{{blog.title}}</h3>
              <p class="mb-4">{{blog.description}}</p>
              <v-divider class="mb-4"/>
              <div v-html="blog.content"></div>
            </v-card-text>
          </v-card>
          <v-layout justify-center content-subtitle mt-2 mb-4>
            <v-btn depressed color="primary" to="/blogs">Blogs</v-btn>
          </v-layout>
        </v-flex>
        <v-flex md8 sm10 xs12 mt-5 mb-5 text-xs-center v-if="loading">
           <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./blog.ts"></script>