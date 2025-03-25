<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Features />
      <Customers />
      <Faqs />
      <Cta />

    </main>

  </div>
</template>

<script>
import Hero from '../partials/PricingHero.vue'
import Features from '../partials/Features05.vue'
import Customers from '../partials/Customers.vue'
import Faqs from '../partials/Faqs.vue'
import Cta from '../partials/Cta.vue'

export default {
  name: 'Pricing',
  components: {
    Hero,
    Features,
    Customers,
    Faqs,
    Cta,
  },
}
</script>