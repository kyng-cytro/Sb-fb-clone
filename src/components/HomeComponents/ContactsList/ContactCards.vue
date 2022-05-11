<template>
    <div class="contact">
        <div class="verticalAlign">
            <FriendDisplay :friend="this.friend"/>
        </div>
    </div>
</template>

<script>
import FriendDisplay from "@/components/Multipurpose/FriendDisplay";

export default {
  props: ["friend"],
  components: {
    FriendDisplay,
  }
}
</script>

<style scoped>
.contact {
  display: flex;
  align-items: baseline;
  padding: 15px 0 15px 10px;
  width: 100%;
}
.contact:hover {
  background: #ddd;
  border-radius: 20px;
}
</style>