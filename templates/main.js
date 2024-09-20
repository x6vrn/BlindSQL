// تعريف المتغيرات للعناصر التي سنتحكم فيها
const arduino = document.getElementById("arduino");
const esp32 = document.getElementById("esp32");
const bladeRF = document.getElementById("bladeRF");
const ard = document.getElementById("ard");
const ardh1 = document.getElementById("ardh1");
const esph1 = document.getElementById("esph1");
const esph5 = document.getElementById("esph5");
const bladeh1 = document.getElementById("bladeh1");
const bladeh5 = document.getElementById("bladeh5");

// تفعيل الحدث عند التمرير
window.onscroll = function () {
    
    // تأثيرات على العناصر عند التمرير
    if (this.scrollY >= 5262) {
        arduino.classList.add("arduino-key");
        arduino.classList.remove("arduino");
        ard.classList.add("ardh5");
        ardh1.classList.add("ard-h1");
    }

    if (this.scrollY <= 5292) {
        arduino.classList.remove("arduino-key");
        arduino.classList.add("arduino");
        ard.classList.remove("ardh5");
        ardh1.classList.remove("ard-h1");
    }

    if (this.scrollY >= 5592) {
        arduino.classList.remove("arduino-key");
        arduino.classList.add("arduino");
        ard.classList.remove("ardh5");
        ardh1.classList.remove("ard-h1");
    }

    if (this.scrollY >= 5890) {
        esph1.classList.add("esp-h1");
        esph5.classList.add("esp-h5");
        esp32.classList.add("esp32img");
    }
    if (this.scrollY <= 5890){
        esph1.classList.remove("esp-h1");
        esph5.classList.remove("esp-h5");
        esp32.classList.remove("esp32img");
    }
    if (this.scrollY >= 6090){
        esph1.classList.remove("esp-h1");
        esph5.classList.remove("esp-h5");
        esp32.classList.remove("esp32img");
    }

    if (this.scrollY >= 6200){
        bladeRF.classList.add("bladeR");
        bladeh5.classList.add("blade-h5");
        bladeh1.classList.add("blade-h1");
    }
    if (this.scrollY <= 6200){
        bladeRF.classList.remove("bladeR");
        bladeh5.classList.remove("blade-h5");
        bladeh1.classList.remove("blade-h1");
    }
    if (this.scrollY >= 6400){
        bladeRF.classList.remove("bladeR");
        bladeh5.classList.remove("blade-h5");
        bladeh1.classList.remove("blade-h1");
    }
};
