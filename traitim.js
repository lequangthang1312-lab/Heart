const ui = document.getElementById("ui");

/*
========================================
CẤU HÌNH
========================================
*/

/* Số lượng chữ */
const total = 100;

/* 
   Vị trí tâm trái tim

   50 = chính giữa màn hình
*/
const centerX = 35;
const centerY = 30;


/*
========================================
TẠO 100 DÒNG I LOVE YOU
========================================
*/

for (let i = 1; i <= total; i++) {

    const love = document.createElement("div");

    love.className = "love";

    love.style.setProperty("--i", i);

    /*
    Vị trí tâm
    */

    love.style.left = centerX + "%";
    love.style.top = centerY + "%";

    love.innerHTML = `
        <div class="love_horizontal">

            <div class="love_vertical">

                <div class="love_word">
                    I love you
                </div>

            </div>

        </div>
    `;

    ui.appendChild(love);
}