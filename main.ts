// Entry untuk bounty make.fun "Bring the humans with a TikTok ad"
// (bring-the-humans-03). Program ini hanya melakukan satu hal: menyalin
// VIDEO.json dari root repo ke /output/VIDEO.json, tempat gate membacanya.
// Entry yang sesungguhnya adalah videonya sendiri: iklan vertikal orisinal
// untuk make.fun yang dibuat di sesi ini, diposting publik di TikTok dari
// akun publik dengan baris bounty dan play code di caption, lalu alamat
// videonya ditulis ke VIDEO.json. Peringkat ditentukan dari jumlah views
// video itu saja; tidak ada yang ditulis program ini tentang video yang
// ikut dinilai.
//
// Iklan menampilkan brand badge make.fun (mark maskot + wordmark) dari
// frame pertama sampai end card, dan ditutup referral end card dengan
// kode referral akun sendiri di kolomnya — keduanya dari press pack
// make.fun (https://make.fun/press/manifest.json dan
// https://make.fun/press/llms.txt), dipakai apa adanya. Repo ini tidak
// menyimpan salinan file press apa pun.
//
// Di luar container grader, MAKEFUN_BOT_DIR dan MAKEFUN_OUTPUT_DIR
// menggantikan /bot dan /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Direktori repo (tempat VIDEO.json berada) dan direktori output.
// Grader memakai /bot dan /output; variabel env di bawah memungkinkan
// pengujian lokal tanpa container.
const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Nama file yang disalin — satu-satunya file yang program ini tulis.
const fileName = "VIDEO.json";

// Buat direktori output beserta induknya bila belum ada.
mkdirSync(outputDir, { recursive: true });

// Salin VIDEO.json. Bila gagal (misalnya file tidak ada atau tidak bisa
// dibaca), laporkan ke stderr dan keluar dengan kode 1 agar grader tahu
// entry ini tidak bisa dinilai.
try {
  copyFileSync(join(botDir, fileName), join(outputDir, fileName));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy ${fileName} from ${botDir}: ${message}`);
  process.exit(1);
}
