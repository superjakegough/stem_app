<template>
  <v-sheet color="grey lighten-2">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <v-layout row wrap>
        <v-flex>
          <v-btn icon @click="commands.bold">
            <v-icon :color="iconColor(isActive.bold())">format_bold</v-icon>
          </v-btn>
          <v-btn icon @click="commands.italic">
            <v-icon :color="iconColor(isActive.italic())">format_italic</v-icon>
          </v-btn>
          <v-btn icon @click="commands.underline">
            <v-icon :color="iconColor(isActive.underline())">format_underline</v-icon>
          </v-btn>
          <v-btn icon @click="commands.strike">
            <v-icon :color="iconColor(isActive.strike())">format_strikethrough</v-icon>
          </v-btn>
          <v-btn icon @click="commands.heading({ level: 2 })">
            <v-icon :color="iconColor(isActive.heading({ level: 2 }))">format_size</v-icon>
          </v-btn>
          <v-btn icon @click="commands.bullet_list">
            <v-icon :color="iconColor(isActive.bullet_list())">format_list_bulleted</v-icon>
          </v-btn>
          <v-btn icon @click="commands.ordered_list">
            <v-icon :color="iconColor(isActive.ordered_list())">format_list_numbered</v-icon>
          </v-btn>
          <v-divider />
        </v-flex>
      </v-layout>
    </editor-menu-bar>
    <v-flex xs12 pa-4>
      <editor-content :editor="editor" />
    </v-flex>
  </v-sheet>
</template>
<script src="./editor.ts"></script>