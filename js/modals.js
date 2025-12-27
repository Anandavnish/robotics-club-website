/* ===================================
   ROBOTICS CLUB - MODAL SYSTEM
   Modal popups, image galleries
   =================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // GENERIC MODAL FUNCTIONALITY
    // ===================================

    // Create modal HTML structure if it doesn't exist
    if (!document.getElementById('genericModal')) {
        const modalHTML = `
            <div id="genericModal" class="modal">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <div class="modal-header">
                        <h2 class="modal-title"></h2>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add modal styles
        const modalStyles = `
            <style>
                .modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .modal.active {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modal-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(5px);
                }
                
                .modal-content {
                    position: relative;
                    background: var(--secondary-bg);
                    border: 2px solid var(--accent-blue);
                    border-radius: 12px;
                    max-width: 800px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    z-index: 10001;
                    animation: slideUp 0.3s ease;
                }
                
                .modal-close {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: transparent;
                    border: none;
                    color: var(--text-white);
                    font-size: 2rem;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .modal-close:hover {
                    background: var(--accent-blue);
                    color: var(--success-cyan);
                }
                
                .modal-header {
                    padding: 2rem 2rem 1rem;
                    border-bottom: 2px solid var(--accent-blue);
                }
                
                .modal-title {
                    margin: 0;
                    color: var(--success-cyan);
                }
                
                .modal-body {
                    padding: 2rem;
                }
                
                .modal-footer {
                    padding: 1rem 2rem 2rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @media (max-width: 768px) {
                    .modal-content {
                        width: 95%;
                        max-height: 95vh;
                    }
                    
                    .modal-header,
                    .modal-body,
                    .modal-footer {
                        padding: 1.5rem;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', modalStyles);
    }

    const modal = document.getElementById('genericModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    const modalFooter = modal.querySelector('.modal-footer');

    // Function to open modal
    window.openModal = function (title, content, footer = '') {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modalFooter.innerHTML = footer;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Function to close modal
    window.closeModal = function () {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Close modal on overlay click
    modalOverlay.addEventListener('click', closeModal);

    // Close modal on close button click
    modalClose.addEventListener('click', closeModal);

    // Close modal on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ===================================
    // PROJECT DETAIL MODAL
    // ===================================
    const projectDetailButtons = document.querySelectorAll('.project-detail-btn');

    projectDetailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectCard = this.closest('.project-card');
            const title = projectCard.querySelector('.card-title').textContent;
            const description = projectCard.querySelector('.card-text').textContent;
            const image = projectCard.querySelector('.card-img').src;
            const technologies = projectCard.getAttribute('data-technologies') || 'Not specified';
            const year = projectCard.getAttribute('data-year') || 'N/A';

            const content = `
                <img src="${image}" alt="${title}" style="width: 100%; border-radius: 8px; margin-bottom: 1.5rem;">
                <p style="color: var(--text-gray); line-height: 1.8;">${description}</p>
                <div style="margin-top: 1.5rem;">
                    <h4 style="color: var(--success-cyan); margin-bottom: 0.5rem;">Technologies Used:</h4>
                    <p style="color: var(--text-gray);">${technologies}</p>
                </div>
                <div style="margin-top: 1rem;">
                    <h4 style="color: var(--success-cyan); margin-bottom: 0.5rem;">Year:</h4>
                    <p style="color: var(--text-gray);">${year}</p>
                </div>
            `;

            const footer = '<button class="btn btn-primary" onclick="closeModal()">Close</button>';

            openModal(title, content, footer);
        });
    });

    // ===================================
    // IMAGE GALLERY MODAL
    // ===================================
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            const imageSrc = this.src;
            const imageAlt = this.alt;

            const content = `
                <img src="${imageSrc}" alt="${imageAlt}" style="width: 100%; border-radius: 8px;">
                <p style="text-align: center; margin-top: 1rem; color: var(--text-gray);">${imageAlt}</p>
            `;

            openModal('Image Gallery', content);
        });
    });

    // ===================================
    // EVENT REGISTRATION MODAL
    // ===================================
    const registerButtons = document.querySelectorAll('.register-btn');

    registerButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const eventName = this.getAttribute('data-event-name') || 'Event';

            const content = `
                <p style="color: var(--text-gray); margin-bottom: 1.5rem;">
                    Register your interest for: <strong style="color: var(--success-cyan);">${eventName}</strong>
                </p>
                <form id="registrationForm" style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input type="tel" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Why do you want to attend?</label>
                        <textarea class="form-textarea" rows="3" required></textarea>
                    </div>
                </form>
            `;

            const footer = `
                <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
                <button class="btn btn-primary" onclick="submitRegistration('${eventName}')">Register Interest</button>
            `;

            openModal('Event Registration', content, footer);
        });
    });

    // ===================================
    // NEWS DETAIL MODAL
    // ===================================
    const newsDetailButtons = document.querySelectorAll('.news-detail-btn');

    newsDetailButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const newsCard = this.closest('.news-card');
            const title = newsCard.querySelector('.card-title').textContent;
            const metaInfo = newsCard.querySelector('p[style*="color: var(--text-gray)"]').innerHTML;
            const fullContent = newsCard.getAttribute('data-full-content') || 'No additional details available.';
            const badge = newsCard.querySelector('.badge').outerHTML;

            const content = `
                <div style="margin-bottom: 1.5rem;">${badge}</div>
                <div style="color: var(--text-gray); font-size: 0.9rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--accent-blue); padding-bottom: 1rem;">
                    ${metaInfo}
                </div>
                <div style="line-height: 1.8; color: var(--text-white);">
                    ${fullContent}
                </div>
            `;

            const footer = '<button class="btn btn-primary" onclick="closeModal()">Close</button>';

            openModal(title, content, footer);
        });
    });
});

// ===================================
// REGISTRATION FORM SUBMISSION (GLOBAL)
// ===================================
window.submitRegistration = function (eventName) {
    const form = document.getElementById('registrationForm');
    if (!form) return;

    // Gets inputs by index since they don't have IDs
    const inputs = form.querySelectorAll('input');
    const nameInput = inputs[0];
    const emailInput = inputs[1];
    const phoneInput = inputs[2];
    const reasonInput = form.querySelector('textarea');

    // HTML5 Validation Check
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Custom Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Clean phone number (remove non-digits) and check length
    const cleanPhone = phoneInput.value.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
        alert(`Please enter a valid 10-digit phone number. (Current: ${cleanPhone.length})`);
        return;
    }

    if (reasonInput.value.trim().length < 5) {
        alert("Please provide a reason with at least 5 characters.");
        return;
    }

    // If validation passes
    closeModal();
    showNotification(`Registration successful for ${eventName}! We'll contact you soon.`);
    console.log(`Registered for ${eventName}:`, {
        name: nameInput.value,
        email: emailInput.value,
        phone: cleanPhone,
        reason: reasonInput.value
    });
};

// Notification Helper (GLOBAL)
window.showNotification = function (message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--secondary-bg);
        color: var(--success-cyan);
        padding: 1rem 2rem;
        border-radius: 8px;
        border: 1px solid var(--success-cyan);
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10002;
        animation: slideInRight 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;

    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 300);
    }, 5000);
};

// Add animation styles for notification
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// ===================================
// FUTURE API INTEGRATION NOTES
// ===================================
/*
 * When backend is integrated, add these API endpoints:
 * 
 * 1. Project details:
 *    GET /api/projects/{id}
 * 
 * 2. Event registration:
 *    POST /api/events/{id}/register
 *    Body: { name, email, phone, reason }
 * 
 * 3. Image gallery:
 *    GET /api/gallery/{category}
 * 
 * 4. Newsletter subscription:
 *    POST /api/newsletter/subscribe
 *    Body: { email }
 */