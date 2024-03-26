let detik = 5440

cek = detik % 3600 
jam = detik / 3600
menit = cek / 60
detik = cek % 60

document.write(Math.floor(jam) + ' Jam ' + Math.floor(menit) + ' Menit ' + Math.floor(detik) + ' Detik ')