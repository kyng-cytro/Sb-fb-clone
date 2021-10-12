<template>
    <div class="popup">
        <div class="popup-inner">
            <div class="header">
                <h2>{{header}}</h2>
                <div class="close">
                    <button @click="togglePopup()">×</button>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: ['togglePopup', 'header']
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(224, 224, 224, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner {
    background-color: white;
    padding: 32px;
    border-radius: 8px;
    /* box-shadow: 0px, 0px, 5px, rgb(200, 200, 200); */
    box-shadow: 0px 0px 16px 8px #cac9c9;
}
</style>