<template>
    <div>
        <!-- <p>Start Time</p> -->
        <!-- <select v-model="timeString" name="timeLabel" id="timeID" class="dropdown">
            <option :value="time.name" v-for="time in timeList" v-bind:key="time.id">{{time.name}}</option>
        </select> -->
        <b-dropdown v-model="timeString" boundary="scrollParent" id="dropdown-1" text="Time" variant="light" class="m-md-2 my-class">
            <b-dropdown-item
            :value="time.name"
            v-for="time in timeList"
            @click="setTime(time.name)"
            v-bind:key="time.id">{{time.name}}
            </b-dropdown-item>
        </b-dropdown>
        <p>{{timeString}}</p>

    </div>
</template>

<script>
    export default {
          mounted() {
            this.$root.$on('bv::dropdown::show', bvEvent => {
                console.log('Dropdown is about to be shown', bvEvent)
            })
        },
        components: {
        },
        methods: {
            setTime(time) {
                this.timeString = time;
            },
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
        computed: {
            timeList() {
                let today = new Date();
                let minutes = ["00", "30"]
                let times = []
                let currentId = 1;
                let AM_PM = today.getHours() >= 12 ? ["PM"] : ["AM", "PM"]
                for (let am in AM_PM) {
                    for (let h = today.getHours(); h <= 23; h++) {
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

  .my-class /deep/ .dropdown-menu {
    max-height: 200px;
    overflow-y: auto;
  }
</style>