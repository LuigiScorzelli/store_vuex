<template>
  <div>
    <a class="button">
      <router-link to="/admin/products/create">Create product</router-link>
    </a>
    <b-table :data="products" :columns="tableColumns">
      <template slot-scope="props">
        <b-table-column
          v-for="(col, index) in tableColumns"
          :key="index"
          :field="col.field"
        >
          <template v-if="col.field === 'actions'">
            <div class="block">
              <a class="button" @click="goToUpdate(props.row._id)">
                <i class="fas fa-pencil-alt"></i>
              </a>
              <a class="button">
                <i class="far fa-trash-alt"></i>
              </a>
            </div>
          </template>
          <template v-else>
            {{ props.row[col.field] }}
          </template>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import BTableColumn from "buefy/src/components/table/TableColumn";
import BIcon from "buefy/src/components/icon/Icon";

export default {
  name: "adminIndex",
  components: {
    BIcon,
    BTableColumn
  },
  data() {
    return {
      tableColumns: [
        {
          field: "_id",
          label: "id"
        },
        {
          field: "name",
          label: "Name"
        },
        {
          field: "price",
          label: "Prezzo"
        },
        {
          field: "stocks",
          label: "Quantità"
        },
        {
          field: "actions",
          label: "Azioni"
        }
      ]
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/getItems"];
    }
  },
  methods: {
    goToUpdate(id) {
      this.$router.push({ name: "adminUpdate", params: {id} });
    }
  }
};
</script>
