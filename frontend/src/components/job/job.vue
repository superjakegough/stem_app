<template>
  <v-layout column>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex sm10 xs12 mt-5 v-if="!loading">
          <v-card flat class="mb-4">
            <v-card-text>
              <h3 class="title text-xs-center primary--text mb-4">{{job.title}}</h3>
              <h3 class="title mb-4">Salary - Benefits</h3>
              <p class="mb-4">{{job.salary}} - {{job.benefits}}</p>
              <h3 class="title mb-4">Type</h3>
              <p class="mb-4">{{job.jobType}}</p>
              <h3 class="title mb-4">Location</h3>
              <p class="mb-4">{{job.jobLocation}}</p>
              <h3 class="title mb-4">Reference</h3>
              <p class="mb-4">{{job.jobReference}}</p>
              <div v-html="job.description"></div>
            </v-card-text>
          </v-card>
          <v-layout justify-center content-subtitle mt-2 mb-4>
            <v-btn depressed color="primary" to="/jobs">Jobs</v-btn>
          </v-layout>
        </v-flex>
        <v-flex md8 sm10 xs12 mt-5 mb-5 text-xs-center v-if="loading">
           <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./job.ts"></script>