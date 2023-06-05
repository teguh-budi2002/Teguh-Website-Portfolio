import { ref } from "vue";

export function handleDarkMode() {
  const themeMode = ref(localStorage.getItem("darkMode") === "true");

  const toggleDarkMode = () => {
    themeMode.value = !themeMode.value;
    localStorage.setItem("darkMode", themeMode.value.toString());
    setDarkMode();
  };
  const setDarkMode = () => {
    const html = document.documentElement;
    const body = document.body;
    if (themeMode.value) {
      html.classList.remove("turn-off-dark");
      html.classList.add("dark");
      body.classList.add("dark:bg-primary");
    } else {
      html.classList.remove("dark");
      html.classList.add("turn-off-dark");
      body.classList.remove("dark:bg-primary");
    }
  };

  return {
    toggleDarkMode,
    setDarkMode,
    themeMode,
  };
}
