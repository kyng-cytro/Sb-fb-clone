<template>
    <div>
        <div id="attendanceHeader">
            <h3>Guest List</h3>
            <button @click="showGuestList">See All</button>
        </div>
        <div id="attendance">
            <div class="item">
                <strong>1</strong>
                <p>GOING</p>
            </div>
            <div class="item">
                <strong>0</strong>
                <p>MAYBE</p>
            </div>
            <div class="item">
                <strong>{{numInvited}}</strong>
                <p>INVITED</p>
            </div>
        </div>
        <hr />
        <div v-if="this.eventState !== 'eventCreated'">
            <p id="hostName">{Username}</p>
            <p id="host">Host</p>
        </div>
        <div v-else>

        </div>
        <PopupDialog v-show="this.popupTriggers['guestsTrigger']" header="Guests" maxHeight="500px" minHeight="300px" :togglePopup="() => togglePopup('guestsTrigger')">
            <template v-slot:content>
                <AttendanceTabs>
                </AttendanceTabs>
            </template>
        </PopupDialog>
    </div>
</template>

<script>
import NonFacebookFriend from "@/vuex-orm_models/NonFacebookFriendModel.js";
import Friend from "@/vuex-orm_models/FriendModel.js";
import PopupDialog from "@/components/Multipurpose/PopupDialog.vue";
import AttendanceTabs from "@/components/EventsComponents/DialogBoxes/AttendanceComponents/AttendanceTabs.vue";

export default {
    props: ['eventState'],
    components: {
        PopupDialog,
        AttendanceTabs
    },
    data() {
        return {
            popupTriggers: {
                guestsTrigger: false
            },
        };
    },
    computed: {
        numInvited() {
            return NonFacebookFriend.all().length + Friend.query().where('selected', true).get().length;
        }
    },
    methods: {
        togglePopup(trigger) {
        //Invert the value passed in with trigger
        this.popupTriggers[trigger] = !this.popupTriggers[trigger];
        },
        showGuestList() {
            this.popupTriggers['guestsTrigger'] = true;
        }
    },
}
</script>

<style scoped>
#attendanceHeader {
    display: flex;
    justify-content: space-between;
}
#attendance {
    display: flex;
    flex-direction: row;
}


h3 {
  font-weight: bold;
  font-size: 1.4em;
}

.item {
    margin: 10px;
    padding: 5px;
    text-align: center;
}
strong {
    font-size: 1.2em;
}
p {
    font-weight: bold;
    color: grey;
    font-size: 0.9em;
}

#hostName {
    font-weight: normal;
    color: black;
    font-size: 0.9em;
}

#host {
    font-weight: normal;
    font-size: 0.8em;
}

button {
    outline: none;
    border-width: 0px;
    background-color: transparent;
    color: #216FDB;
}
button:hover {
    text-decoration: underline;
}
</style>