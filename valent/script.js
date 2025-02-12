const correctPin = "123123";

function checkPin() {
    // Gabungkan nilai input PIN
    let inputPin = document.getElementById("pin1").value +
                   document.getElementById("pin2").value +
                   document.getElementById("pin3").value +
                   document.getElementById("pin4").value +
                   document.getElementById("pin5").value +
                   document.getElementById("pin6").value;
    
    console.log("Input PIN: ", inputPin); // Debug: Memastikan PIN yang dimasukkan

    if (inputPin !== correctPin) {
        console.log("PIN Salah"); // Debug: Tampilkan pesan jika PIN salah
        document.getElementById("popup").style.display = "block"; // Tampilkan popup gagal
    } else {
        console.log("PIN Benar!"); // Debug: Tampilkan pesan jika PIN benar
        clearPinInputs(); // Hapus kolom PIN
        document.getElementById("pin-box").style.display = "none"; // Sembunyikan kolom PIN
        document.getElementById("successPopup").style.display = "block"; // Tampilkan popup sukses
    }
}

function clearPinInputs() {
    // Kosongkan nilai dari setiap input PIN
    document.getElementById("pin1").value = "";
    document.getElementById("pin2").value = "";
    document.getElementById("pin3").value = "";
    document.getElementById("pin4").value = "";
    document.getElementById("pin5").value = "";
    document.getElementById("pin6").value = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function closeSuccessPopup() {
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("pin-box").style.display = "block"; // Tampilkan kembali kolom PIN
}

function closeValentinePopup() {
    document.getElementById("valentinePopup").style.display = "none";
}

function moveNext(current, nextFieldId) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldId)?.focus();
    }
}

function moveBack(event, prevFieldId) {
    if (event.key === "Backspace" && event.target.value === "") {
        document.getElementById(prevFieldId)?.focus();
    }
}

function showValentineMessage() {
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("valentinePopup").style.display = "block";
}
