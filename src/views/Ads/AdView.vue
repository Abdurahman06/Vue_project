<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img height="400px" :src="ad.src" cover></v-img>
          <v-card-text>
<v-text-field
name="title"
label="Title"
type="text"
v-model="editedTitle"
>
</v-text-field>
<v-textarea
name="desc"
label="Description"
type="text"
v-model="editedDesc"
class="mb-3"
></v-textarea>
</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <modal-dialog :ad="ad"></modal-dialog>
            <v-btn class="success" color="green">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'
export default {
  data() {
    return {};
  },
  props: ['id'],
  computed: {
    ad() {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  },
  components: {
		'modal-dialog': EditAdModal
	}

};
</script>