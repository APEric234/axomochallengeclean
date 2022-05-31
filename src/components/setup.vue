<template>
    <h1>SETUP GUIDE</h1>
    <div class="hello">
        <div class="card">
            <div class="cardinner">
                <div class="cardfront">
                    <p>Create store</p>
                    <img src="https://namify.axomo.com/framework/images/acievmentsicon3.svg" />
                </div>
                <div class="cardback">
                    <p>Hooray You're  almost ready to start promoting the cause you care about with an AXOMO brand store.</p><br />
                    <h2>Weight:</h2><p>50</p><br /><h2>Completed:</h2><p>?</p><br />
                    <h2>Completed by:</h2><p>?</p><br /><h2>Progress:</h2><p>?</p><br />
                    <a href="/makestore">Go to Page</a>
                </div>

            </div>
        </div>
        <div class="card two">
        <div class="cardinner">
            <div class="cardfront">
                <p>first store item</p>
                <img src="https://namify.axomo.com/framework/images/acievmentsicon5.svg" />
            </div>
            <div class="cardback">
                <p>Add the first item to your store.</p><br />
                <h2>Weight:</h2><p>50</p><br /><h2>Completed:</h2><p>?</p><br />
                <h2>Completed by:</h2><p>?</p><br /><h2>Progress:</h2><p>?</p><br />
                <a href="/storeitem">Go to Page</a>
            </div>

        </div>
    </div>

    </div>
</template>

<script>
    export default {
        name: 'setUp',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/styles/mainpage.css';
    .hello{
    
    }
    .card {
        min-height: 400px;
        float: left;
        font-size: 9px;
        background-color: transparent;
        width: 25vw;
        height: 40vw;
        border: 1px solid #f1f1f1;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }
    .card.two{
        float:right;
    }

    .cardinner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .card:hover .cardinner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .cardfront, .cardback {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .cardfront {
        background-color: #bbb;
        color: black;
    }

    /* Style the back side */
    .cardback {
        background-color: dodgerblue;
        color: white;
        transform: rotateY(180deg);
    }
</style>
