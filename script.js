// Data kartu kuliner. foto: null berarti kartu memakai emoji sebagai pengganti.
const kuliner = [
  {
    nama: "Asinan Ningsih",
    kategori: "Ayam goreng",
    deskripsi: "Asinan terdewa di ciledug orang sampe pengen mampus karna saking enaknya.",
    keterangan: "Jl. HOS Cokroaminoto",
    foto: null,
    emoji: "🍟",
  },
  {
    nama: "Nasi Bakar Ayam Suwir",
    kategori: "Nasi bakar",
    deskripsi: "Ayam suwir bumbu kuning disajikan dengan nasi dan daun kemangi, dibungkus daun pisang.",
    keterangan: "Kuliner viral",
    foto: null,
    emoji: "🍞",
  },
  {
    nama: "Liwet Bakar Derajat",
    kategori: "Nasi bakar",
    deskripsi: "Nasi bakar dengan pilihan ayam kemangi, ayam cabai hijau, cakalang balado, dan sambal cumi.",
    keterangan: "Rp19.000 - Rp24.000",
    foto: null,
    emoji: "🍞",
  },
  {
    nama: "Bakso Pentol Bang Dimas",
    kategori: "Bakso",
    deskripsi: "Sempat viral di media sosial, dengan isian bakso urat, telur, keju, dan iga.",
    keterangan: "Ciledug",
    foto: null,
    emoji: "🍲",
  },
  {
    nama: "Warung Sunda Anna Raos",
    kategori: "Masakan Sunda",
    deskripsi: "Masakan Sunda rumahan yang populer di kawasan Paninggilan.",
    keterangan: "Jl. Cipto Mangunkusumo",
    foto: null,
    emoji: "🍚",
  },
  {
    nama: "Pangsit Bu Tin",
    kategori: "Pangsit",
    deskripsi: "Salah satu kuliner viral di Ciledug yang dibahas detikFood, berlokasi di Larangan.",
    keterangan: "Larangan",
    foto: null,
    emoji: "🥟",
  },
  {
    nama: "Rahang Tuna Pemuda",
    kategori: "Seafood",
    deskripsi: "Masuk daftar tempat makan viral versi detikFood. Cek menu dan lokasi terbaru sebelum datang.",
    keterangan: "Ciledug",
    foto: null,
    emoji: "🍣",
  },
];

// Membuat satu kartu. Teks dimasukkan lewat textContent agar aman dari HTML yang tidak diinginkan.
function buatKartu(item) {
  const article = document.createElement("article");
  article.className = "card";

  const gambar = document.createElement("div");
  gambar.className = "card-img";
  if (item.foto) {
    const img = document.createElement("img");
    img.src = item.foto;
    img.alt = item.nama;
    gambar.appendChild(img);
  } else {
    gambar.textContent = item.emoji;
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = item.kategori;

  const judul = document.createElement("h3");
  judul.textContent = item.nama;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = item.deskripsi;

  const foot = document.createElement("div");
  foot.className = "card-foot";
  const keterangan = document.createElement("span");
  keterangan.textContent = item.keterangan;
  foot.appendChild(keterangan);

  body.append(pill, judul, deskripsi, foot);
  article.append(gambar, body);
  return article;
}

const wadah = document.getElementById("kuliner-list");
kuliner.forEach((item) => wadah.appendChild(buatKartu(item)));
