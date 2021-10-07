<template>
    <div id="date">
        <div id="redBar">
        </div>
        <h1 id="dayText">
            {{this.date.toLocaleDateString("en-US", {day: 'numeric'})}}
        </h1>
    </div>
</template>

<script>
    export default {
       props: ['date'] 
    }
</script>

<style scoped>
  #date {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px rgb(217, 217, 217);
    text-align: center;
    background-color: white;
  }
  #redBar {
    height: 20px;
    background-color: rgb(247, 79, 79);
    border-radius: 8px 8px 0px 0px;
  }
  #dayText {
    font-weight: bold;
  }

</style>