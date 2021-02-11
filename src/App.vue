<template>
  <v-app>
    <router-view></router-view>

    <v-footer
      v-bind="attrs"
      :padless="padless"
      class="pa-0"
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
        color="#393e46"
        dark
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>ICB Medical & Orthomedical NZ</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    padless: false,
    attrs: {
      absolute: false,
      fixed: false
    }
  }),
};
</script>
