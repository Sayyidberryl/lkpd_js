
for (let tahun = 1600; tahun <= 2024; tahun++) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        document.write(tahun + " adalah tahun kabisat<br>");
    } else {
        document.write(tahun + " bukan tahun kabisat<br>");
    }
}

for (let tahun = 1600; tahun <= 2024; tahun++) {
    if (tahun % 400 == 0) {
        document.write(tahun + " adalah tahun kabisat<br>");
    } else if (tahun % 100 == 0) {
        document.write(tahun + " bukan tahun kabisat<br>");
    } else if (tahun % 4 == 0) {
        document.write(tahun + " adalah tahun kabisat<br>");
    } else if (tahun % 100 == 0 && tahun % 400 == 0) {
        document.write(tahun + " bukan tahun kabisat<br>");
    }
}


