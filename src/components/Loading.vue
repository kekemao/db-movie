<template>
    <div :class="['ui-loading-block','show']" v-if="show">
        <div class="ui-loading-cnt">
            <i class="ui-loading-bright"></i>
        </div>
        <!-- <p>{{{works}}</p> -->
    </div>

</template>
<script>
    export default {
      props: ['show', 'works']
        /* props:{
            show:Boolean
        } */
    }
</script>
