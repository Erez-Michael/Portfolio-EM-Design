export const useScrollToTop = () => {
    const visible = ref(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      visible.value = scrolled > 300;
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    onMounted(() => {
      window.addEventListener("scroll", toggleVisible);
    });
  
    onUnmounted(() => {
      window.removeEventListener("scroll", toggleVisible);
    });
  
    return { visible, scrollToTop };
  };
  