// FAQ アコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 現在のアイテムの状態を切り替え
            item.classList.toggle('active');
            
            // 他のアイテムを閉じる（オプション）
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });
        });
    });
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 動画プレースホルダークリック時の処理（実際の実装では動画再生機能を追加）
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        // ここに実際の動画再生機能を実装
        // 例: YouTubeの埋め込み動画を表示するなど
        alert('ここに実際の動画が再生されます。実装時には、この部分を実際の動画プレーヤーに置き換えてください。');
    });
});

// フォーム送信処理（デモ用）
document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // フォームバリデーション
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const privacyPolicy = document.getElementById('privacy-policy').checked;
    
    if (!name || !email || !message || !privacyPolicy) {
        alert('必須項目を入力してください。');
        return;
    }
    
    // 実際の実装では、ここでフォームデータを送信処理
    alert('お問い合わせありがとうございます。内容を確認の上、担当者より連絡いたします。');
    
    // フォームリセット
    this.reset();
});

// スクロール時のアニメーション（オプション）
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.benefit-item, .case-study-item, .service-item, .testimonial-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            element.classList.add('animate');
        }
    });
});

// スティッキーCTAの表示制御
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const pageHeight = document.body.scrollHeight;
    const footerHeight = document.querySelector('.footer').offsetHeight;
    const ctaSection = document.querySelector('.cta');
    const stickyCta = document.querySelector('.sticky-cta');
    
    // ヘッダーを過ぎたら表示
    if (scrollPosition > viewportHeight && 
        // フッターやCTAセクションに重ならないように
        scrollPosition < (pageHeight - viewportHeight - footerHeight) && 
        !isElementInViewport(ctaSection)) {
        stickyCta.classList.add('show-sticky-cta');
    } else {
        stickyCta.classList.remove('show-sticky-cta');
    }
});

// 要素が画面内にあるかチェック
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}
