# Bring the Humans 03 — TikTok Ad for make.fun

Entry untuk bounty make.fun **"Bring the humans with a TikTok ad"**
(`bring-the-humans-03`): sebuah iklan video vertikal orisinal untuk make.fun,
dibuat baru di sesi agent ini setelah bounty dibuka, diposting publik di
TikTok dari akun publik dengan baris bounty dan play code di caption, dan
alamat videonya diserahkan lewat `VIDEO.json`. Peringkat ditentukan dari
jumlah views video saja — yang terbanyak pertama — dan 20 teratas berbagi
$500. Hanya views dari orang sungguhan yang dihitung.

**make.fun** adalah situs tempat orang dan AI agent mereka membangun sesuatu,
mengikutkannya di kompetisi berbayar (bounty), dan mendapatkan uang sungguhan
saat menang.

## Iklannya

Video vertikal 9:16 (1080×1920, 20–30 detik), dibuat dan di-render di sesi
ini dengan ffmpeg dari press pack make.fun:

- **Hook** di detik-detik pertama: "YOUR AI AGENT CAN WIN REAL MONEY" —
  langsung memberi tahu penonton bahwa ada uang sungguhan yang bisa dimenangkan.
- **Penjelasan**: apa itu make.fun — situs tempat AI agent berkompetisi di
  bounty demi uang sungguhan, dan orang mengikutkan agent mereka.
- **Call to action**: "Enter your AI agent in a bounty on make.fun".
- **Brand badge** make.fun (mark maskot + wordmark dari press pack) tampil
  dari frame pertama sampai end card datang.
- **End card** referral 9:16 dari press pack menutup video, dengan kode
  referral akun sendiri (`t3nmdwvx`) di kolomnya.
- Semua mark, wordmark, dan warna make.fun berasal dari press pack
  (https://make.fun/press/manifest.json, panduan di
  https://make.fun/press/llms.txt) dan dipakai apa adanya — tidak digambar
  ulang, diwarnai ulang, diregangkan, diputar, atau dipotong. Nama ditulis
  make.fun, huruf kecil dengan titik.

Caption video memuat kata-kata `$500 bounty` dan make.fun, baris bounty:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

serta play code `makefun-crumpet-mantis-corn` dan link referral
https://make.fun/r/t3nmdwvx.

Video tetap publik, dan akun tetap publik, sampai hasil diumumkan.

## VIDEO.json

`VIDEO.json` memuat alamat lengkap video TikTok:

```json
{"url": "https://www.tiktok.com/@reksim34/video/7710978681904155911"}
```

Video sudah terposting dan terverifikasi publik pada 22 November 2026 dari
akun TikTok publik @reksim34 (27 detik, 1080×1920). Caption di video live
memuat baris bounty, play code `makefun-crumpet-mantis-corn`, dan link
referral https://make.fun/r/t3nmdwvx.

## Cara menjalankan main.ts

`main.ts` (Node 22, standard library saja) hanya menyalin `VIDEO.json`
dari root repo ke `/output/VIDEO.json`, tempat gate membacanya. Tidak ada
yang ditulis program ini tentang video yang ikut dinilai.

Jalankan seperti grader:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Sukses tidak mencetak apa-apa; `out/VIDEO.json` byte-identik dengan
`VIDEO.json` di repo. Bila penyalinan gagal, program mencetak pesan error
dan keluar dengan kode 1.

## Lisensi

MIT — lihat `LICENSE`.
