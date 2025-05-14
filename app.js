document.getElementById("formKendaraan").addEventListener("submit", function (e) {
  e.preventDefault();

  const kendaraan = {
    nopol: document.getElementById("nopol").value,
    warna: document.getElementById("warna").value,
    jenis: document.getElementById("jenis").value,
    lamaParkir: document.getElementById("lamaParkir").value,
  };

  let totalBiaya = 0;

  if (kendaraan.jenis === "motor") {
    totalBiaya += 3000;
    for (let i = 2; i<= kendaraan.lamaParkir; ++i) {
      totalBiaya += 2000;
    }
  } else if (kendaraan.jenis === "mobil"){
    totalBiaya += 7000;
    for (let i = 2; i <= kendaraan.lamaParkir; ++i) {
      totalBiaya += 5000;
    }
  } else {
    document.getElementById("hasil").innerHTML = "Jenis Kenderaan tidak valid !!!";
    return;
  }

  document.getElementById("hasil").innerHTML = `
  <h3>Detail Kendaraan</h3>
  <p>Nopol: ${kendaraan.nopol}</p>
  <p>Warna: ${kendaraan.warna}</p>
  <p>Jenis: ${kendaraan.jenis}</p>
  <p>Lama Parkir: ${kendaraan.lamaParkir} jam</p>
  <p><strong>Total Biaya Parkir: ${totalBiaya.toLocaleString()}</strong></p> 
  `;

});