<?php
//Include file koneksi ke database
include "koneksi.php";

//menerima nilai dari kiriman form pendaftaran
$nama=$_POST["nama"];
$alamat=$_POST["alamat"];
$email=$_POST["email"];
$no_hp=$_POST["no_hp"];

//Query input menginput data kedalam tabel anggota
  $sql="insert into data_pendaftar (nama,alamat,email,no_hp) values
		('$nama','$alamat','$email','$no_hp')";

//Mengeksekusi/menjalankan query diatas	
  $hasil=mysqli_query($kon,$sql);

//Kondisi apakah berhasil atau tidak
  if ($hasil) {
	echo "Berhasil Menyimpan Data Calon Mahasantri Baru";
	header("location:index.html");
	exit;
  }
else {
	echo "Gagal Menyimpan Data Calon Mahasantri Baru";
	exit;
}  

?>