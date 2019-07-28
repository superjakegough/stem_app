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
              <v-btn flat color="primary" @click="dialogs.createShow = true">Create</v-btn>
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
                <td class="justify-center layout px-0">
                  <v-icon small class="mr-2" @click="dialogs.updateShow = true">edit</v-icon>
                  <v-icon small @click="dialogs.deleteShow = true">delete</v-icon>
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
          <v-btn flat color="primary" @click="dialogs.createShow = true">Create</v-btn>
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
                  <v-list-tile @click="dialogs.updateShow = true">
                    <v-list-tile-title>Edit</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="dialogs.deleteShow = true">
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
    <CreateJobDialog :show="dialogs" :error="error" :errorMessage="errorMessage"/>
    <UpdateJobDialog :show="dialogs" :error="error" :errorMessage="errorMessage" :job="selectedJob"/>
    <DeleteJobDialog :show="dialogs" :error="error" :errorMessage="errorMessage" :job="selectedJob"/>
    <v-snackbar v-model="error" color="error">{{ errorMessage }}<v-btn dark flat @click="error = false">Close</v-btn></v-snackbar>
  </v-layout>
</template>

<script src="./adminjobs.ts"></script>