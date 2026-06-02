// ==========================================================================
// 1. Service Data & Details Modals
// ==========================================================================
const serviceDetails = {
    ev: {
        title: "Ev Temizliği",
        slogan: "Eviniz, Sizin En Özel Alanınız. Onu Güvenli Ellere Emanet Edin.",
        description: `Günlük hayatın koşuşturmacasında temizliğe vakit ayıramıyorsanız, profesyonel ev temizliği hizmetimizle yanınızdayız. Rutin ev temizliğinden detaylı bahar temizliğine, taşınma öncesi/sonrası boş ev temizliğinden koltuk yıkamaya kadar geniş bir yelpazede hizmet sunuyoruz. 
        <br><br>
        Mutfağınızdan banyonuza kadar her köşe köşe dezenfekte edilir. Sağlığınızı önemsiyor, doğaya ve insan sağlığına zarar vermeyen, sertifikalı temizlik ürünleri kullanıyoruz. Çocuklarınız ve evcil hayvanlarınız için güvenli, ferah ve hijyenik yaşam alanları oluşturmak bizim önceliğimizdir.`,
        icon: '<i class="fa-solid fa-house-chimney"></i>'
    },
    apartman: {
        title: "Apartman ve Site Temizliği",
        slogan: "Ortak Yaşam Alanlarında Hijyen ve Düzen bir Arada.",
        description: `Apartman ve sitelerin temizliği, hem estetik hem de toplu yaşam sağlığı için büyük önem taşır. Düzenli apartman merdiveni temizliği, asansör içi ve dışı hijyeni, korkulukların silinmesi, ortak alanların (bahçe, otopark girişleri) temizlenmesi ve çöp kovalarının dezenfekte edilmesi işlemlerini periyodik olarak gerçekleştiriyoruz. 
        <br><br>
        Apartman yönetimleri için tamamen profesyonel, sözleşmeli ve faturalı çözümler sunuyoruz. Güvenilir ekibimizle ortak yaşam alanlarınız her zaman temiz ve düzenli kalır.`,
        icon: '<i class="fa-solid fa-building"></i>'
    },
    santiye: {
        title: "Şantiye ve İnşaat Sonrası Temizlik",
        slogan: "Kaba Pisliği Unutun, Anahtar Teslim Parlaklığa Odaklanın.",
        description: `İnşaat ya da tadilat sonrası temizlik, en zorlu ve uzmanlık gerektiren temizlik türüdür. Boya kalıntıları, harçlar, yapışkanlar ve yoğun zemin tozu sıradan yöntemlerle temizlenemez. 
        <br><br>
        Özel endüstriyel kimyasallarımız ve kazıyıcı ekipmanlarımızla; camlardaki bantlardan zeminlerdeki donmuş harçlara kadar tüm şantiye kalıntılarını temizliyor, alanı oturuma veya kullanıma hazır şekilde teslim ediyoruz. Hassas yüzeylere zarar vermeden, derinlemesine temizlik sağlıyoruz.`,
        icon: '<i class="fa-solid fa-trowel-bricks"></i>'
    },
    ticari: {
        title: "AVM, Mağaza ve Dükkan Temizliği",
        slogan: "Müşterilerinizi Işıl Işıl Bir Alanda Karşılayın.",
        description: `Ticari alanlarda temizlik, marka imajınızın en önemli parçasıdır. Yüksek insan trafiğine sahip AVM'ler, dükkanlar ve mağazalar için özel temizlik planları hazırlıyoruz. 
        <br><br>
        Vitrin ve dış cephe cam temizliğinden zemin cilalamaya, yürüyen merdiven hijyeninden sosyal alanların dezenfeksiyonuna kadar işletmenizin prestijini artıracak çözümler üretiyoruz. İster mesai saatleri içinde (fark ettirmeden), ister mesai saatleri dışında kesintisiz hizmet veriyoruz.`,
        icon: '<i class="fa-solid fa-shop"></i>'
    }
};

function openServiceModal(serviceKey) {
    const service = serviceDetails[serviceKey];
    if (!service) return;
    const modal = document.getElementById('service-modal');
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-slogan').textContent = service.slogan;
    document.getElementById('modal-description').innerHTML = service.description;
    document.getElementById('modal-icon-holder').innerHTML = service.icon;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// ==========================================================================
// 2. DOMContentLoaded
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Header scroll ---
    const header = document.getElementById('header');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = window.scrollY;
    }, { passive: true });

    // --- Mobile menu ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            mobileOverlay.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // --- Service cards ---
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => openServiceModal(card.dataset.service));
    });

    document.getElementById('modal-close-btn').addEventListener('click', closeServiceModal);
    document.getElementById('service-modal').addEventListener('click', (e) => {
        if (e.target.id === 'service-modal') closeServiceModal();
    });

    // --- Teklif modal ---
    const teklifModal = document.getElementById('teklif-modal');
    const openTeklifModal = (e) => {
        if (e) e.preventDefault();
        closeServiceModal();
        teklifModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    const closeTeklifModal = () => {
        teklifModal.classList.remove('open');
        document.body.style.overflow = '';
    };

    document.getElementById('open-teklif-btn').addEventListener('click', openTeklifModal);
    document.getElementById('modal-teklif-cta').addEventListener('click', openTeklifModal);
    document.getElementById('teklif-close-btn').addEventListener('click', closeTeklifModal);
    teklifModal.addEventListener('click', (e) => {
        if (e.target.id === 'teklif-modal') closeTeklifModal();
    });

    // --- Before/After Slider ---
    const slider = document.getElementById('ba-slider');
    const handle = document.getElementById('slider-handle');
    const beforeImageContainer = document.getElementById('before-img-container');
    const beforeImage = beforeImageContainer ? beforeImageContainer.querySelector('img') : null;
    const afterImageContainer = document.getElementById('after-img-container');
    const afterImage = afterImageContainer ? afterImageContainer.querySelector('img') : null;

    if (slider && handle && beforeImageContainer && beforeImage) {
        const badgeBefore = beforeImageContainer.querySelector('.badge-before');
        const badgeAfter = afterImageContainer ? afterImageContainer.querySelector('.badge-after') : null;

        const adjustImageSizes = () => {
            const sliderWidth = slider.offsetWidth;
            if (beforeImage) beforeImage.style.width = sliderWidth + 'px';
            if (afterImage) afterImage.style.width = sliderWidth + 'px';
        };

        window.addEventListener('resize', adjustImageSizes);
        adjustImageSizes();
        if (beforeImage) beforeImage.addEventListener('load', adjustImageSizes);
        if (afterImage) afterImage.addEventListener('load', adjustImageSizes);

        let isSliding = false;

        const moveSlider = (clientX) => {
            const rect = slider.getBoundingClientRect();
            let percentage = ((clientX - rect.left) / rect.width) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            beforeImageContainer.style.width = percentage + '%';
            handle.style.left = percentage + '%';

            if (badgeBefore) {
                badgeBefore.style.opacity = percentage < 20 ? '0' : '1';
                badgeBefore.style.pointerEvents = percentage < 20 ? 'none' : 'auto';
            }
            if (badgeAfter) {
                badgeAfter.style.opacity = percentage > 80 ? '0' : '1';
                badgeAfter.style.pointerEvents = percentage > 80 ? 'none' : 'auto';
            }
        };

        handle.addEventListener('mousedown', () => isSliding = true);
        window.addEventListener('mouseup', () => isSliding = false);
        window.addEventListener('mousemove', (e) => { if (isSliding) moveSlider(e.clientX); });
        handle.addEventListener('touchstart', () => isSliding = true, { passive: true });
        window.addEventListener('touchend', () => isSliding = false);
        window.addEventListener('touchmove', (e) => {
            if (isSliding && e.touches.length > 0) moveSlider(e.touches[0].clientX);
        }, { passive: true });
        slider.addEventListener('click', (e) => {
            if (e.target !== handle && !handle.contains(e.target)) moveSlider(e.clientX);
        });
    }

    // --- Forms ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Gönderiliyor... <i class="fa-solid fa-spinner fa-spin"></i>';
        setTimeout(() => {
            const name = document.getElementById('form-name').value;
            formStatus.className = 'form-status-message success';
            formStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Teşekkürler ${name}! Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.`;
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            contactForm.reset();
        }, 1500);
    });

    const teklifForm = document.getElementById('teklif-form');
    const teklifStatus = document.getElementById('teklif-status');

    teklifForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = teklifForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Hesaplanıyor... <i class="fa-solid fa-spinner fa-spin"></i>';
        setTimeout(() => {
            const name = document.getElementById('teklif-name').value;
            teklifStatus.className = 'form-status-message success';
            teklifStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Teşekkürler ${name}! Teklif talebiniz kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.`;
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            teklifForm.reset();
            setTimeout(() => { closeTeklifModal(); teklifStatus.style.display = 'none'; }, 4000);
        }, 1800);
    });

    // --- Active nav highlight ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let currentSectionId = 'anasayfa';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) currentSectionId = section.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
    }, { passive: true });

    // ==========================================================================
    // 3. PREMIUM: Scroll Reveal Animations (IntersectionObserver)
    // ==========================================================================
    const revealElements = document.querySelectorAll(
        '.staggered-card, .service-card, .timeline-step, .section-header, .about-intro-col, .contact-info-panel, .contact-form-panel, .slider-wrapper'
    );

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation delay based on sibling index
                    const parent = entry.target.parentElement;
                    const siblings = parent ? Array.from(parent.children) : [];
                    const siblingIndex = siblings.indexOf(entry.target);
                    const delay = siblingIndex * 80;

                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => {
            el.classList.add('reveal-on-scroll');
            revealObserver.observe(el);
        });
    }

    // ==========================================================================
    // 4. PREMIUM: Subtle Parallax on Hero
    // ==========================================================================
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroSection.style.backgroundPositionY = (scrolled * 0.4) + 'px';
            }
        }, { passive: true });
    }

});

// Expose functions globally
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
