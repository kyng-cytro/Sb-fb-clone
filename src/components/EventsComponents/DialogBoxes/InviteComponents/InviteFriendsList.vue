<template>
    <div class="container">
        <div>
            <button id="selectAll">
                Select All
            </button>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container {
    width: 400px;
}

#selectAll {
    background-color:transparent;
	border-radius:8px;
    border: 0px;
	display:inline-block;
	cursor:pointer;
	color: rgb(24,113,230);
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
	padding:16px 31px;
	text-decoration:none;   
}

#selectAll:hover {
	background-color: rgb(242,242,242);
}
#selectAll:active {
	position:relative;
	top:1px;
}

</style>