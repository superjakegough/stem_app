<template>
  <v-dialog v-model="dialogs.deleteShow" max-width="300">
    <v-card>
    <v-card-text>
      Are you sure you wish to delete the job '{{ job.title }}'?
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" v-on:click="deletee">Accept</v-btn>
      <v-btn color="primary" v-on:click="cancel">Cancel</v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./deletejob.ts"></script>