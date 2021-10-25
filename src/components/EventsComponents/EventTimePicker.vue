<template>
    <div>
        <p>Start Time</p>
        <Dropdown
            :options="timeList"
            v-on:selected="validateSelection"
            v-on:filter="getDropdownValues"
            :disabled="false"
            name="zipcode"
            :maxItem="10"
            placeholder="Please select an option">
        ></Dropdown>
    </div>
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown';

    export default {
        components: {
            Dropdown
        },
        computed: {
            timeList() {
                let minutes = ["00", "15", "30", "45"]
                let times = []
                let currentId = 1;
                for (let am in ["AM", "PM"]) {
                    for (let h = 1; h <=12; h++) {
                        for (let m in minutes) {
                            times.push({
                                id: currentId,
                                name: h.toString() + ":" + m + " " + am
                            });
                            currentId++;
                        }
                    }
                }

                return times;
            }
        }
    }
</script>

<style scoped>

</style>