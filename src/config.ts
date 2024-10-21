import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "AnAncientForce",
  subtitle: "Blog",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 0, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/IMG_20240717_125710020.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true, // Display the credit text of the banner image
      text: "AnAncientForce", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  favicon: [
    {
       src: '/favicon/140619284.png',    // Path of the favicon, relative to the /public directory
       //theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
       //sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
     }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/AnAncientForce", // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/Wuthering-Waves-Camellya.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "AnAncientForce",
  bio: "My primary interests are AI, Anime, Gaming, Programming and Roller Coasters. Let the fun begin ｡◕‿◕｡",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github", // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: "https://github.com/AnAncientForce/AnAncientForce",
    },
    {
      name: "Tockdom",
      icon: "hugeicons:super-mario-toad",
      url: "https://wiki.tockdom.com/wiki/User:Ayzula",
    },
    {
      name: "Pixiv",
      icon: "fa6-brands:pixiv",
      url: "https://pixiv.me/sobsynapse",
    },
    {
      name: "Civitai",
      icon: "hugeicons:artificial-intelligence-04",
      url: "https://civitai.com/user/Sobsynapse",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
