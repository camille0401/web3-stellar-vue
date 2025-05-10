<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Blocks -->
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-12 order-1 lg:order-none">
          <div class="h-full flex flex-row sm:flex-row lg:flex-row justify-between flex-wrap">
            <div class="mb-4 sm:mb-0 flex flex-row sm:flex-row lg:flex-row items-center">
              <div class="mr-2">
                <!-- Logo -->
                <router-link class="relative" to="/" aria-label="Cruip" style="top:2px;">
                  <img src="../images/logo.png" width="80" alt="Stellar">
                </router-link>
              </div>
              <div class="text-sm text-slate-300">&copy; {{ $t("global.footer_copy_text1") }}
                <span class="text-slate-500">-</span>{{ $t("global.footer_copy_text2") }}
              </div>
            </div>
            <!-- Social links -->
            <ul class="flex items-center">
              <li class="flex justify-center items-center">
                <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                  href="https://x.com/healtraceAI" target="_blank" aria-label="Twitter">
                  <svg class="w-12 h-12 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"
                      transform="scale(1.5) translate(0 0)" />
                  </svg>
                </a>
              </li>
              <li class="flex justify-center items-center ml-2">
                <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                  href="https://t.me/HealTraceAi" target="_blank" aria-label="Telegram">
                  <svg class="w-12 h-12 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.163 16-16S24.836 0 16 0zm6.595 10.728-2.2 10.4c-.166.75-.623.93-1.263.578l-3.49-2.58-1.662 1.6c-.183.178-.336.328-.687.328l.247-3.455 6.291-5.686c.274-.244-.06-.381-.425-.137L10.74 17.48l-3.4-1.062c-.74-.23-.756-.74.157-1.097l13.522-5.213c.622-.24 1.16.159.923 1.62z"
                      transform="scale(1) translate(8, 8)" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
