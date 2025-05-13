---
title: Tentang text-overflow ellipsis di CSS
excerpt: Sedikit penjelasan tentang text-overflow ellipsis di CSS
publishDate: 'May 1 2025'
isFeatured: true
tags:
  - CSS
  - Indonesia
seo:
  image:
    src: '/blog/text-overflow.png'
    alt: Text overflow
---

![Text overflow](/blog/text-overflow.png)

Ketika menggunakan properti text-overflow di CSS untuk memotong kata yang muncul dalam suatu container, mungkin kita berpikir kalau cukup dengan 1 line begini saja

```css
span {
  text-overflow: ellipsis;
}
```

Tentu saja, jika hanya menggunakan 1 line tersebut, hasilnya tidak akan jalan. Untuk menggunakan text-overflow: ellipsis, ada beberapa syarat:

1. Element tersebut harus mempunyai display: block, tidak bisa inline-block atau flex ataupun yang lain
2. Element tersebut harus mempunyai properti overflow dan white-space juga

Jadi secara keseluruhan, syntax yang diperlukan adalah:

```css
span {
  display: block; // tidak perlu jika element adalah block element seperti div atau p
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

Perlu diketahui kalau text-overflow: ellipsis ini hanya bisa dipakai untuk memotong teks dalam 1 baris.

Jika kamu memerlupkan ellipsis di teks yang lebih dari 1 baris, bisa menggunakan -webkit-line-clamp.

![Text overflow multi line](/blog/text-overflow-multi-line.png)

```css
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2; // jumlah baris sebelum muncul ellipsis
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

Note: jika kamu menggunakan autoprefixer, autoprefixer tidak bisa otomatis menambahkan vendor prefix di atas, jadi code di atas harus ditulis dengan memakai vendor prefix (tidak bisa hanya line-clamp saja).

Dan walaupun memakai vendor prefix -webkit, -webkit-line-clamp ini [sudah di-support di semua modern browser](https://caniuse.com/?search=line-clamp).

<p class="codepen" data-height="350" data-default-tab="result" data-slug-hash="LYqZQev" data-pen-title="Untitled" data-preview="true" data-user="hendrasusanto" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/hendrasusanto/pen/LYqZQev">
  Untitled</a> by Hendra Susanto (<a href="https://codepen.io/hendrasusanto">@hendrasusanto</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Tambahan: Tailwind CSS

Jika menggunakan Tailwind CSS, kedua kasus di atas bisa sesimpel menggunakan class `truncate` untuk kasus ellipsis 1 baris dan `line-clamp-*` dengan \* adalah jumlah baris yang diinginkan.
