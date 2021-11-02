<template>
    <div>
        <p>Start Time</p>
        <select v-model="timeString" name="timeLabel" id="timeID" class="dropdown">
            <option :value="time.name" v-for="time in timeList" v-bind:key="time.id">{{time.name}}</option>
        </select>
        <!-- <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div> -->
        <!-- <p>{{selectedTime}}</p> -->
    </div>
</template>

<script>

    export default {
        components: {
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
        watch: {
            timeString (newTime) {
                console.log("You just changed the time!");
                console.log(newTime);
                this.$emit('updateTime', newTime);
            }
        },
        // created() {
        //     let jQuery = document.createElement('script')
        //     jQuery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
        //     document.head.appendChild(jQuery)

        //     let bootstrapJS = document.createElement('script')
        //     bootstrapJS.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
        //     document.head.appendChild(bootstrapJS)
        // },
        computed: {
            timeList() {
                // let today = new Date();
                // let currentHours = today.getHours();
                let minutes = ["00", "15", "30", "45"]
                let times = []
                let currentId = 1;
                let AM_PM = ["AM", "PM"]
                for (let am in AM_PM) {
                    for (let h = 12; h <= 23; h++) {
                    // for (let h = currentHours; h <= 23 - currentHours; h++) {
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

/* .dropdown {
    border: none;
    background-color: white;
    font-size: 1.3em;
    font-weight: 300;
    color: #0e0e0e;
}

.dropdown:focus {
    border: none;
} */


</style>