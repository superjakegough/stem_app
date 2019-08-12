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
          <v-card flat tile>
            <v-window v-model="onboarding" vertical>
              <v-window-item :key="index" v-for="(blog, index) in filteredBlogs">
                <v-card flat >
                  <v-card-text>
                    <h3 class="title mb-4">{{blog.title}}</h3>
                    <p class="mb-4">{{blog.description}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout justify-center>
                      <v-btn flat color="primary" class="ma-0" @click="openRoute(blog.blogId)">View</v-btn>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-window-item>
            </v-window>
            <v-card-actions class="justify-space-between">
              <v-btn flat @click="prev">
                <v-icon color="primary">chevron_left</v-icon>
              </v-btn>
              <v-item-group v-model="onboarding" class="text-xs-center" mandatory v-if="$vuetify.breakpoint.smAndUp">
                <v-item v-for="(blog, index) in filteredBlogs" :key="index">
                  <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
                    <v-icon color="primary">fiber_manual_record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
              <v-btn flat @click="next">
                <v-icon color="primary">chevron_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="blogs.length < 1" flat>
            <v-card-text class="text-xs-center">
              <p>There are currently no blogs at this time :(</p>
            </v-card-text>
          </v-card>  
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