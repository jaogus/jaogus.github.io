// รับ Element Progress Bar
var progressBar = document.getElementById('progressBar');

// กำหนดช่วงเวลาที่จะอัปเดตค่า Progress Bar
var interval = setInterval(function() {
    // รับค่าปัจจุบันของ Progress Bar
    var currentValue = progressBar.value;

    // เพิ่มค่า Progress Bar (ตัวอย่างเพิ่มทีละ 1)
    if (currentValue < 100) {
        progressBar.value = currentValue + 1;
    } else {
        // หยุดการอัปเดตเมื่อ Progress Bar เต็มที่ 100%
        clearInterval(interval);
    }
}, 100); // อัปเดตทุก 100 มิลลิวินาที (หรือ 0.1 วินาที)
