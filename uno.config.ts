import { defineConfig, presetAttributify, presetWind } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetWind(),
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
  ],
  theme: {
    breakpoints: {
      mobile: "430px",
      tablet: "768px",
      desktop: "1024px",
    },
    extend: {},
    shortcuts: [
      ["text-headline", ""],
      ["text-normal", ""],
    ],
  },
});
