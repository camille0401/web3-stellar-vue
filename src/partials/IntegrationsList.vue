<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <div class="pb-12 md:pb-20">
        <!-- Tobpabr -->


        <!-- Cards -->
        <div>
          <!-- Section #1 -->
          <div class="mt-12 md:mt-16">
            <h3 id="engineering"
              class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
              {{ $t("integrations.list_category1_name") }}</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.group === 'item01'" :item="item" />
              </template>

            </div>
          </div>
          <!-- Section #2 -->
          <div class="mt-12 md:mt-16">
            <h3 id="nocode"
              class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
              {{ $t("integrations.list_category2_name") }}</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.group === 'item02'" :item="item" />
              </template>

            </div>
          </div>
          <!-- Section #3 -->
          <div class="mt-12 md:mt-16">
            <h3 id="collaboration"
              class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
              {{ $t("integrations.list_category3_name") }}</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.group === 'item03'" :item="item" />
              </template>

            </div>
          </div>
          <!-- Section #4 -->
          <div class="mt-12 md:mt-16">
            <h3 id="productivity"
              class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
              {{ $t("integrations.list_category4_name") }}</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.group === 'item04'" :item="item" />
              </template>

            </div>
          </div>

          <!-- Section #5 -->
          <div class="mt-12 md:mt-16">
            <h3 id="productivity"
              class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
              {{ $t("integrations.list_category5_name") }}</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.group === 'item05'" :item="item" />
              </template>

            </div>
          </div>

          <!-- Section #6 -->
          <div class="mt-12 md:mt-16">
            <h3 id="productivity"
              class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
              {{ $t("integrations.list_category6_name") }}</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.group === 'item06'" :item="item" />
              </template>

            </div>
          </div>


        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import IntegrationCard from './IntegrationCard.vue'
import IntegrationsImg01 from '../images/integrations-01.svg'
import IntegrationsImg02 from '../images/integrations-02.svg'
import IntegrationsImg03 from '../images/integrations-03.svg'
import IntegrationsImg04 from '../images/integrations-04.svg'
import IntegrationsImg05 from '../images/integrations-05.svg'
import IntegrationsImg06 from '../images/integrations-06.svg'
import IntegrationsImg07 from '../images/integrations-07.svg'
import IntegrationsImg08 from '../images/integrations-08.svg'
import IntegrationsImg09 from '../images/integrations-09.svg'
import IntegrationsImg10 from '../images/integrations-10.svg'
import IntegrationsImg11 from '../images/integrations-11.svg'
import IntegrationsImg12 from '../images/integrations-12.svg'
import IntegrationsImg13 from '../images/integrations-13.svg'
import IntegrationsImg14 from '../images/integrations-14.svg'
import IntegrationsImg15 from '../images/integrations-15.svg'
import IntegrationsImg16 from '../images/integrations-16.svg'
import IntegrationsImg17 from '../images/integrations-17.svg'
import IntegrationsImg18 from '../images/integrations-18.svg'
import IntegrationsImg19 from '../images/integrations-19.svg'
import IntegrationsImg20 from '../images/integrations-20.svg'
import IntegrationsImg21 from '../images/integrations-21.svg'
import IntegrationsImg22 from '../images/integrations-22.svg'
import IntegrationsImg23 from '../images/integrations-23.svg'
import IntegrationsImg24 from '../images/integrations-24.svg'

const I18n = useI18n();
const items = [
  {
    img: IntegrationsImg06,
    name: "integrations.list_category1_item1_name",
    description: "integrations.list_category1_item1_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category1_name",
    group:"item01"
  },
  {
    img: IntegrationsImg07,
    name: "integrations.list_category1_item2_name",
    description: "integrations.list_category1_item2_desc",
    link: '/integrations-single',
    featured: false,
    category: "integrations.list_category1_name",
    group:"item01"
  },
  {
    img: IntegrationsImg04,
    name: "integrations.list_category1_item3_name",
    description: "integrations.list_category1_item3_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category1_name",
    group:"item01"
  },
  {
    img: IntegrationsImg08,
    name: "integrations.list_category2_item1_name",
    description: "integrations.list_category2_item1_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category2_name",
    group:"item02"
  },
  {
    img: IntegrationsImg05,
    name: "integrations.list_category2_item2_name",
    description: "integrations.list_category2_item2_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category2_name",
    group:"item02"
  },
  {
    img: IntegrationsImg01,
    name: "integrations.list_category2_item3_name",
    description: "integrations.list_category2_item3_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category2_name",
    group:"item02"
  },
  {
    img: IntegrationsImg02,
    name: "integrations.list_category3_item1_name",
    description: "integrations.list_category3_item1_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category3_name",
    group:"item03"
  },
  {
    img: IntegrationsImg03,
    name: "integrations.list_category3_item2_name",
    description: "integrations.list_category3_item2_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category3_name",
    group:"item03"
  },
  {
    img: IntegrationsImg15,
    name: "integrations.list_category3_item3_name",
    description: "integrations.list_category3_item3_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category3_name",
    group:"item03"
  },
  {
    img: IntegrationsImg09,
    name: "integrations.list_category4_item1_name",
    description: "integrations.list_category4_item1_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category4_name",
    group:"item04"
  },
  {
    img: IntegrationsImg10,
    name: "integrations.list_category4_item2_name",
    description: "integrations.list_category4_item2_desc",
    link: '/integrations-single',
    featured: false,
    category: "integrations.list_category4_name",
    group:"item04"
  },
  {
    img: IntegrationsImg11,
    name: "integrations.list_category4_item3_name",
    description: "integrations.list_category4_item3_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category4_name",
    group:"item04"

  },
  {
    img: IntegrationsImg12,
    name: "integrations.list_category5_item1_name",
    description: "integrations.list_category5_item1_desc",
    link: '/integrations-single',
    featured: false,
    category: "integrations.list_category5_name",
    group:"item05"
  },
  {
    img: IntegrationsImg13,
    name: "integrations.list_category5_item2_name",
    description: "integrations.list_category5_item2_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category5_name",
    group:"item05"
  },
  {
    img: IntegrationsImg14,
    name: "integrations.list_category5_item3_name",
    description: "integrations.list_category5_item3_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category5_name",
    group:"item05"
  },
  {
    img: IntegrationsImg15,
    name: "integrations.list_category6_item1_name",
    description: "integrations.list_category6_item1_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category6_name",
    group:"item06"
  },
  {
    img: IntegrationsImg16,
    name: "integrations.list_category6_item2_name",
    description: "integrations.list_category6_item2_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category6_name",
    group:"item06"
  },
  {
    img: IntegrationsImg17,
    name: "integrations.list_category6_item3_name",
    description: "integrations.list_category6_item3_desc",
    link: '/integrations-single',
    featured: true,
    category: "integrations.list_category6_name",
    group:"item06"
  },
 
]

</script>