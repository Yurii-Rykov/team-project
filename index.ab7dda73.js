!function(){var e,o,t,l,n,d,s;new Swiper(".mySwiper",{cssMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0},mousewheel:!0,keyboard:!0});e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),t=document.querySelector("[data-link1]"),l=document.querySelector("[data-link2]"),n=document.querySelector("[data-link3]"),d=document.querySelector("[data-link4]"),s={body:document.querySelector("body")},e.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open"),s.body.classList.toggle("no-scroll")})),t.addEventListener("click",(function(){e.classList.toggle("is-open"),o.classList.toggle("is-open"),s.body.classList.toggle("no-scroll")})),l.addEventListener("click",(function(){e.classList.toggle("is-open"),o.classList.toggle("is-open"),s.body.classList.toggle("no-scroll")})),n.addEventListener("click",(function(){e.classList.toggle("is-open"),o.classList.toggle("is-open"),s.body.classList.toggle("no-scroll")})),d.addEventListener("click",(function(){e.classList.toggle("is-open"),o.classList.toggle("is-open"),s.body.classList.toggle("no-scroll")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-header]"),openModalBtnMob:document.querySelector("[data-modal-open-header-mob]"),closeModalBtn:document.querySelector("[data-modal-close-header]"),closeModalBtnMob:document.querySelector("[data-modal-close-header-mob]"),modal:document.querySelector("[data-modal-header]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openModalBtnMob.addEventListener("click",t),e.closeModalBtnMob.addEventListener("click",t)}()}();
//# sourceMappingURL=index.ab7dda73.js.map
