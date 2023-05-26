function getEle(ID) {
    return document.getElementById(ID);
}

listNumber = [];
total = [];
getEle('themSo').onclick = function () {
    var nhapSo = +getEle('nhapSo').value;
    listNumber.push(nhapSo);
    total.push(nhapSo);
    getEle('inputNumber').innerHTML = 'Các số đã nhập: ' + total;
}

getEle('tinhTong+').onclick = function () {
    var tongSoDuong = 0;
    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            tongSoDuong += listNumber[i];
        }
    }
    getEle('ketQua').innerHTML = 'Tổng các số dưng bằng: ' + tongSoDuong;
}

getEle('baoNhieuSoDuong').onclick = function () {
    bnSoDuong = 0;
    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            bnSoDuong++;
        }
    }
    getEle('ketQua').innerHTML = 'Có ' + bnSoDuong + ' số dương'
}

getEle('soNhoNhat').onclick = function () {
    var soNhoNhat = listNumber[0];
    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] < soNhoNhat) {
            soNhoNhat = listNumber[i]
        }
        getEle('ketQua').innerHTML = 'Số nhỏ nhất trong mảng là: ' + soNhoNhat;
    }
}

getEle('soDuongNhoNhat').onclick = function () {
    soDuongNhoNhat = [];
    var soNhoNhat = listNumber[0];
    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] < soNhoNhat) {
            soNhoNhat = listNumber[i]
        }
        getEle('ketQua').innerHTML = 'Số dương nhỏ nhất trong mảng là: ' + soNhoNhat;
    }
}

getEle('soChanCuoiMang').onclick = function () {
    var soChanCuoiMang = 0;
    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && listNumber[i] % 2 === 0) {
            soChanCuoiMang = listNumber[i];
        } if (listNumber[i] % 2 !== 0) {
            soChanCuoiMang = -1;
        }
    }
    getEle('ketQua').innerHTML = 'Số chẳn cuối mảng là: ' + soChanCuoiMang;
}

getEle('tangDan').onclick = function () {
    for (i = 0; i < listNumber.length - 1; i++) {
        for (j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var luuTru = 0;
                luuTru = listNumber[j];
                listNumber[j] = listNumber[i];
                listNumber[i] = luuTru;
            }
        }
    }
    getEle('ketQua').innerHTML = 'Thứ tự tăng dần của mảng: ' + listNumber;
}

getEle('soNguyenTo').onclick = function () {
    var soNguyenTo = true;
    var sNT = 0;
    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] < 2) {
            soNguyenTo = false;
        } else {
            for (j = 2; j < listNumber[i]; j++) {
                if (listNumber[i] % j == 0) {
                    soNguyenTo = false;
                    break
                } if (listNumber[i] % j != 0) {
                    soNguyenTo = true;
                    break
                }
            }
        }
        if (soNguyenTo == true) {
            sNT = listNumber[i];
            break
        } if (soNguyenTo == false) {
            sNT = -1;
        }
    }

    console.log(sNT);
}
