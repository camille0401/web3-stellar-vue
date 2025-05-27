import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore(
  'app',
  () => {
    const triggerRefresh = ref(false);
  
    const notify = ()=> {
        triggerRefresh.value = !triggerRefresh.value;
    }
    return {
      triggerRefresh,
      notify
    };
  }
);