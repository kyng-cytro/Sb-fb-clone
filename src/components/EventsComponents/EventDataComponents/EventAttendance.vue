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
                <strong>0</strong>
                <p>INVITED</p>
            </div>
        </div>
        <hr />
        <div>
            <p id="hostName">{Username}</p>
            <p id="host">Host</p>
        </div>
    </div>
</template>

<script>
export default {

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