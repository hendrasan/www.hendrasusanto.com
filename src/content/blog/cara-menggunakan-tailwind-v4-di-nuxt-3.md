---
title: Cara Menggunakan Tailwind v4 di Nuxt 3
excerpt: Modul @nuxtjs/tailwindcss hanya mendukung Tailwind v3. Lantas, bagaimana cara menggunakan Tailwind v4 di Nuxt 3?
publishDate: 'May 19 2025'
isFeatured: true
tags:
  - Nuxt
  - Indonesia
---

Jika ingin menggunakan Tailwind di Nuxt, mungkin kalau kita google, akan diarahkan untuk install modul `@nuxtjs/tailwindcss`.

Tapi kalau kita lihat di `package.json` modul tersebut di <a href="https://github.com/nuxt-modules/tailwindcss/blob/main/package.json" target="_blank" rel="noopener noreferrer">Github</a>, kita bisa lihat bahwa modul tersebut hanya mendukung Tailwind v3.

Lantas bagaimana kalau kita ingin menggunakan Tailwind v4 di Nuxt 3? Ternyata jawabannya cukup sederhana, kita cukup install Tailwind dengan Vite, seperti yang ada di <a href="https://tailwindcss.com/docs/installation/framework-guides/nuxt" target="_blank" rel="noopener noreferrer">dokumentasi Tailwind</a>.

Berikut adalah langkah-langkahnya:

1. Install Nuxt 3

```bash
npm create nuxt test-nuxt-tailwind
cd test-nuxt-tailwind
```

2. Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/vite
```

3. Ubah file `nuxt.config.ts` menjadi seperti ini:

```ts
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
});
```

4. Buat file `./assets/css/main.css` dan isi dengan:

```css
@import 'tailwindcss';
```

5. Ubah file `./app.vue` menjadi seperti ini:

```vue
<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
```

6. Jalankan proses build

```bash
npm run dev
```
