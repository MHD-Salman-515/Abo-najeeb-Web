document.addEventListener('DOMContentLoaded', function() {
    // تسجيل الدخول/إنشاء حساب - تبديل التبويبات
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // إزالة النشاط من جميع الأزرار والمحتويات
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // إضافة النشاط للزر والمحتوى المحدد
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // تحقق من كلمات المرور في نموذج التسجيل
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                e.preventDefault();
                alert('كلمة المرور وتأكيدها غير متطابقين');
            }
        });
    }
    
    // إنشاء فقاعات متحركة لصفحة تسجيل الدخول
    if (document.querySelector('.animation-bubbles')) {
        createBubbles();
    }
    
    function createBubbles() {
        const bubblesContainer = document.querySelector('.animation-bubbles');
        
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('li');
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.width = (Math.random() * 30 + 10) + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
            bubble.style.animationDelay = (Math.random() * 5) + 's';
            bubble.style.opacity = Math.random() * 0.5;
            bubblesContainer.appendChild(bubble);
        }
    }
    
    // التنقل في الصفحة الرئيسية
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشاط من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة النشاط للرابط الحالي
            this.classList.add('active');
            
            // هنا يمكنك إضافة كود لتحميل المحتوى الديناميكي
            console.log('تم النقر على: ' + this.textContent);
        });
    });
    
    // تأثيرات التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // تحميل الصفحة - تأثيرات
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});