<template>
  <v-layout>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <v-btn icon @click="commands.bold" :disabled="isActive.bold()">
        <v-icon>format_bold</v-icon>
      </v-btn>
    </editor-menu-bar>
    <editor-content :editor="editor" />
  </v-layout>
</template>
<script src="./editor.ts"></script>