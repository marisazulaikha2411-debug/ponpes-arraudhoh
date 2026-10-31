const menuToggle=document.getElementById('menu-toggle');const nav=document.getElementById('nav-links');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';});
document.querySelectorAll('#nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>'; }));
const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.dot')];let current=0,timer;
function showSlide(n){current=n;slides.forEach((s,i)=>s.classList.toggle('active',i===n));dots.forEach((d,i)=>d.classList.toggle('active',i===n));}
function startSlider(){clearInterval(timer);timer=setInterval(()=>showSlide((current+1)%slides.length),4500);}
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);startSlider();}));startSlider();
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});revealItems.forEach(el=>observer.observe(el));}else{revealItems.forEach(el=>el.classList.add('visible'));}
document.getElementById('year').textContent=new Date().getFullYear();


/* DETAIL PROGRAM PONPES ARRAUDHOH */
(() => {
    const modal = document.getElementById("programModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalContent = document.getElementById("modalContent");
    const closeButton = document.getElementById("closeProgramModal");
    const backButton = document.getElementById("backProgramModal");
    const cards = document.querySelectorAll(".program-clickable");

    if (!modal || !modalContent || modal.dataset.initialized) return;
    modal.dataset.initialized = "true";

    let previousFocus = null;

    const curriculum = [
        {
            name: "Al-Qur'an",
            books: "Iqro, Tajwid, Ulumul Quran"
        },
        {
            name: "Hadist",
            books: "Arba'in Nawawi, Jawahir Lu'luiyah, Fathul Qorib, Ibanatul Ahkam"
        },
        {
            name: "Nahwu",
            books: "Pengantar Ilmu Nahwu, Nahwu Wadhih 1–3, Imrithy, Alfiyah, Kitab I'lal"
        },
        {
            name: "Shorof",
            books: "Amtsilatu Tashrifiyyah, Matan Al-Bina Wal Asas, Nadzom Maqsud"
        },
        {
            name: "Fiqih",
            books: "Dzahiroh Al-Musyarrofah, Risalatul Jami'ah, Mabadi 1 & 2, Safinatunnajah, Nailurroja, Mukhtashor, Albayan Atta'rif, Fathul Qorib Mujib, Al Ibanah Wal Ifadhoh, Muqoddimah Hadromiy"
        },
        {
            name: "Tasawuf",
            books: "Ta'lim Muta'lim, Bidayatul Hidayah, Mukasyafatul Qulub"
        },
        {
            name: "Siroh",
            books: "Umahatul Mu'minin, Khulashoh Nurul Yaqin 1–3"
        },
        {
            name: "Tauhid",
            books: "Nurudzolam, Aqoiduddiniyyah, Syaroh Aqidatul Awwam"
        },
        {
            name: "Bahasa Arab",
            books: "Asma, Af'al, Ibaroh, Arabiyah Linnasyiin 1–6, Muhawwaroh"
        },
        {
            name: "Usul dan Qowaid Fiqhiyah",
            books: "Qowa'idul Asasiyyah Fi Ushulil Fiqih"
        },
        {
            name: "Mustholah",
            books: "Qowa'idul Asasiyyah Fi Mustholahil Hadist, Matan Baiquniyah"
        },
        {
            name: "Kitabah",
            books: "Ilmu Imla'"
        }
    ];

    const escapeHTML = (text) =>
        String(text).replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    function renderCurriculum() {
        const items = curriculum.map((subject, index) => `
            <article class="curriculum-item">
                <h4>
                    <span class="curriculum-number">${String(index + 1).padStart(2, "0")}</span>
                    ${escapeHTML(subject.name)}
                </h4>
                <p>${escapeHTML(subject.books)}</p>
            </article>
        `).join("");

        return `
            <div class="curriculum-intro">
                <h3>Kurikulum Pesantren</h3>
                <p>
                    Kurikulum Pondok Pesantren Arraudhoh Daar Khadijatul
                    Kubro ditempuh selama 6 tahun yang tersusun dari
                    12 marhalah/semester.
                </p>
                <p>
                    Berikut bidang ilmu dan kitab yang dipelajari
                    berdasarkan informasi kurikulum yang diberikan.
                </p>
            </div>

            <div class="curriculum-grid">${items}</div>
        `;
    }

    function renderAkhlaq() {
        const photos = [
            {
                src: "img/roha-1.jpg",
                alt: "Dokumentasi roha bersama para ulama",
                caption: "Roha bersama para ulama"
            },
            {
                src: "img/ulama-1.jpg",
                alt: "Dokumentasi kebersamaan dengan ulama",
                caption: "Kebersamaan dengan para ulama"
            },
            {
                src: "img/abuya.jpg",
                alt: "Dokumentasi bersama Abuya",
                caption: "Bersama Abuya"
            },
            {
                src: "img/ummah.jpg",
                alt: "Dokumentasi bersama Ummah",
                caption: "Bersama Ummah"
            }
        ];

        return `
            <div class="curriculum-intro">
                <h3>Menjaga Adab dan Akhlak</h3>
                <p>
                    Galeri dokumentasi roha dan kebersamaan bersama
                    para ulama, Abuya, serta Ummah.
                </p>
            </div>

            <div class="akhlaq-gallery">
                ${photos.map(photo => `
                    <article class="akhlaq-photo">
                        <img
                            src="${photo.src}"
                            alt="${escapeHTML(photo.alt)}"
                            loading="lazy"
                            data-zoomable
                        >
                        <p>${escapeHTML(photo.caption)}</p>
                    </article>
                `).join("")}
            </div>
        `;
    }

    function renderSantri() {
        const activities = [
            {
                icon: "fa-mosque",
                name: "Shalat dan Wirid Berjamaah",
                description: "Membiasakan ibadah berjamaah dan wirid."
            },
            {
                icon: "fa-book-quran",
                name: "Tahsin dan Tahfidz",
                description: "Memperbaiki bacaan dan menghafal Al-Qur'an."
            },
            {
                icon: "fa-book-open",
                name: "Kajian Kitab",
                description: "Mempelajari ilmu agama melalui kajian kitab."
            },
            {
                icon: "fa-drum",
                name: "Hadroh",
                description: "Kegiatan ekstrakurikuler seni hadroh."
            },
            {
                icon: "fa-bullseye",
                name: "Memanah",
                description: "Kegiatan ekstrakurikuler memanah."
            },
            {
                icon: "fa-horse",
                name: "Berkuda",
                description: "Kegiatan ekstrakurikuler berkuda."
            },
            {
                icon: "fa-microphone",
                name: "Public Speaking",
                description: "Melatih keberanian dan kemampuan berbicara."
            }
        ];

        return `
            <div class="curriculum-intro">
                <h3>Kegiatan Santri</h3>
                <p>
                    Beragam kegiatan untuk mendukung ibadah,
                    pembelajaran, kebersamaan, dan pengembangan
                    kemampuan santri.
                </p>
            </div>

            <div class="santri-activity-list">
                ${activities.map(activity => `
                    <article class="santri-activity-item">
                        <i class="fa-solid ${activity.icon}"></i>
                        <div>
                            <h4>${escapeHTML(activity.name)}</h4>
                            <p>${escapeHTML(activity.description)}</p>
                        </div>
                    </article>
                `).join("")}
            </div>
        `;
    }

    const programDetails = {
        islam: {
            title: "Pembelajaran Keislaman",
            description: "Kurikulum dan bidang ilmu yang dipelajari di pesantren.",
            render: renderCurriculum
        },
        akhlak: {
            title: "Pembinaan Akhlak",
            description: "Dokumentasi roha dan kebersamaan bersama para ulama, Abuya, dan Ummah.",
            render: renderAkhlaq
        },
        santri: {
            title: "Kebersamaan Santri",
            description: "Kegiatan ibadah, pembelajaran, dan ekstrakurikuler santri.",
            render: renderSantri
        }
    };

    function openModal(program) {
        const detail = programDetails[program];
        if (!detail) return;

        previousFocus = document.activeElement;
        modalTitle.textContent = detail.title;
        modalDescription.textContent = detail.description;
        modalContent.innerHTML = detail.render();

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        if (previousFocus) previousFocus.focus();
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            openModal(card.dataset.program);
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(card.dataset.program);
            }
        });
    });

    closeButton.addEventListener("click", closeModal);
    backButton.addEventListener("click", closeModal);

    modal.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });

    // Klik foto untuk membukanya dalam tab baru.
    modalContent.addEventListener("click", event => {
        const img = event.target.closest("img[data-zoomable]");
        if (img && img.src) {
            window.open(img.src, "_blank", "noopener");
        }
    });
})();
