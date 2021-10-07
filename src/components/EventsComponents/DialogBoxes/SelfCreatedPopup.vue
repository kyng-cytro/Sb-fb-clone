<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close" @click="togglePopup()">
                Close popup
            </button>
        </div>
    </div>
</template>

<script>
    export default {
       props: ['togglePopup'] 
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
}
</style>