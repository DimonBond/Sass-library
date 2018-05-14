Array.from(document.querySelectorAll('[data-panel-toggle]')).forEach((node) => {
            node.addEventListener('click', () => {
                node.classList.toggle("ada-panel__icon--active");
                node.closest(".ada-panel").querySelector(".ada-panel__content").classList.toggle("ada-panel__content--visible");

            });
        });
