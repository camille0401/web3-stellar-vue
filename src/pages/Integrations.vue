<template>
  <div>
    <Hero />
    <IntegrationsList />
    <!-- <Cta /> -->
  </div>
</template>

<script>
import Hero from '../partials/IntegrationsHero.vue'
import IntegrationsList from '../partials/IntegrationsList.vue'
import Cta from '../partials/Cta04.vue'

export default {
  name: 'Integrations',
  components: {
    Hero,
    IntegrationsList,
    Cta,
  },
}
</script>