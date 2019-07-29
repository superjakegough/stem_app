<template>
  <v-layout column>
    <v-flex xs12>
      <v-img :src="require('@/assets/background3.jpg')" class="header-image">
        <v-layout column text-xs-right justify-end fill-height class="header-padding">
          <h1 class="header-text primary--text">Growing your business<br/>Growing your career</h1>
        </v-layout>
      </v-img>
    </v-flex>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex md8 sm10 xs12 mb-4>
          <h2 class="content-title primary--text">Who We Are</h2>
        </v-flex>
        <v-flex sm10 xs12 mb-4 v-if="$vuetify.breakpoint.smAndDown">
          <v-img
            :src="require('@/assets/stem_green.png')"
            class="content-image home-logo"
            contain
          ></v-img>
        </v-flex>
        <v-flex md6 sm10 xs12>
          <p>
            We are Stem. We are not just here to get a fee – we are here to
            <strong>grow your business</strong> and
            <strong>grow your career</strong>. We are more than just a specialist recruitment consultancy; we also aim to support the growth of the industries for which we recruit, in mutual benefit.
          </p>
          <p>Based in Wales, we provide expertise and experience in recruitment for the science, technology, engineering and manufacturing industries across the region. Our approach to recruitment is simple and transparent, with a focus on not just short-term solutions to find you the right candidate, but also on investing into long-term solutions for your recruitment needs.</p>
          <p>Whether you are a business looking to recruit, or a candidate looking to take the next step in your career, then we are here to listen to your needs and expectations, offer market advice and knowledge, and work with you to find you the right match.</p>
        </v-flex>
        <v-flex md2 ml-3 v-if="$vuetify.breakpoint.mdAndUp">
          <v-img
            :src="require('@/assets/stem_green.png')"
            class="content-image home-logo"
            contain
          ></v-img>
        </v-flex>
        <v-flex md8 sm10 xs12 mt-4 mb-4>
          <h2 class="content-title primary--text mb-4 mt-4">What We Do</h2>
          <v-expansion-panel v-model="clientPanel" expand popout>
            <v-expansion-panel-content
              v-bind:style="{'background-color': getBackground(clientPanel[0])}"
            >
              <template v-slot:header>
                <div class="body-2">Clients</div>
              </template>
              <v-card>
                <v-card-text>
                  Stem supports science, technology, engineering and manufacturing businesses in Wales by providing permanent recruitment services. We provide experience and expertise in recruiting for a wide range of roles and are dedicated to finding the right candidates to help your business grow. Take a look at our client services page to find out more information, or if you have a vacancy and need help, then email
                  <a
                    href="mailto:vacancy@stemrecruit.co.uk"
                  >vacancy@stemrecruit.co.uk.</a>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" to="/services">Services</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel v-model="candidatePanel" expand popout>
            <v-expansion-panel-content
              v-bind:style="{'background-color': getBackground(candidatePanel[0])}"
            >
              <template v-slot:header>
                <div class="body-2">Candidates</div>
              </template>
              <v-card>
                <v-card-text>
                  If you’re looking to take the next step in your career, then we can help. All of our services to candidates may be free, but we take the same time and care in finding YOU the right fit as we do for our clients. To see our current job opportunities with our clients, take a look at our find a job page, or alternatively you can register with us by sending your CV to
                  <a href="mailto:jobs@stemrecruit.co.uk">jobs@stemrecruit.co.uk.</a> and we will be in contact as soon as we have any suitable job opportunities.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" to="/jobs">Jobs</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-flex xs12 ma-4>
          <v-divider></v-divider>
        </v-flex>
        <v-flex md4 sm10 xs12 mt-4 text-xs-center>
          <v-avatar size="200" class="mb-4">
            <v-img :src="require('@/assets/jack.jpg')"></v-img>
          </v-avatar>
          <h2 class="primary--text title text-uppercase mb-3">Jack Taylor</h2>
          <h3
            class="primary--text title text-uppercase mb-3"
          >Founder &amp; Recruitment Advisor</h3>
        </v-flex>
        <v-flex md4 sm10 xs12>
          <v-layout column align-center justify-center fill-height>
            <p>
              I am a personable and technical recruiter with a simple and transparent approach that has both client and candidate satisfaction at its core. I offer extensive market knowledge of the science, technology, engineering and manufacturing industries in Wales, along with a large network of candidates and clients. I have recruited for a variety of companies; from start-ups and SMEs, right through to blue-chip organisations and global brands.
            </p>
            <v-btn flat color="primary" to="/blog">Blog</v-btn>
          </v-layout>
        </v-flex>
        <v-flex md4 sm10 xs12>
          <v-layout align-center justify-center fill-height>
            <v-list style="background: transparent;">
              <v-list-tile avatar three-line>
                <v-list-tile-avatar>
                  <v-icon large color="primary">location_on</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="primary--text">Location</v-list-tile-title>
                  <v-list-tile-sub-title>Caerphilly, Wales</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar three-line>
                <v-list-tile-avatar>
                  <v-icon large color="primary">email</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="primary--text">Email</v-list-tile-title>
                  <v-list-tile-sub-title>jobs@stemrecruit.co.uk</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar three-line>
                <v-list-tile-avatar>
                  <v-icon large color="primary">phone</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="primary--text">Telephone</v-list-tile-title>
                  <v-list-tile-sub-title>029 2120 2879</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./home.ts"></script>