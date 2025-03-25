<template>
  <div>
    <!-- Content -->
    <section class="relative">

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
        <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427"
          alt="Page Illustration">
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">

          <!-- Page header -->
          <div class="text-center pb-12 md:pb-20">
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{{$t("changelog.changelog_title")}} </h2>
            <!-- <div class="max-w-3xl mx-auto">
              <p class="text-lg text-slate-400">{{$t("changelog.changelog_sub_title")}}</p>
            </div> -->
          </div>

          <!-- Content -->
          <div class="max-w-3xl mx-auto">
            <div class="relative">
              <div
                class="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:linear-gradient(0deg,transparent,var(--color-white)_150px,var(--color-white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,transparent,--theme(--color-purple-500/.65)_25%,--theme(--color-purple-200)_50%,--theme(--color-purple-500/.65)_75%,transparent)] after:animate-shine"
                aria-hidden="true"></div>
              <!-- Post -->
              <article class="pt-12 first-of-type:pt-0 group">
                <div class="md:flex">
                  <div class="w-48 shrink-0">
                    <time
                      class="text-sm inline-flex items-center bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                      <span class="ml-[1.625rem] md:ml-5">{{$t("changelog.season1_name")}}</span>
                    </time>
                  </div>
                  <div
                    class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1] group-last-of-type:border-none">
                    <header>
                      <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                        {{$t("changelog.season1_title")}}</h2>
                    </header>
                    <div
                      class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                      <p>{{$t("changelog.season1_desc")}}</p>
                      <ul>
                        <li>{{$t("changelog.season1_item01_text")}}</li>
                        <li>{{$t("changelog.season1_item02_text")}}</li>
                        <li>{{$t("changelog.season1_item03_text")}}</li>
                        <li>{{$t("changelog.season1_item04_text")}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <!-- Post -->
              <article class="pt-12 first-of-type:pt-0 group">
                <div class="md:flex">
                  <div class="w-48 shrink-0">
                    <time
                      class="text-sm inline-flex items-center bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                      <span class="ml-[1.625rem] md:ml-5">{{$t("changelog.season2_name")}}</span>
                    </time>
                  </div>
                  <div
                    class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1] group-last-of-type:border-none">
                    <header>
                      <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                        {{$t("changelog.season2_title")}}</h2>
                    </header>
                    <div
                      class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                      <p>{{$t("changelog.season2_desc")}}</p>
                      <ul>
                        <li>{{$t("changelog.season2_item01_text")}}</li>
                        <li>{{$t("changelog.season2_item02_text")}}</li>
                        <li>{{$t("changelog.season2_item03_text")}}</li>
                        <li>{{$t("changelog.season2_item04_text")}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <!-- Post -->
              <article class="pt-12 first-of-type:pt-0 group">
                <div class="md:flex">
                  <div class="w-48 shrink-0">
                    <time
                      class="text-sm inline-flex items-center bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                      <span class="ml-[1.625rem] md:ml-5">{{$t("changelog.season3_name")}}</span>
                    </time>
                  </div>
                  <div
                    class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1] group-last-of-type:border-none">
                    <header>
                      <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                        {{$t("changelog.season3_title")}}</h2>
                    </header>
                    <div
                      class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                      <p>{{$t("changelog.season3_desc")}} </p>
                      <ul>
                        <li>{{$t("changelog.season3_item01_text")}}</li>
                        <li>{{$t("changelog.season3_item02_text")}}</li>
                        <li>{{$t("changelog.season3_item03_text")}}</li>
                        <li>{{$t("changelog.season3_item04_text")}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <!-- Post -->
              <article class="pt-12 first-of-type:pt-0 group">
                <div class="md:flex">
                  <div class="w-48 shrink-0">
                    <time
                      class="text-sm inline-flex items-center bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                      <span class="ml-[1.625rem] md:ml-5">{{$t("changelog.season4_name")}}</span>
                    </time>
                  </div>
                  <div
                    class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1] group-last-of-type:border-none">
                    <header>
                      <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                        {{$t("changelog.season4_title")}}</h2>
                    </header>
                    <div
                      class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                      <ul>
                        <li>{{$t("changelog.season4_desc")}}</li>
                        <li>
                          <p>{{$t("changelog.season4_desc1")}}</p>
                          <ul>
                            <li>{{$t("changelog.season4_desc1_item01_text")}}</li>
                            <li>{{$t("changelog.season4_desc1_item02_text")}}</li>
                            <li>{{$t("changelog.season4_desc1_item03_text")}}</li>
                          </ul>
                        </li>
                        <li>{{$t("changelog.season4_desc2")}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import Particles from '../partials/Particles.vue'
export default {
  name: 'Changelog',
  components: {
    Particles,
  },
}
</script>