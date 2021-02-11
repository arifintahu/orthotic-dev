<template>
    <v-app style="background-color: #eeeeee;">
        <v-app-bar
          app
          color="#393e46"
          dark
        >
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="20"
            />
            <v-toolbar-title>Orthotic Rx App</v-toolbar-title>
          </div>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon left @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/77.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>User</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container>
            <v-row
                align="center"
                no-gutters
              >
                <v-col
                  v-for="(content, key) in menus" :key="key"
                  class="pa-2"
                >
                  <MenuCard :content="content"></MenuCard>
                </v-col>
              </v-row>
         </v-container>
        </v-main>
    </v-app>
</template>

<script>
import MenuCard from '../components/MenuCard';
export default {
    name: 'Home',
    components: {
        MenuCard
    },
    data: () => ({
        drawer: null,
        items: [
          { 
            title: 'Home', 
            icon: 'mdi-home',
            link: '/' 
          },
          { 
            title: 'Profile', 
            icon: 'mdi-account',
            link: '#' 
          },
        ],
        menus: [
            {
                title: 'Patient Assesment RX',
                subtitle: 'Patient assesment form',
                image: 'https://images.pexels.com/photos/3913020/pexels-photo-3913020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                link: '/assesment'
            },
            {
                title: 'Orthotic Designs',
                subtitle: 'List orthotic designs',
                image: 'https://images.pexels.com/photos/3913006/pexels-photo-3913006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                link: '/design'
            }
        ]
    }),
};
</script>