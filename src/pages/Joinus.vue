<template>
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <!-- Page content -->
      <main class="grow">
        <Hero />
        <Clients/>
      </main>
  
    </div>
  </template>
  
  <script>
  import Hero from '../partials/Joinhero.vue'
  import Stats from '../partials/Stats.vue'
  import Clients from '../partials/Clients.vue'
  
  export default {
    name: 'Pricing',
    components: {
      Hero,
      Stats,
      Clients
    },
  }
  </script>