<template>
  <v-layout column>
    <v-flex xs12>
      <v-img :src="require('@/assets/background4.jpg')" class="header-image">
        <v-layout column text-xs-right justify-end fill-height class="header-padding">
          <h1 class="header-text">Blog</h1>
        </v-layout>
      </v-img>
    </v-flex>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex md8 sm10 xs12 mb-4>
          <h2 class="content-title primary--text mb-4">News &amp; Advice Blog</h2>
          <p>
            Keep up to date with the latest industry news, as well as regular activites offering recruitment and careers advice.
          </p>
        </v-flex>
        <v-flex md8 sm10 xs12 mb-4>
          <v-text-field v-model="searchTerm" @change="onSearch" label="Search" prepend-inner-icon="search" color="primary" solo flat></v-text-field>
        </v-flex>
        <v-flex md8 sm10 xs12 mb-4>
          <v-card :key="index" v-for="(blog, index) in blogsPaged" flat class="mb-4">
            <v-card-text>
              <h3 class="title primary--text mb-4">Title</h3>
              <p class="mb-4">{{blog.title}}</p>
              <h3 class="title primary--text mb-4">Description</h3>
              <p class="mb-4">{{blog.description}}</p>
              <h3 class="title primary--text mb-4">Content</h3>
              <p>{{blog.content}}</p>
            </v-card-text>
          </v-card>
          <v-card v-if="blogs.length < 1" flat class="mb-4">
            <v-card-text class="text-xs-center">
              <p>There are currently no blogs at this time :(</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center mb-4>
        <v-pagination v-model="page" :length="blogsPages" circle @input="onPageChange" ></v-pagination>
      </v-layout>
      <v-layout justify-center mb-5>
        <v-btn flat color="primary" to="/">Home</v-btn>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./blog.ts"></script>