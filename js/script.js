// マナ濃度の動的更新
const manaLevels = ['低', '中', '高', '最高'];
const manaColors = ['#95a5a6', '#f39c12', '#9b59b6', '#e74c3c'];

function updateManaLevel() {
    const manaElement = document.getElementById('mana-level');
    const randomLevel = manaLevels[Math.floor(Math.random() * manaLevels.length)];
    const randomColor = manaColors[manaLevels.indexOf(randomLevel)];
    
    manaElement.textContent = `マナ濃度: ${randomLevel}`;
    manaElement.style.color = randomColor;
}

// 温度の動的更新
function updateTemperature() {
    const tempElement = document.getElementById('temperature');
    const randomTemp = Math.floor(Math.random() * 30) + 10;
    tempElement.textContent = `${randomTemp}°C`;
}

// スムーズスクロール
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// カードホバー効果
function initCardHoverEffects() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 初期化関数
function init() {
    updateManaLevel();
    updateTemperature();
    initSmoothScroll();
    initCardHoverEffects();
    
    // 30秒ごとにマナ濃度を更新
    setInterval(updateManaLevel, 30000);
    
    // 5分ごとに温度を更新
    setInterval(updateTemperature, 300000);
}

// DOM読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', init);