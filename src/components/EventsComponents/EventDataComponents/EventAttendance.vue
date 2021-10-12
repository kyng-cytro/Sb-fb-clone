<template>
    <div>
        <h3>Guest List</h3>
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
            <!-- This is where we want to include a list of the people invited -->
            <p v-show="invites.email.length !== 0">Invited by email</p>
            <ul v-for="email in invites.email" :key="email">
                <li>
                    {{email}}
                </li>
            </ul>
            <p v-show="invites.text.length !== 0">Invited by text:</p>
            <ul v-for="text in invites.text" :key="text">
                <li>
                    {{text}}
                </li>
            </ul>
            <p v-show="invites.friends.length !== 0">Friends Invited:</p>
            <ul v-for="friend in invites.friends" :key="friend">
                <li>
                    {{friend}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['numInvited', 'eventState', 'invites']
}
</script>

<style scoped>
#attendance {
    display: flex;
    flex-direction: row;
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

</style>