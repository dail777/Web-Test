const correctPin = "123123";  // PIN yang benar

function checkPin() {
    // Menggabungkan input PIN dari setiap kolom
    let inputPin = document.getElementById("pin1").value +
                   document.getElementById("pin2").value +
                   document.getElementById("pin3").value +
                   document.getElementById("pin4").value +
                   document.getElementById("pin5").value +
                   document.getElementById("pin6").value;
    
    console.log("Input PIN: ", inputPin);  // Debug: Menampilkan PIN yang dimasukkan

    if (inputPin !== correctPin) {
        // Jika PIN salah, tampilkan popup error
        document.getElementById("popup").style.display = "block";
    } else {
        // Jika PIN benar, sembunyikan kolom PIN dan tampilkan popup sukses
        clearPinInputs();  // Hapus input PIN
        document.getElementById("pin-box").classList.add("hidden");  // Sembunyikan form PIN
        document.getElementById("successPopup").style.display = "block";  // Tampilkan popup sukses
    }
}

function clearPinInputs() {
    // Menghapus nilai dari setiap input PIN
    document.getElementById("pin1").value = "";
    document.getElementById("pin2").value = "";
    document.getElementById("pin3").value = "";
    document.getElementById("pin4").value = "";
    document.getElementById("pin5").value = "";
    document.getElementById("pin6").value = "";
}

function closePopup() {
    // Menutup popup error
    document.getElementById("popup").style.display = "none";
}

function closeSuccessPopup() {
    // Menutup popup sukses dan menampilkan kembali form PIN
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("pin-box").classList.remove("hidden");  // Menampilkan kembali kolom PIN
}

function closeValentinePopup() {
    // Menutup popup Valentine
    document.getElementById("valentinePopup").style.display = "none";
}

function moveNext(current, nextFieldId) {
    // Pindahkan fokus ke input berikutnya
    if (current.value.length === 1) {
        document.getElementById(nextFieldId)?.focus();
    }
}

function moveBack(event, prevFieldId) {
    // Pindahkan fokus ke input sebelumnya jika tombol backspace ditekan
    if (event.key === "Backspace" && event.target.value === "") {
        document.getElementById(prevFieldId)?.focus();
    }
}

function showValentineMessage() {
    // Menampilkan pesan Valentine
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("valentinePopup").style.display = "block";
}
