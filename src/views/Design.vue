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
            <v-toolbar-title>Orthotic Designs</v-toolbar-title>
          </div>
        </v-app-bar>
        <v-main>
            <v-container>
                <OrthoticCard v-for="(item, key) in items" :key="key" :content="item"></OrthoticCard>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import OrthoticCard from '../components/OrthoticCard';
export default {
	name: 'Design',
	components: {
		OrthoticCard
	},
	data: () => ({
		items: [
			{
				image: 'https://images-na.ssl-images-amazon.com/images/I/51x7lz%2B60JL._AC_SX425_.jpg',
				description: '2/3 Length Orthotics'
			},
			{
				image: 'https://www.orthobethesda.com/content/uploads/2020/12/Foot-Orthotics.jpg',
				description: 'ICB High Heel Orthotics'
			},
			{
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlO3V3uz0SUqLRNC_6yJ2-M26k4gxIB4QBg&usqp=CAU',
				description: 'ICB High Flange Orthotics'
			},
			{
				image: 'https://www.osc-ortho.com/wp-content/uploads/2017/01/orthotics-300x204.jpg',
				description: 'Full Length Dress Orthotics'
			},
			{
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdImMyPMsitWjU7_xJhYBKvTC6eQpsV43rg&usqp=CAU',
				description: 'Full Length Orthotics'
			},
			{
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdPH-Toco3ecfdFuZkK93aFLjroNM31y08A&usqp=CAU',
				description: '2/3 Length Dress Orthotics'
			}
		]
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