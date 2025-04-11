<template>
  <section class="relative htai-deposit-page">
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
              {{ $t("join.title1") }}</div>
            <h1
              class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              {{ $t("join.title2") }}</h1>
            <div class="mt-30">
              <Stats />
            </div>

            <div class="max-w-6xl mx-auto px-4 sm:px-6">
              <div class="pt-16 md:pt-32">
                <div class="relative pb-12 md:pb-20">
                  <Highlighter class="grid md:grid-cols-12 gap-6 group">
                    <!-- Box #2 -->
                    <div class="md:col-span-7" data-aos="fade-down">
                      <HighlighterItem :overflowHidden="false">
                        <div class="relative h-full bg-slate-900 rounded-[inherit] z-20">
                          <div class="flex flex-col">

                            <!-- Text -->
                            <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                              <div>
                                <p class="text-slate-400">Healtrace AI募集总资金5M，只接收Ethereum、BNB Smart Chain、Base、Arbiturm One
                                  4条链上的USDT进行存款，单次最小支付金额为100USDT，存款没有上线。
                                </p>
                              </div>
                            </div>
                            <!-- Image -->
                            <div class="relative w-full h-64 md:h-auto md:pb-8">
                              <div class="max-w-6xl mx-auto px-4 sm:px-6" style="margin-top: 100px;">
                                <HTAIProgress />
                              </div>
                            </div>
                          </div>
                        </div>
                      </HighlighterItem>
                    </div>
                    <!-- Box #3 -->
                    <div class="md:col-span-5" data-aos="fade-down">
                      <HighlighterItem :overflowHidden="false">
                        <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 p-5">
                          <HTAIDeposit />
                        </div>
                      </HighlighterItem>
                    </div>
                  </Highlighter>
                </div>
              </div>
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
import HTAIProgress from './HTAIProgress.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'
import HTAIDeposit from './HTAIDeposit.vue'

</script>