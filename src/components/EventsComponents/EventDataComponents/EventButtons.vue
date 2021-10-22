<template>
    <div>
        <div id="container">
            <div id="buttons">
                <button class="btn btn-secondary" @click="click('friendsTrigger')">
                    <i class="bi bi-telegram"></i>
                    Invite
                </button>
                <button class="btn btn-secondary">
                    <i class="bi bi-pencil-fill"></i>
                    Edit
                </button>
                <button class="btn btn-secondary" >
                   <i class="bi bi-three-dots"></i> 
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventButtons",
    methods: {
        click(trigger) {
            this.$emit('buttonClick', trigger);
        }
    },
}
</script>

<style scoped>
#container {
    display: flex;
}
#buttons {
    /* display: flex; */
    /* flex-direction: row;
    align-items: flex-end; */
    margin-left: auto;
    padding: 10px;
}

button {
    background-color: rgb(235,235,235);
    border-color: rgb(235,235,235);
    color: black;
    margin: 5px;
  }
.btn-secondary {
  color: black;
  padding: 10px;
  background-color: hsl(0, 0%, 92%);
  border: 0px;
  border-radius: 6px;
  font-weight: bold;
  font-size: .9em;
}
.btn-secondary:hover {
  color: black;
  background-color: hsl(0, 0%, 82%);
  transition: 0.3s;
}

.btn-secondary:focus {
  outline: none;
  border: none;
}
</style>