<template>
  <v-stepper style="box-shadow: none;" v-model="e1">
    <v-stepper-header style="box-shadow: none;" class="pa-4">
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step 
        :complete="e1 > 3" 
        step="3"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 4"
        step="4"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 5"
        step="5"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 6"
        step="6"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 7"
        step="7"
        class="pa-3"
      >
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step 
        step="8"
        class="pa-3"
      >
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" class="px-4 py-0">
        <div class="title mb-3">Patient Details</div>
        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>Patient Details</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                class="pa-0"
                label="Name"
              ></v-text-field>
              <v-text-field
                class="pa-0"
                label="Address"
              ></v-text-field>
              <v-text-field
                class="pa-0"
                label="Assesment Date"
                append-icon="mdi-calendar"
                readonly
              ></v-text-field>
              <v-text-field
                class="pa-0"
                label="Birth Date"
                append-icon="mdi-calendar"
                readonly
              ></v-text-field>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>Gender</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <v-radio-group
                mandatory
              >
                <v-radio
                  label="Male"
                  value="male"
                ></v-radio>
                <v-radio
                  label="Female"
                  value="female"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>Body</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <div class="d-flex">
                <v-text-field
                  class="pa-0 mr-4"
                  type="number"
                  suffix="kg"
                  label="Weight"
                ></v-text-field>
                <v-text-field
                  class="pa-0"
                  type="number"
                  suffix="lbs"
                  label="Weight"
                ></v-text-field>
              </div>
              <div class="d-flex">
                <v-text-field
                  class="pa-0 mr-4"
                  type="number"
                  suffix="cm"
                  label="Height"
                ></v-text-field>
                <v-text-field
                  class="pa-0"
                  type="number"
                  suffix="ft in"
                  label="Height"
                ></v-text-field>
              </div>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>Shoe Size</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                class="pa-0"
                type="number"
                label="Size"
              ></v-text-field>
              <v-radio-group
                row
              >
                <v-radio
                  label="AUS/US"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="UK"
                  value="radio-2"
                ></v-radio>
                <v-radio
                  label="EU"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>Activity Level</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <v-select
                :items="items"
                label="Activity"
              ></v-select>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>Medical History</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <v-textarea
                outlined
                name="input-7-4"
                label="Describe"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            </v-card-text>
          </v-card>
        </form>

        <v-btn
          class="my-4"
          color="primary"
          @click="e1 = 2"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2" class="px-4 py-0">
        <div class="title mb-3">Patient Assesment</div>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>RCSP - Resting Calcaneal Stance Position</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <div>
                <div>
                  <div class="body-1 text-center">Left</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
                <div>
                  <div class="body-1 text-center">Right</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>RSCP - Image</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text class="pa-0">
              <v-img
                src="https://e2k9ube.cloudimg.io/s/cdn/x/https://edienet.s3.amazonaws.com/news/images/full_40419.jpg?v=15/06/2020%2016:52:00"
                height="200"
                contain
                class="grey darken-4"
              ></v-img>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>NCSP - Neutral Calcaneal Stance Position</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <div>
                <div>
                  <div class="body-1 text-center">Left</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
                <div>
                  <div class="body-1 text-center">Right</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>NCSP - Image</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text class="pa-0">
              <v-img
                src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg"
                height="200"
                contain
                class="grey darken-4"
              ></v-img>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>MP - Malleous Position</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <div>
                <div>
                  <div class="body-1 text-center">Left</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
                <div>
                  <div class="body-1 text-center">Right</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </form>

        <form class="mb-4">
          <v-card flat outlined>
            <v-toolbar flat color="primary white--text">
              <v-toolbar-subtitle>FFT - Forefoot valgus / varus</v-toolbar-subtitle>
            </v-toolbar>
            <v-card-text>
              <div>
                <div>
                  <div class="body-1 text-center">Left</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
                <div>
                  <div class="body-1 text-center">Right</div>
                  <div class="d-flex">
                    <v-checkbox
                      label="SN (+)"
                      value="John"
                    ></v-checkbox>
                    <v-text-field
                      class="pa-0 mx-2"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      label="PN (-)"
                      value="John"
                    ></v-checkbox>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </form>

        <v-btn 
          text
          @click="e1= 1"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 3"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3" class="px-4 py-0">
        <div class="title mb-3">Medical History</div>

        <v-btn 
          text
          @click="e1= 2"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 4"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4" class="px-4 py-0">
        <div class="title mb-3">Imaging</div>

        <v-card outlined class="mb-3">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
            height="200"
            contain
            class="grey darken-4"
          ></v-img>
          <v-card-title class="caption pa-1 font-weight-medium">
            Photo 1
          </v-card-title>
        </v-card>

        <v-card outlined class="mb-3">
          <v-img
            src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg"
            height="200"
            contain
            class="grey darken-4"
          ></v-img>
          <v-card-title class="caption pa-1 font-weight-medium">
            Photo 2
          </v-card-title>
        </v-card>

        <v-card outlined class="mb-3">
          <v-img
            src="https://e2k9ube.cloudimg.io/s/cdn/x/https://edienet.s3.amazonaws.com/news/images/full_40419.jpg?v=15/06/2020%2016:52:00"
            height="200"
            contain
            class="grey darken-4"
          ></v-img>
          <v-card-title class="caption pa-1 font-weight-medium">
            Photo 3
          </v-card-title>
        </v-card>

        <v-btn 
          text
          @click="e1= 3"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 5"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="5" class="px-4 py-0">
        <div class="title mb-3">Orthotic Product</div>

        <v-btn 
          text
          @click="e1= 4"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 6"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="6" class="px-4 py-0">
        <div class="title mb-3">Slider 6</div>

        <v-btn 
          text
          @click="e1= 5"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 7"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="7" class="px-4 py-0">
        <div class="title mb-3">Customer Pro RX</div>

        <v-btn 
          text
          @click="e1= 6"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 8"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="8" class="px-4 py-0">
        <div class="title mb-3">Further Imaging</div>

        <v-btn 
          text
          @click="e1= 7"
          class="mr-2 my-4"
        >
          Back
        </v-btn>
        <v-btn
          color="primary"
          class="my-4"
          @click="e1 = 1"
        >
          Submit
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    name: 'StepperAssesment',
    props: {
    },
    data: () => ({
      e1: 1,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),

    methods: {
      scrollTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      }
    },

    watch: {
      e1: function(val) {
        console.log(val);
        this.scrollTop();
      }
    }
  }
</script>
