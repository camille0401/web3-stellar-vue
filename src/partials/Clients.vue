<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
        <Particles class="absolute inset-0 -z-10" :quantity="5" />
      </div>

      <div class="py-4 md:py-4">
        <div class="overflow-hidden">
          <div
            class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804fbaba716f7cba0763_4.png" alt="Client 1">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804ed59f1ea192fb89db_5.png" alt="Client 2">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804e5fb1174d840c5ae2_6.png" alt="Client 3">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804e92d013a7a56968d7_7.png" alt="Client 4">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8054b1ce64e22df917cf_8.png" alt="Client 5">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8067013b421c39154921_10.png" alt="Client 6">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8189f05f96ac7ad0ad57_11.png" alt="Client 7">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8067f6c720503d854726_12.png" alt="Client 8">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c80670ab23c6f28978594_13.png" alt="Client 9">
              </li>
            </ul>
            <ul
              class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
              aria-hidden="true">
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804fbaba716f7cba0763_4.png" alt="Client 1">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804ed59f1ea192fb89db_5.png" alt="Client 2">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804e5fb1174d840c5ae2_6.png" alt="Client 3">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c804e92d013a7a56968d7_7.png" alt="Client 4">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8054b1ce64e22df917cf_8.png" alt="Client 5">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8067013b421c39154921_10.png" alt="Client 6">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8189f05f96ac7ad0ad57_11.png" alt="Client 7">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c8067f6c720503d854726_12.png" alt="Client 8">
              </li>
              <li>
                <img src="https://cdn.prod.website-files.com/66505f7fdc6935a2b4246635/672c80670ab23c6f28978594_13.png" alt="Client 9">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Clients',
  components: {
    Particles
  }
}
</script>