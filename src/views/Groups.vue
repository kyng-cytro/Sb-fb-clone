<template>
  <div class="Groups">
    <div>
      <GroupSidebar />
    </div>
    <div>
      <GroupDisplay />
    </div>
  </div>
</template>

<script>
import GroupSidebar from "@/components/GroupComponents/GroupSidebar.vue";
import GroupDisplay from "@/components/GroupComponents/GroupDisplay.vue";

export default {
  name: "Groups",
  components: {
    GroupSidebar,
    GroupDisplay,
  },
};
</script>


<style scoped>
.Friends {
  display: flex;
  flex-direction: row;
  background: rgb(244, 246, 247);
}
</style>
