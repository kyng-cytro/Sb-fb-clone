<template>
    <div>
        <p>Start Time</p>
        <select v-model="timeString" name="timeLabel" id="timeID" class="dropdown">
            <option value="time" v-for="time in timeList" v-bind:key="time.name">{{time.name}}</option>
        </select>
        <p>{{selectedTime}}</p>
        <!-- <Dropdown
            :options="timeList"
            v-on:selected="selectTime"
            v-model="this.time"
            :disabled="false"
            name="Time"
            :maxItem="24*4"
            placeholder="Select time"
        ></Dropdown> -->
    </div>
</template>

<script>
// import Dropdown from 'vue-simple-search-dropdown';

    export default {
        components: {
            // Dropdown
        },
        methods: {
            selectTime() {
                console.log(this.time);
                console.log("Selected!");
            }
        },
        data() {
            return {
                timeString: ""
            }
        },
        computed: {
            timeList() {
                let minutes = ["00", "15", "30", "45"]
                let times = []
                let currentId = 1;
                let AM_PM = ["AM", "PM"]
                for (let am in AM_PM) {
                    for (let h = 12; h <=23; h++) {
                        console.log(h > 12 ? h % 12 : h);
                        for (let m in minutes) {
                            console.log(m);
                            times.push({
                                id: currentId,
                                name: (h > 12 ? h % 12 : h).toString() + ":" + minutes.at(m) + " " + AM_PM.at(am)
                            });
                            currentId++;
                        }
                    }
                }

                return times;
            },
        }
    }
</script>

<style scoped>
p {
    font-size: 0.9em;
    color: grey;
}

.dropdown {
    border: none;
    background-color: white;
    font-size: 1.3em;
    font-weight: 300;
    color: #0e0e0e;
}

.dropdown:focus {
    border: none;
}


</style>