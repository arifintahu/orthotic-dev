<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    v-ripple
    :to="content.link"
  >
    <v-img
      :src="content.image"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ content.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ content.subtitle }}
    </v-card-subtitle>

  </v-card>
</template>

<script>
  export default {
    name: 'MenuCard',
    props: {
      content: Object
    },
    data: () => ({
      
    }),
  }
</script>
