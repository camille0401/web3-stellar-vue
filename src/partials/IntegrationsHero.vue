<template>
  <section class="relative">

    <!-- Illustration 02 -->
    <div
      class="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10"
      aria-hidden="true">
      <img src="../images/page-illustration-02.svg" class="max-w-none" width="1440" height="427"
        alt="Page Illustration 02">
    </div>

    <!-- Opacity layer -->
    <div class="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div>

    <!-- Radial gradient -->
    <div
      class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
      aria-hidden="true">
      <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
      <div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
    </div>

    <!-- Particles animation -->
    <Particles class="absolute inset-0 h-96 -z-10" :quantity="15" />

    <!-- Illustration -->
    <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
      aria-hidden="true">
      <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 md:pt-40">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-20">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">{{$t("integrations.integrations_tips")}}</div>
          <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{{$t("integrations.integrations_title")}}</h2>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-slate-400">{{$t("integrations.integrations_desc")}}</p>
          </div>
        </div>

        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
            <!-- Blurred shape -->
            <div class="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stop-color="#6366F1" />
                    <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <path fill="url(#bs2-a)" fill-rule="evenodd" d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)" />
              </svg>
            </div>
            <!-- Grid -->
            <Highlighter class="grid md:grid-cols-12 gap-6 group">
              <!-- Box #1 -->
              <div class="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                      <!-- Blurred shape -->
                      <div class="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                          <defs>
                            <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                              <stop offset="0%" stop-color="#6366F1" />
                              <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#bs-a)" fill-rule="evenodd" d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)" opacity=".7" />
                        </svg>
                      </div>
                      <!-- Radial gradient -->
                      <div
                        class="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true">
                        <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70">
                        </div>
                        <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                      </div>
                      <!-- Image -->
                      <div class="relative w-full h-64 md:h-auto overflow-hidden">
                        <img
                          class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0 md:translate-x-0"
                          :src="$t('integrations.integrations_image')"  width="1000" height="400" alt="Feature 01" style="width: 100%; height: 100%;">
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              <!-- Box #2 -->

              <!-- Box #3 -->

            </Highlighter>
          </div>

        <!-- <IntegrationsCarousel /> -->

      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'
import IntegrationsCarousel from './IntegrationsCarousel.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'

export default {
  name: 'IntegrationsHero',
  components: {
    Particles,
    IntegrationsCarousel,
    Highlighter,
    HighlighterItem
  },
}
</script>