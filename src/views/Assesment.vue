<template>
    <v-app style="background-color: #eeeeee;">
        <v-app-bar
          app
          color="#393e46"
          dark
        >
          <div class="d-flex align-center">
            <v-btn
              icon
              class="mr-2"
              @click.prevent="$router.go(-1)"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Patient Assesment RX</v-toolbar-title>
          </div>
        </v-app-bar>
        <v-main>
            <v-container>
                <StepperAssesment></StepperAssesment>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import StepperAssesment from '../components/StepperAssesment';
export default {
    name: 'Assesment',
    components: {
        StepperAssesment
    },
    data: () => ({

    }),

    mounted() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
};
</script>