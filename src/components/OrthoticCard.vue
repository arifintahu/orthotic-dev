<template>
  <v-card
    class="mx-auto my-0 px-3 py-4"
    max-width="344"
    v-ripple
    outlined
  >
    <v-row
      align="center"
      no-gutters
    >
      <v-col class="col-2">
        <v-img
          :src="content.image"
          height="50px"
          class="rounded-circle"
        ></v-img>
      </v-col>
      <v-col class="col-10">
         <v-card-title class="body-1 text-start">
          {{ content.description }}
        </v-card-title>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
  export default {
    name: 'OrthoticCard',
    props: {
      content: Object
    },
    data: () => ({
      
    }),
  }
</script>
