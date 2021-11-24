<template>
    <div class="container">
        <!-- HEADER -->
        <FriendDisplay :friend="this.user" :bold="true"></FriendDisplay>

        <br />
        <!-- TEXT ENTRY -->
        <div class="textarea">
            <textarea
                :ref="'postText'"
                :placeholder="'What\'s on your mind, ' + user.name + '?'"
                :style="textAreaStyles"
                v-model="postBeingCreated.text"></textarea>
        </div>

        <!-- CHECKBOXES -->
        <tr v-b-tooltip.hover title="Friends can see your post but not interact with it">
            <td>
                <p>View only</p>
            </td>
            <td>
                <input v-model="postBeingCreated.filter.isPostViewOnly" type="checkbox">
            </td>
        </tr>

        <tr v-b-tooltip.hover title="Mark post as a major event so friends with the major event filter can view post">
            <td>
                <p>Major event</p>
            </td>
            <td>
                <input v-model="postBeingCreated.filter.isMajorEvent" type="checkbox">
            </td>
        </tr>
    </div>
</template>

<script>
import FriendDisplay from "@/components/Multipurpose/FriendDisplay"
    export default {
        data() {
            return {
                postBeingCreated: {
                    text: "",
                    friend: this.user,
                    filter: {
                        isMajorEvent: false,
                        isPostViewOnly: false,
                    }
                },
            }
        },
        mounted() {
            this.focusInput();
        },
        updated() {
            this.focusInput();
        },
        props: ['user'],
        components: {
            FriendDisplay
        },
        methods: {
            focusInput() {
                this.$refs.postText.focus();
            }
        },
        computed: {
            textAreaStyles() {
                let styles = `
                    width: 100%;
                    border: none;
                    resize: none;
                    outline: none;
                    overflow: hidden;
                `;
                styles += this.postBeingCreated.text.length < 61 ? 'font-size: 1.7em;' : 'font-size: 1em;' ;
                return styles;
            }
        }
    }
</script>

<style scoped>
.container {
    padding: 4%;
}
textarea {

}

/* TODO: IF TEXT IS MORE THAN 61 CHARACTERS, SHRINK DOWN TO 1EM FONT-SIZE */
</style>