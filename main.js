// Mobile Menu for responsive layout

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function openMobileMenu() {
    mobileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking on navigation links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-section a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// add projects dynamically

document.addEventListener('DOMContentLoaded', () => {
    const projectsData = [
        {
            title: "Quickfire Quiz Game",
            keywords: "Golang, PostgreSQL, JWT Authentication, React, CI/CD",
            year: "2025",
            description: [
                "I'm passionate about building scalable backend systems that solve real-world problems through clean architecture and intuitive user experiences.",
                "This project is a full-stack quiz application inspired by Gophercises, reimagined with dynamic quizzes, user authentication, and a real-time leaderboard to enhance engagement and functionality."
            ],
            links: [
                { text: "Live Demo", url: "#", icon: "assets/link_icon.png" },
                { text: "GitHub", url: "#", icon: "assets/link_icon.png" }
            ],
            imageBackground: "",
            pagination: "1/2",
            arrows: {
                back: "assets/arrow_back.png",
                forward: "assets/arrow_forward.png"
            }
        },
        {
            title: "My Second Project",
            keywords: "Python, Django, HTML, CSS, JavaScript",
            year: "2024",
            description: [
                "I'm passionate about building scalable backend systems that solve real-world problems through clean architecture and intuitive user experiences.",
                "This project is a full-stack quiz application inspired by Gophercises, reimagined with dynamic quizzes, user authentication, and a real-time leaderboard to enhance engagement and functionality."
            ],
            links: [
                { text: "Live Demo", url: "#", icon: "assets/link_icon.png" },
                { text: "Github", url: "#", icon: "assets/link_icon.png" }
            ],
            imageBackground: "",
            pagination: "1/1",
            arrows: {
                back: "assets/arrow_back.png",
                forward: "assets/arrow_forward.png"
            }
        },
        {
            title: "Third Project Example",
            keywords: "Java, Spring Boot, React Native",
            year: "2023",
            description: [
                "I'm passionate about building scalable backend systems that solve real-world problems through clean architecture and intuitive user experiences.",
                "This project is a full-stack quiz application inspired by Gophercises, reimagined with dynamic quizzes, user authentication, and a real-time leaderboard to enhance engagement and functionality."
            ],
            links: [
                { text: "Live Demo", url: "#", icon: "assets/link_icon.png" },
                { text: "Github", url: "#", icon: "assets/link_icon.png" }
            ],
            imageBackground: "",
            pagination: "1/3",
            arrows: {
                back: "assets/arrow_back.png",
                forward: "assets/arrow_forward.png"
            }
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    const mobileProjectsContainer = document.getElementById('mobile-projects-container');

    projectsData.forEach((project, index) => {
        // Desktop Version (existing code)
        const projectWrapper = document.createElement('div');
        projectWrapper.classList.add('main-project-wrapper', 'flex-container');

        if ((index + 1) % 2 === 0) {
            projectWrapper.classList.add('flipped');
        }

        const infoSide = document.createElement('div');
        infoSide.classList.add('info-side', 'flex-container', 'column');

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = project.title;
        infoSide.appendChild(projectTitle);

        const projectKeywords = document.createElement('div');
        projectKeywords.classList.add('project-key-words');
        projectKeywords.textContent = project.keywords;
        infoSide.appendChild(projectKeywords);

        const projectYear = document.createElement('div');
        projectYear.classList.add('project-year');
        projectYear.textContent = project.year;
        infoSide.appendChild(projectYear);

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description', 'flex-container', 'column');
        projectDescription.style.gap = '1rem';
        project.description.forEach(paragraphText => {
            const p = document.createElement('p');
            p.textContent = paragraphText;
            projectDescription.appendChild(p);
        });
        infoSide.appendChild(projectDescription);

        const projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links', 'flex-container');
        project.links.forEach(link => {
            const linkDiv = document.createElement('div');
            linkDiv.classList.add('underline');
            linkDiv.innerHTML = `<a href="${link.url}" target="_blank">${link.text}<img src="${link.icon}" alt="link icon" width="15px" height="15px"></a>`;
            projectLinks.appendChild(linkDiv);
        });
        infoSide.appendChild(projectLinks);
        projectWrapper.appendChild(infoSide);

        // Image Side (existing code)
        const imageSide = document.createElement('div');
        imageSide.classList.add('image-side', 'flex-container', 'column');
        imageSide.style.gap = '1rem';

        const imageBackground = document.createElement('div');
        imageBackground.classList.add('image-background');
        imageSide.appendChild(imageBackground);

        const imageScrollContainer = document.createElement('div');
        imageScrollContainer.classList.add('image-scroll-container', 'flex-container');
        imageScrollContainer.style.justifyContent = 'space-between';
        imageScrollContainer.style.padding = '2%';

        const paginationIndicator = document.createElement('div');
        paginationIndicator.classList.add('pagination-indicator');
        paginationIndicator.style.fontSize = '15px';
        paginationIndicator.textContent = project.pagination;
        imageScrollContainer.appendChild(paginationIndicator);

        const scrollArrowIcons = document.createElement('div');
        scrollArrowIcons.classList.add('scroll-arrow-icons', 'flex-container');
        scrollArrowIcons.style.gap = '1.5rem';

        const backArrow = document.createElement('img');
        backArrow.src = project.arrows.back;
        backArrow.alt = 'back arrow';
        backArrow.width = 20;
        backArrow.height = 20;
        scrollArrowIcons.appendChild(backArrow);

        const forwardArrow = document.createElement('img');
        forwardArrow.src = project.arrows.forward;
        forwardArrow.alt = 'forward arrow';
        forwardArrow.width = 20;
        forwardArrow.height = 20;
        scrollArrowIcons.appendChild(forwardArrow);

        imageScrollContainer.appendChild(scrollArrowIcons);
        imageSide.appendChild(imageScrollContainer);
        projectWrapper.appendChild(imageSide);

        projectsContainer.appendChild(projectWrapper);

        // Mobile Version (new code)
        const mobileProjectWrapper = document.createElement('div');
        mobileProjectWrapper.classList.add('mobile-project-wrapper');

        // Mobile Project Title
        const mobileProjectTitle = document.createElement('div');
        mobileProjectTitle.classList.add('mobile-project-title');
        mobileProjectTitle.textContent = project.title;
        mobileProjectWrapper.appendChild(mobileProjectTitle);

        // Mobile Project Keywords
        const mobileProjectKeywords = document.createElement('div');
        mobileProjectKeywords.classList.add('mobile-project-keywords');
        mobileProjectKeywords.textContent = project.keywords;
        mobileProjectWrapper.appendChild(mobileProjectKeywords);

        // Mobile Project Year
        const mobileProjectYear = document.createElement('div');
        mobileProjectYear.classList.add('mobile-project-year');
        mobileProjectYear.textContent = project.year;
        mobileProjectWrapper.appendChild(mobileProjectYear);

        // Mobile Image Background
        const mobileImageBackground = document.createElement('div');
        mobileImageBackground.classList.add('mobile-image-background');
        mobileProjectWrapper.appendChild(mobileImageBackground);

        // Mobile Pagination Elements
        const mobilePaginationContainer = document.createElement('div');
        mobilePaginationContainer.classList.add('mobile-pagination-container', 'flex-container');
        mobilePaginationContainer.style.justifyContent = 'space-between';
        mobilePaginationContainer.style.alignItems = 'center';

        const mobilePaginationIndicator = document.createElement('div');
        mobilePaginationIndicator.classList.add('mobile-pagination-indicator');
        mobilePaginationIndicator.textContent = project.pagination;
        mobilePaginationContainer.appendChild(mobilePaginationIndicator);

        const mobileScrollArrowIcons = document.createElement('div');
        mobileScrollArrowIcons.classList.add('mobile-scroll-arrow-icons', 'flex-container');
        mobileScrollArrowIcons.style.gap = '1.5rem';

        const mobileBackArrow = document.createElement('img');
        mobileBackArrow.src = project.arrows.back;
        mobileBackArrow.alt = 'back arrow';
        mobileBackArrow.width = 20;
        mobileBackArrow.height = 20;
        mobileScrollArrowIcons.appendChild(mobileBackArrow);

        const mobileForwardArrow = document.createElement('img');
        mobileForwardArrow.src = project.arrows.forward;
        mobileForwardArrow.alt = 'forward arrow';
        mobileForwardArrow.width = 20;
        mobileForwardArrow.height = 20;
        mobileScrollArrowIcons.appendChild(mobileForwardArrow);

        mobilePaginationContainer.appendChild(mobileScrollArrowIcons);
        mobileProjectWrapper.appendChild(mobilePaginationContainer);

        // Mobile Project Description
        const mobileProjectDescription = document.createElement('div');
        mobileProjectDescription.classList.add('mobile-project-description');
        project.description.forEach(paragraphText => {
            const p = document.createElement('p');
            p.textContent = paragraphText;
            mobileProjectDescription.appendChild(p);
        });
        mobileProjectWrapper.appendChild(mobileProjectDescription);

        // Mobile Project Links
        const mobileProjectLinks = document.createElement('div');
        mobileProjectLinks.classList.add('mobile-project-links', 'flex-container');
        project.links.forEach(link => {
            const linkDiv = document.createElement('div');
            linkDiv.classList.add('underline');
            linkDiv.innerHTML = `<a href="${link.url}" target="_blank">${link.text}<img src="${link.icon}" alt="link icon" width="15px" height="15px"></a>`;
            mobileProjectLinks.appendChild(linkDiv);
        });
        mobileProjectWrapper.appendChild(mobileProjectLinks);

        mobileProjectsContainer.appendChild(mobileProjectWrapper);
    });
});