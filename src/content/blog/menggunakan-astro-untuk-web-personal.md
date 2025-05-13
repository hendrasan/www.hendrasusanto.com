---
title: Menggunakan Astro untuk Web Personal
excerpt: Di post ini, saya akan sharing pengalaman saya menggunakan dan deploy Astro untuk membuat web personal ini.
publishDate: 'May 13 2025'
isFeatured: true
tags:
  - Astro
  - Indonesia
seo:
  image:
    src: '/blog/text-overflow.png'
    alt: Text overflow
---

Di post ini, saya akan sharing pengalaman saya menggunakan dan deploy Astro untuk membuat web personal ini.

## Kenapa Saya Pilih Astro?

Selain karena memang pakai base template Astro yang sudah ada, Astro jadi pilihan saya karena:

1. **Development Mudah**: Saya butuh tools/framework yang mudah digunakan untuk menulis content dan juga yang mudah untuk dikustomisasi. File `.astro` cukup mirip dengan Vue/React/Svelte, dan Astro juga bisa menggunakan framework-framework tersebut jika perlu. Untuk menulis content, saya bisa tulis dengan format markdown atau MDX.

2. **Kencang**: Skor Google Lighthouse/Pagespeed Insight untuk web ini 85 untuk mobile dan 99 untuk desktop. Ini juga karena saya menggunakan Google Analytics, yang mempengaruhi skor Pagespeed Insight. Jika tidak menggunakan Google Analytics, jualan utama Astro adalah skor Google Lighthouse 100/100.

3. **Deployment Mudah**: Kita bisa deploy ke Netlify, Vercel, Github Pages atau lainnya. Di dokumentasi Astro lengkap panduan untuk deploy ke berbagai platform. Saya sendiri menggunakan SSG yang hasilnya saya deploy ke server VPS saya dengan menggunakan Github Action. Jadi setiap kali saya push ke branch `main`, website ini akan otomatis ter-deploy.

Selain itu, masih banyak lagi fitur-fitur yang ditawarkan Astro, selengkapnya bisa dilihat di <a target="_blank" href="https://docs.astro.build">dokumentasi Astro</a>.

Source code dari web ini bisa dilihat <a target="_blank" href="https://github.com/hendrasan/www.hendrasusanto.com">di sini</a>.
