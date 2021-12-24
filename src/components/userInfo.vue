<template>
  <div class="content"></div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let roleHelpers = createNamespacedHelpers("role");
import * as types from "@/store/action-types";
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...roleHelpers.mapActions([types.SET_ROLES]),
  },
  computed: {
    ...roleHelpers.mapState(["roles"]),
    roleName() {
      if (this.roles) {
        let roleId = this.userInfo.roleId;
        let role = this.roles.filter((role) => role.id === roleId);
        if (role.length > 0) {
          console.log(role);
          return role[0].name;
        } else {
          return "";
        }
      }
      return "";
    },
  },
  mounted() {
    this[types.SET_ROLES]();
  },
};
</script>

<style>
</style>
