<template>
  <v-dialog v-model="dialogs.updateShow" max-width="300">
    <v-card>
      <v-card-title class="headline">
        Edit Job
      </v-card-title>
    <v-card-text>
    <v-layout justify-center>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="job.title" label="Title" maxlength="50" solo background-color="grey lighten-2" flat required/>
        <v-text-field v-model="job.salary" label="Salary" maxlength="50" solo background-color="grey lighten-2" flat required/>
        <v-text-field v-model="job.benefits" label="Benefits" maxlength="50" solo background-color="grey lighten-2" flat required/>
        <v-text-field v-model="job.jobType" label="Type" maxlength="50" solo background-color="grey lighten-2" flat required/>
        <v-text-field v-model="job.location" label="Location" maxlength="50" solo background-color="grey lighten-2" flat required/>
        <v-text-field v-model="job.reference" label="Reference" maxlength="50" solo background-color="grey lighten-2" flat required/>
        <v-textarea height="200" v-model="job.description" label="description" maxlength="5000" solo flat background-color="grey lighten-2" required/>
      </v-form>
    </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" v-on:click="update">Submit</v-btn>
      <v-btn color="primary" v-on:click="clear">Clear</v-btn>
      <v-btn color="primary" v-on:click="cancel">Cancel</v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./updatejob.ts"></script>