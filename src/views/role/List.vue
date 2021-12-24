<template>
  <div class="_content">
    <div style="margin: 16px">
      <van-button type="info" round block @click="add">添加角色</van-button>
    </div>
    <div v-for="item in roles" :key="item.id">
      <van-swipe-cell>
        <template #left> </template>
        <van-cell :border="false" :title="item.name" :value="item.time" />
        <template #right>
          <van-button square type="info" text="查看" @click="check(item.id)" />
          <van-button
            square
            type="warning"
            text="修改"
            @click="update(item.id)"
          />
          <van-button
            square
            type="danger"
            text="删除"
            @click="remove(item.id)"
          />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("role");
import * as types from "../../store/action-types";
export default {
  computed: {
    ...mapState(["roles", "selectedRole"]),
  },
  methods: {
    ...mapActions([types.SET_ROLES, types.DELETE_ROLE]),
    ...mapMutations([types.GET_SELECTED_ROLE]),
    add() {
      this.$router.push({ name: "AddRole" });
    },
    setSelectedRole(id) {
      let selectedRole = this.roles.filter((role) => role.id === id)[0];
      this[types.GET_SELECTED_ROLE](selectedRole);
    },
    update(id) {
      this.setSelectedRole(id);
      this.$router.push({ name: "EditRole", query: { id: id } });
    },
    check(id) {
      this.setSelectedRole(id);
      this.$router.push({ name: "RoleInfo", query: { id: id } });
    },
    // remove(id) {
    //   this.setSelectedRole(id);
    //   this[types.DELETE_ROLE](this.selectedRole);
    // },
    remove(id) {
      this.setSelectedRole(id);
      let that = this;
      this.$dialog.confirm({
        title: "警告",
        message: "您确定要删除此角色吗？",
        beforeClose: that.removeConfirm,
      });
    },
    async removeConfirm(action, done) {
      console.log(this[types.DELETE_ROLE]);
      if (action === "confirm") {
        await this[types.DELETE_ROLE](this.selectedRole);
        done();
      } else {
        done();
      }
    },
  },
  mounted() {
    this[types.SET_ROLES]();
  },
};
</script>

<style scoped></style>
