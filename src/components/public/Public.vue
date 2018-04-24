<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <main-footer/>
  </v-app>
</template>
<script>
import MainFooter from '@/components/common/MainFooter'

export default {
  name: 'Public',
  components: {
    MainFooter
  }
}
</script>
