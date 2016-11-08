<template>
<aside class="aside-container">
    <ul>
        <li class="type-divider">元组件</li>
        <li class="">
            <!-- <router-link :to="'home'"  :to="{name:'user' path='home' params: {}, query:{}}  replace/append"  ></router-link>-->
            <!-- exact是否激活  tag 渲染标签 -->
            <router-link to="/dialog" append>dialog</router-link>
        </li>
    </ul>
</aside>
</template>
<script lang="">
    export default {
    }
</script>