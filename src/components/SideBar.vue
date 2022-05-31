<template>
    <div class="top">
        <a href="/adminPanel">Admin Panel</a>
        <a href="/StoreFront">Storefront</a>
    </div>
    <div class="side">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="menu"><a href="#">About</a></div>
        <div class="menu">
            <a href="#">Search</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Home</a>
            <ul class="list">
                <li><router-link to="/">Dashboard</router-link></li>
                <li><router-link to="/setup">Setup Guide</router-link></li>
            </ul>
        </div>
        <div class="menu">
            <a href="#">User Management</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Gifts &<br /> rewards</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Items</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Orders</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Checkout & Shipping</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Store Design</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Marketing</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Finance</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Subscription</a>
            <ul class="list">
            </ul>
        </div>
        <div class="menu">
            <a href="#">Help</a>
            <ul class="list">
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'SideMenu',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/styles/mainpage.css';
</style>
