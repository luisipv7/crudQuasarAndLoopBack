<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            size="35px"
            round
            flat
            to="/"
            icon="arrow_back"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
