<template>
  <v-layout row fill-height align-center>
    <v-layout justify-center v-if="$vuetify.breakpoint.smAndUp">
      <v-flex xs10>
        <v-card>
          <v-toolbar flat class="tabletoolbar">
            <v-flex xs4>
              <v-toolbar-title>Jobs</v-toolbar-title>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details />
            </v-flex>
            <v-flex xs4 class="text-xs-right">
              <v-btn flat color="primary" @click="createShow">Create</v-btn>
            </v-flex>
          </v-toolbar>
          <v-data-table :headers="headers" :items="jobs" :search="search" :loading="loading" item-key="id" :items-per-page="5">
            <v-progress-linear slot="progress" color="primary" indeterminate />
            <template v-slot:items="props">
              <tr>
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.salary }}</td>
                <td>{{ props.item.benefits }}</td>
                <td>{{ props.item.jobType }}</td>
                <td>{{ props.item.location }}</td>
                <td>{{ props.item.reference }}</td>
                <td>
                  <v-icon small class="mr-2" @click="updateShow(props.item)">edit</v-icon>
                  <v-icon small @click="deleteShow(props.item)">delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else column justify-center>
      <v-toolbar flat color="transparent">
          <v-toolbar-title>Jobs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="createShow">Create</v-btn>
      </v-toolbar>
      <v-menu lazy transition="scale-transition" full-width>
        <v-text-field slot="activator" v-model="dateFormatted" label="Date" append-icon="event" readonly box />
        <v-date-picker v-model="selecteddate.date" v-on:change="loadEmployees" first-day-of-week="1" full-width />
      </v-menu>
      <v-text-field class="mb-4" v-model="search" append-icon="search" label="Search" single-line hide-details box />
      <v-data-iterator :items="employees" :search="search" :loading="loading" row wrap>
        <v-flex slot="item" slot-scope="props" class="mb-4" xs12>
          <v-card>
            <v-card-title>
              <span class="subheading font-weight-bold">{{ props.item.title }}</span>
              <v-spacer />
              <v-menu left>
                <v-btn slot="activator" icon class="ma-0">
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile @click="updateShow(props.item)">
                    <v-list-tile-title>Edit</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="deleteShow(props.item)">
                    <v-list-tile-title>Delete</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider class="ma-0" />
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Salary:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.salary }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Benefits:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.benefits }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Type:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.jobType }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Location:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.location }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Reference:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.reference }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-layout>
    <v-dialog v-model="createDialog" max-width="600">
      <v-card>
        <v-card-title class="headline">
          Create Job
        </v-card-title>
        <v-flex px-4>
          <v-form ref="createForm" lazy-validation>
            <v-text-field v-model="job.title" label="Title" maxlength="50" solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
            <v-text-field v-model="job.salary" label="Salary" maxlength="50" solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
            <v-text-field v-model="job.benefits" label="Benefits" maxlength="50" solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
            <v-text-field v-model="job.jobType" label="Type" maxlength="50" solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
            <v-text-field v-model="job.location" label="Location" maxlength="50" solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
            <v-text-field v-model="job.reference" label="Reference" maxlength="50" solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
            <v-textarea v-model="job.description" label="Description" maxlength="5000" no-resize solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
          </v-form>
        </v-flex>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn color="primary" flat @click="createDialog = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="createReset">Clear</v-btn>
            <v-btn color="primary" flat @click="create">Submit</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="updateDialog" max-width="300">
      <v-card>
        <v-card-title class="headline">
          Update Job
        </v-card-title>
      <v-card-text>
      <v-layout justify-center>
        <v-form ref="updateForm" lazy-validation>
          <v-text-field v-model="job.title" label="Title" maxlength="50" solo background-color="grey lighten-2" flat :rules="[rules.required]"/>
          <v-text-field v-model="job.salary" label="Salary" maxlength="50" solo background-color="grey lighten-2" flat :rules="[rules.required]"/>
          <v-text-field v-model="job.benefits" label="Benefits" maxlength="50" solo background-color="grey lighten-2" flat :rules="[rules.required]"/>
          <v-text-field v-model="job.jobType" label="Type" maxlength="50" solo background-color="grey lighten-2" flat :rules="[rules.required]"/>
          <v-text-field v-model="job.location" label="Location" maxlength="50" solo background-color="grey lighten-2" flat :rules="[rules.required]"/>
          <v-text-field v-model="job.reference" label="Reference" maxlength="50" solo background-color="grey lighten-2" flat :rules="[rules.required]"/>
          <v-textarea v-model="job.description" label="Description" maxlength="5000" no-resize solo flat background-color="grey lighten-2" :rules="[rules.required]"/>
        </v-form>
      </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn color="primary" flat @click="updateDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="updateReset">Clear</v-btn>
          <v-btn color="primary" flat @click="update">Submit</v-btn>
        </v-layout>
      </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteDialog" max-width="300">
      <v-card>
      <v-card-text>
        Are you sure you wish to delete this job?
      </v-card-text>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn color="primary" flat @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="deletee">Accept</v-btn>
        </v-layout>
      </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="error" color="error">{{ errorMessage }}<v-btn dark flat @click="error = false">Close</v-btn></v-snackbar>
  </v-layout>
</template>

<script src="./adminjobs.ts"></script>