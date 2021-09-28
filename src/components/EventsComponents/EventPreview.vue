<template>
  <div>
    <p>This is a preview of the event.</p>
    <h1>{{event.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "Events",
  components: {
  },
  props: ["event"]
};
</script>
