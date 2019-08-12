<template>
  <v-layout column>
    <v-flex xs12>
      <v-img :src="require('@/assets/jobs.jpg')" class="header-image">
        <v-layout column text-xs-right justify-end fill-height class="header-padding">
          <h1 class="header-text">Jobs</h1>
        </v-layout>
      </v-img>
    </v-flex>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex md8 sm10 xs12 mb-4>
          <h2 class="content-title mb-4">Current Opportunities</h2>
          <p>
            Interested in any of the below opportunities? To apply, please send your CV to
            <a href="mailto:jobs@stemrecruit.co.uk">jobs@stemrecruit.co.uk.</a> with the job reference number, and we will respond within 2 working days.
          </p>
        </v-flex>
        <v-flex md8 sm10 xs12 mb-4 v-if="!loading">
          <v-text-field v-model="searchTerm" class="mb-4" @change="onSearch" label="Search" 
            prepend-inner-icon="search" background-color="white" solo flat></v-text-field>
          <v-card :key="index" v-for="(job, index) in jobsPaged" flat class="mb-4">
            <v-card-text>
              <v-layout justify-space-between align-start>
                <div>
                  <h3 class="title mb-4">Title</h3>
                  <p class="mb-4">{{job.title}}</p>
                </div>
                <v-btn flat icon color="primary" class="ma-0" @click="openRoute(job.jobId)"><v-icon>launch</v-icon></v-btn>
              </v-layout>
              <h3 class="title mb-4">Salary - Benefits</h3>
              <p class="mb-4">{{job.salary}} - {{job.benefits}}</p>
              <h3 class="title mb-4">Type</h3>
              <p class="mb-4">{{job.jobType}}</p>
              <h3 class="title mb-4">Location</h3>
              <p class="mb-4">{{job.jobLocation}}</p>
              <h3 class="title mb-4">Reference</h3>
              <p class="mb-4">{{job.jobReference}}</p>
            </v-card-text>
          </v-card>
          <v-card v-if="jobs.length < 1" flat class="mb-4">
            <v-card-text class="text-xs-center">
              <p>There are currently no job opportunities available :(</p>
            </v-card-text>
          </v-card>
          <v-layout justify-center mb-4>
            <v-pagination v-model="page" :length="jobsPages" circle @input="onPageChange" ></v-pagination>
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
<script src="./jobs.ts"></script>