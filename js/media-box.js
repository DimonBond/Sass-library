Array.from(document.querySelectorAll('[data-media-card-toggle]')).forEach((node) => {
            node.addEventListener('click', () => {
                node.classList.toggle("ada-media-box__icon--active");
                node.closest(".ada-media-box__container").querySelector(".ada-media-box__content").classList.toggle("ada-media-box__content--visible");

            });
        });
