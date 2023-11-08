document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOMContentLoaded");

    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        // console.log(groupHeader);

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon:
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body:
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies:
        const allGroups = faqContainer.querySelectorAll('faq-group');

        allGroups.forEach((aGroup) => {
            // we consider only the other groups:
            if(aGroup != group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })
    })
});

// Mobile Menu:
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    /* when we click the Hamburger Button the Mobile Menu will be displayed/ hidden (if we have less then 670px): */
    hamburgerButton.addEventListener('click', () => 
        mobileMenu.classList.toggle('active')
    );
}); 
