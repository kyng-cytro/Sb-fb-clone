<template>
    <div class = "Events">
      <div>
        <EventsSidebar />
      </div>
      <div>
      </div>
    </div>

</template>

<script>

import EventsSidebar from "@/components/EventsComponents/EventsSidebar.vue";

export default {
  name: "Events",
  components: {
    EventsSidebar,
  },
};
</script>


<style scoped>
.Events {
  display: flex;
  flex-direction: row;
  background: rgb(244, 246, 247);
}
</style>
