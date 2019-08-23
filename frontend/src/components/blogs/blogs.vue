<template>
  <v-layout column>
    <v-flex xs12>
      <v-img :src="require('@/assets/blogs.jpg')" class="header-image">
        <v-layout column text-xs-right justify-end fill-height class="header-padding">
          <h1 class="header-text">Blogs</h1>
        </v-layout>
      </v-img>
    </v-flex>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex md8 sm10 xs12 mb-4>
          <h2 class="content-title mb-4">News &amp; Advice Blogs</h2>
          <p>
            Keep up to date with the latest industry news, as well as regular activites offering recruitment and careers advice.
          </p>
        </v-flex>
        <v-flex md8 sm10 xs12 mb-4 v-if="!loading">
          <v-text-field v-model="searchTerm" class="mb-4" @change="onSearch" label="Search" 
            prepend-inner-icon="search" background-color="white" solo flat></v-text-field>
          <v-card :key="index" v-for="(blog, index) in blogsPaged" flat class="mb-4">
            <v-card-text>
              <h3 class="title text-xs-center primary--text mb-4">{{blog.title}}</h3>
              <p>{{blog.description}}</p>
              <div class="blog-short-content blog-image" v-html="blog.content"></div>
              <p>...</p>
              <p>Published: {{convertDate(blog.createdAt)}}</p>
              <v-layout justify-center>
                <v-btn flat color="primary" class="ma-0" @click="openRoute(blog.blogId)">View</v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
          <v-card v-if="blogs.length < 1" flat class="mb-4">
            <v-card-text class="text-xs-center">
              <p>There are currently no blog opportunities available :(</p>
            </v-card-text>
          </v-card>
          <v-layout justify-center mb-4>
            <v-pagination v-model="page" :length="blogsPages" circle @input="onPageChange" ></v-pagination>
          </v-layout>
        </v-flex>
        <v-flex md8 sm10 xs12 mt-2 mb-5 text-xs-center v-if="loading">
           <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout justify-center mb-5>
        <v-btn depressed color="primary" to="/">Home</v-btn>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./blogs.ts"></script>