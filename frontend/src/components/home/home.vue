<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/photo3.jpg')" class="header-image">
            <v-layout column text-xs-right justify-end fill-height class="header-padding">
               <span class="header-sub-text">
                  Stem Skills &amp; Recruitment Ltd
               </span>
               <h1 class="header-text primary--text">
                  Growing your business. Growing your career
               </h1>
            </v-layout>
         </v-img>
      </v-flex>
      <v-container fluid class="content-container">
         <v-layout row wrap justify-space-between>
            <v-flex ref="whoBox" md8 xs12 mb-4>
               <h2 class="content-title primary--text mb-4">Who We Are</h2>
               <p>We are Stem. We are not just here to get a fee - we are here to grow your business and grow your career.</p>
               <p>We are more than just a specialist recruitment consultancy; we also aim to support the growth of the industries which we recruit for in mutual benefit.</p>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/biography">Biography</v-btn>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo2.jpg')" class="content-image" max-height="400"></v-img>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo7.jpg')" class="content-image" max-height="400"></v-img>
               </v-layout>
            </v-flex>
            <v-flex md8 xs12 mb-4>
               <h2 class="content-title primary--text mb-4 mt-4">What We Do</h2>
               <v-expansion-panel v-model="clientPanel" expand popout>
                  <v-expansion-panel-content v-bind:style="{'background-color': getBackground(clientPanel)}">
                     <template v-slot:header>
                        <div>Clients</div>
                     </template>
                     <v-card>
                        <v-card-text>
                          Stem supports science, technology, engineering and manufacturing businesses in South Wales by providing permanent recruitment services. We provide experience and expertise in recruiting for a wide range of roles and are dedicated to finding the right candidates to help your business grow. Take a look at our client services page to find out more information, or if you have a vacancy and need help, then email vacancy@stemrecruit.co.uk.
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
                  <v-expansion-panel-content v-bind:style="{'background-color': getBackground(candidatePanel)}">
                     <template v-slot:header>
                        <div>Candidates</div>
                     </template>
                     <v-card>
                        <v-card-text>
                          If you’re looking to take the next step in your career, then we can help. All of our services to candidates may be free, but we take the same time and care in finding YOU the right fit as we do for our clients. To see our current job opportunities with our clients, take a look at our find a job page, or alternatively you can register with us by sending your CV to jobs@stemrecruit.co.uk and we will be in contact as soon as we have any suitable job opportunities.
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
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review1.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Joe Blogss</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review2.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Jane Doe</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review3.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">John Hancock</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </v-flex>
            <v-flex xs12 ma-4>
               <v-divider></v-divider>
            </v-flex>
            <v-flex md8 xs12>
               <h2 class="content-title primary--text mb-4">Contact Us</h2>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Send me a message</h2>
               <v-form ref="form" lazy-validation>
                  <v-text-field v-model="name" label="Name" box required></v-text-field>
                  <v-text-field v-model="email" label="Email" box required></v-text-field>
                  <v-text-field v-model="subject" label="Subject" box required></v-text-field>
                  <v-text-field v-model="message" label="Message" height="200px" box required></v-text-field>
                  <v-layout v-if="$vuetify.breakpoint.mdAndUp" justify-end>
                     <v-btn raised color="primary" class="ma-0">Contact Me</v-btn>
                  </v-layout>
                  <v-layout v-else justify-center>
                     <v-btn raised color="primary" >Contact Me</v-btn>
                  </v-layout>
               </v-form>
            </v-flex>
            <v-flex md3 xs12 mb-5>
               <v-layout align-center justify-center fill-height>
                  <v-list style="background: transparent;">
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">location_on</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Location
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              Cardiff, UK
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">email</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Email
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              email@address.com
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">phone</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Telephone
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              07000123456
                           </v-list-tile-sub-title>
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