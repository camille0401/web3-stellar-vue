<template>
  <section class="relative">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Radial gradient -->
      <div
        class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true">
        <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      <!-- Particles animation -->
      <Particles class="absolute inset-0 h-96 -z-10" />
      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true">
        <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-20 md:pt-40 md:pb-24">
          <!-- Section header -->
          <div class="text-center pb-12 md:pb-20">
            <div
              class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
              HeaTrace AI's public fundraising</div>
            <h1
              class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Initial Public Offering</h1>
            <div style="margin-top: 80px;">
              <Stats />
            </div>
            <div class="max-w-6xl mx-auto px-4 sm:px-6" style="margin-top: 100px;">
              <HTAIProgress />
            </div>
          </div>
        </div>


      </div>
    </div>


  </section>
</template>

<script setup name="JoinHero">
import Particles from './Particles.vue'
import Stats from './Stats.vue'
import HTAIProgress from './HTAIProgress.vue';

</script>