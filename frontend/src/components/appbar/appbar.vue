<template>
  <v-layout align-center v-if="$vuetify.breakpoint.mdAndUp" style="opacity: 1.0">
    <v-flex xs4>
      <v-layout align-center fill-height justify-start>
        <img
          :src="require('@/assets/stem_green.png')"
          class="content-image toolbar-icon"
          height="28"
        />
        <span class="primary--text title ml-2">Stem</span>
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout justify-center>
        <v-btn
          flat
          color="primary"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >{{item.title}}</v-btn>
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout justify-end>
        <!-- <v-btn flat icon>
          <v-img :src="require('@/assets/facebook.svg')" contain height="24"></v-img>
        </v-btn>
        <v-btn flat icon>
          <v-img :src="require('@/assets/instagram.svg')" contain height="24"></v-img>
        </v-btn> -->
        <v-btn flat icon @click="openUrl(linkedIn)">
          <v-img :src="require('@/assets/linkedin.svg')" contain height="24"></v-img>
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
  <v-layout align-center v-else>
    <v-flex xs4>
      <v-layout align-center fill-height justify-start>
        <img
          :src="require('@/assets/stem_green.png')"
          class="content-image toolbar-icon"
          height="28"
        />
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout justify-center>
        <span class="primary--text title">Stem</span>
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout align-center fill-height justify-end>
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
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script src="./appbar.ts"></script>