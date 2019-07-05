<template>
   <v-app>
      <div v-if="$vuetify.breakpoint.mdAndDown">
         <v-toolbar flat fixed scroll-off-screen class="white">
            <v-layout justify-center>
               <v-img :src="require('@/assets/stem_green.png')" class="content-image" height="32" contain></v-img>
               <span class="primary--text title">Stem Skills &amp; Recruitment Ltd</span>
            </v-layout>
            <v-menu offset-y>
               <template v-slot:activator="{ on }">
                  <v-btn flat icon color="primary" v-on="on" absolute right class="ma-0">
                     <v-icon>more_vert</v-icon>
                  </v-btn>
               </template>
               <v-list>
                  <v-list-tile>
                     <v-btn flat icon>
                        <v-img :src="require('@/assets/facebook.svg')" contain height="24"></v-img>
                     </v-btn>
                  </v-list-tile>
                  <v-list-tile>
                     <v-btn flat icon>
                        <v-img :src="require('@/assets/instagram.svg')" contain height="24"></v-img>
                     </v-btn>
                  </v-list-tile>
                  <v-list-tile>
                     <v-btn flat icon>
                        <v-img :src="require('@/assets/linkedin.svg')" contain height="24"></v-img>
                     </v-btn>
                  </v-list-tile>
               </v-list>
            </v-menu>
         </v-toolbar>
         <v-bottom-nav class="elevation-0" :active.sync="bottomNav" :value="true" fixed>
            <v-btn  v-for="item in menuItems" :key="item.title" color="teal" flat :value="item.title" :to="item.path">
               <span>{{item.title}}</span>
               <v-icon>{{item.icon}}</v-icon>
            </v-btn>
         </v-bottom-nav>
      </div>
      <v-toolbar flat fixed scroll-off-screen v-else class="white">
         <v-layout align-center justify-space-between>
            <v-toolbar-title class="primary--text">
               <v-layout>
                  <img :src="require('@/assets/stem_green.png')" class="content-image toolbar-icon" height="32" >
                  <span>Stem Skills &amp; Recruitment Ltd</span>
               </v-layout>
            </v-toolbar-title>
            <v-toolbar-items>
               <v-btn flat color="primary" v-for="item in menuItems" :key="item.title" :to="item.path">{{item.title}}</v-btn>
            </v-toolbar-items>
            <div>
               <v-btn flat icon>
                  <v-img :src="require('@/assets/facebook.svg')" contain height="24"></v-img>
               </v-btn>
               <v-btn flat icon>
                  <v-img :src="require('@/assets/instagram.svg')" contain height="24"></v-img>
               </v-btn>
               <v-btn flat icon>
                  <v-img :src="require('@/assets/linkedin.svg')" contain height="24"></v-img>
               </v-btn>
            </div>
         </v-layout>
      </v-toolbar>
      <v-content>
         <v-slide-x-transition mode="out-in">
            <router-view></router-view>
         </v-slide-x-transition>
      </v-content>
   </v-app>
</template>
<script src="./app.ts"></script>
<style src="./app.css"></style>