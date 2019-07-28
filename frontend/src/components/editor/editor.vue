<template>
  <v-sheet color="white">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <v-layout row wrap>
        <v-flex>
          <v-btn icon @click="commands.bold">
            <v-icon :color="iconColor(isActive.bold())">format_bold</v-icon>
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