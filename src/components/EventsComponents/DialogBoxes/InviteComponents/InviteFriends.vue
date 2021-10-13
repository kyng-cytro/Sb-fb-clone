<template>
    <div class="container">
        <!-- The following div is the search bar -->
        <div>
            <div class="input-icons">
                <i class="bi bi-search icon"></i>
                <input id="searchBox" class="input-field" type="text" placeholder="Search for friends by name">
            </div>
        </div>
        <div id="friendSelectionContainer">
            <InviteFriendsSidebarSuggestions />
            <InviteFriendsList />
        </div>
    </div>
</template>

<script>
import InviteFriendsList from "./InviteFriendsList.vue";
import InviteFriendsSidebarSuggestions from "./InviteFriendsSidebarSuggestions.vue"
    export default {
        props: ['invitedFriends'],
        components: {
            InviteFriendsList,
            InviteFriendsSidebarSuggestions 
        }
    }
</script>

<style>
.container {
    padding: 15px;
}

#searchBox {
    border-radius: 30px;
    width: 600px;
    height: 40px;
    display: inline-block;
    border: 0px solid #ccc;
    box-sizing: border-box;
    background-color: rgb(240,242,245);
}

#searchBox:focus {
    outline: 0px;
}

.input-icons i {
    position: absolute;
}
          
.input-icons {
    width: 100%;
    margin-bottom: 10px;
}
    
.icon {
    padding: 10px;
    min-width: 50px;
    text-align: center;
}
    
.input-field {
    width: 100%;
    padding: 10px;
    text-align: center;
}

#friendSelectionContainer {
    display: flex;
}
/* TODO: adjust the placeholder text such that it looks right */

/* #searchBox::placeholder {
    padding-left: 30px;
}

#searchBox::placeholder:hover {
    color: white;
    padding-left: 30px;
} */
</style>