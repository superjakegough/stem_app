<template>
   <v-app>
      <div v-if="$vuetify.breakpoint.mdAndDown">
         <v-toolbar flat fixed scroll-off-screen class="white">
            <AppBar :menuItems="menuItems" />
         </v-toolbar>
         <v-bottom-nav class="elevation-0" :active.sync="bottomNav" :value="true" fixed>
            <v-btn  v-for="item in menuItems" :key="item.title" color="teal" flat :value="item.title" :to="item.path">
               <span>{{item.title}}</span>
               <v-icon>{{item.icon}}</v-icon>
            </v-btn>
         </v-bottom-nav>
      </div>
      <v-toolbar flat fixed scroll-off-screen v-else class="white">
         <AppBar :menuItems="menuItems" />
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