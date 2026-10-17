/**
 * RUDHEER | PORTFOLIO INTERACTIVE LOGIC
 * ShadowFox UI/UX Design Internship – Beginner Level Task
 * Vanilla ES6+ JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Theme Switcher (Dark / Light) with LocalStorage & OS Preference
  // -------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0b0f17' : '#f8fafc');
    }
  };

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(newTheme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated');
    });
  }

  // -------------------------------------------------------------------------
  // 2. Reading Progress Bar & Header Scroll Shadow
  // -------------------------------------------------------------------------
  const scrollProgress = document.getElementById('scrollProgress');
  const siteHeader = document.getElementById('siteHeader');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (siteHeader) {
      if (scrollTop > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Menu & Backdrop
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMobileMenu = () => {
    if (navMenu && mobileToggle && mobileBackdrop) {
      navMenu.classList.remove('is-active');
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  const openMobileMenu = () => {
    if (navMenu && mobileToggle && mobileBackdrop) {
      navMenu.classList.add('is-active');
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileBackdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // -------------------------------------------------------------------------
  // 4. Scroll Spy - Active Navigation Link Tracking
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // -------------------------------------------------------------------------
  // 5. Skills Filtering Logic
  // -------------------------------------------------------------------------
  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const cardCategories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 6. Projects Filtering Logic
  // -------------------------------------------------------------------------
  const projFilterBtns = document.querySelectorAll('.proj-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      projFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const pfilter = btn.getAttribute('data-pfilter');

      projectCards.forEach((pcard) => {
        const pCategory = pcard.getAttribute('data-pcategory') || '';
        if (pfilter === 'all' || pCategory.includes(pfilter)) {
          pcard.style.display = 'flex';
        } else {
          pcard.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 7. Project Details Data & Modal Logic
  // -------------------------------------------------------------------------
  const projectData = {
    mediscan: {
      title: 'Team 3 – Drone Collision Prevention',
      category: 'Team DSA Capstone Project',
      tech: ['Java', 'Data Structures', 'Team Project', 'Prototype'],
      overview: 'A working team capstone prototype designed around the problem of preventing drones from colliding.',
      features: [
        'Addresses a drone collision-prevention use case.',
        'Developed as a team capstone project.',
        'See the repository README and source files for implementation details.'
      ],
      impact: 'Explores how structured problem solving and software design can be applied to drone collision prevention.',
      repo: 'https://github.com/Rudheer09/Team-3-DSA-Capstone-Project'
    },
    algoflow: {
      title: 'Django Library Management Web App',
      category: 'Web Application',
      tech: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
      overview: 'A simple Library Management Web Application built using Django and SQLite.',
      features: [
        'Demonstrates Django Models, Views, URLs, Forms and Templates.',
        'Includes database migrations and Django Admin.',
        'See the repository README for setup and usage instructions.'
      ],
      impact: 'Demonstrates the structure of a small database-backed web application using Django.',
      repo: 'https://github.com/Rudheer09/Django-Web-application'
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalContent = document.getElementById('modalContent');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  const openProjectModal = (projectId) => {
    const data = projectData[projectId];
    if (!data || !modalContent || !projectModal) return;

    modalContent.innerHTML = `
      <h3 id="modalTitle" class="modal-h3">${data.title}</h3>
      <p class="modal-sub">${data.category}</p>

      <div class="modal-tech-row">
        ${data.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
      </div>

      <div class="modal-section-block">
        <h4>Project Overview</h4>
        <p>${data.overview}</p>
      </div>

      <div class="modal-section-block">
        <h4>Key Technical Features</h4>
        <ul>
          ${data.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section-block">
        <h4>Engineering Significance & Impact</h4>
        <p>${data.impact}</p>
      </div>

      <div class="modal-cta-row">
        <a href="#contact" class="btn btn-primary modal-contact-trigger">
          <span>Discuss Project</span>
        </a>
        <a href="${data.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>View on GitHub ↗</span>
        </a>
      </div>
    `;

    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook up internal contact trigger
    const modalContactTrigger = modalContent.querySelector('.modal-contact-trigger');
    if (modalContactTrigger) {
      modalContactTrigger.addEventListener('click', () => {
        closeProjectModal();
      });
    }
  };

  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.remove('is-open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  viewProjectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      openProjectModal(projKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // -------------------------------------------------------------------------
  // 8. Resume Summary Modal Logic
  // -------------------------------------------------------------------------
  const resumeModal = document.getElementById('resumeModal');
  const resumePreviewBtn = document.getElementById('resumePreviewBtn');
  const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');
  const resumeModalBackdrop = document.getElementById('resumeModalBackdrop');
  const resumeToContactBtn = document.getElementById('resumeToContactBtn');

  const openResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.add('is-open');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('is-open');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (resumePreviewBtn) resumePreviewBtn.addEventListener('click', openResumeModal);
  if (resumeModalCloseBtn) resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  if (resumeModalBackdrop) resumeModalBackdrop.addEventListener('click', closeResumeModal);
  if (resumeToContactBtn) resumeToContactBtn.addEventListener('click', closeResumeModal);

  // Global Escape key listener for open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
      closeMobileMenu();
    }
  });

  // -------------------------------------------------------------------------
  // 9. Toast Notification System
  // -------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message, type = 'info') => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    toast.setAttribute('role', 'status');

    const iconSvg = type === 'success'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `
      <span class="toast-icon" aria-hidden="true">${iconSvg}</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto-dismiss after 3.8s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3800);
  };

  // -------------------------------------------------------------------------
  // 10. Copy Email to Clipboard Feature
  // -------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailLink = document.getElementById('emailLink');

  if (copyEmailBtn && emailLink) {
    copyEmailBtn.addEventListener('click', () => {
      const emailText = emailLink.textContent.trim();
      navigator.clipboard.writeText(emailText).then(() => {
        showToast('Email address copied to clipboard!', 'success');
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = emailText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email address copied to clipboard!', 'success');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 11. Contact Form Real-Time Validation & Submission Simulation
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const charCounter = document.getElementById('charCounter');
  const submitBtn = document.getElementById('submitBtn');
  const formAlert = document.getElementById('formAlert');

  // Character counter for message textarea
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const currentLength = messageInput.value.length;
      charCounter.textContent = `${currentLength} / 500`;
    });
  }

  // Validation helper routines
  const validateName = () => {
    const val = nameInput.value.trim();
    const errorEl = document.getElementById('nameError');
    if (!val) {
      setError(nameInput, errorEl, 'Please enter your full name.');
      return false;
    }
    if (val.length < 2) {
      setError(nameInput, errorEl, 'Name must be at least 2 characters long.');
      return false;
    }
    clearError(nameInput, errorEl);
    return true;
  };

  const validateEmail = () => {
    const val = emailInput.value.trim();
    const errorEl = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      setError(emailInput, errorEl, 'Please provide an email address.');
      return false;
    }
    if (!emailPattern.test(val)) {
      setError(emailInput, errorEl, 'Please enter a valid email address (e.g. name@domain.com).');
      return false;
    }
    clearError(emailInput, errorEl);
    return true;
  };

  const validateSubject = () => {
    const val = subjectInput.value.trim();
    const errorEl = document.getElementById('subjectError');
    if (!val) {
      setError(subjectInput, errorEl, 'Please specify a subject for your inquiry.');
      return false;
    }
    if (val.length < 3) {
      setError(subjectInput, errorEl, 'Subject must be at least 3 characters.');
      return false;
    }
    clearError(subjectInput, errorEl);
    return true;
  };

  const validateMessage = () => {
    const val = messageInput.value.trim();
    const errorEl = document.getElementById('messageError');
    if (!val) {
      setError(messageInput, errorEl, 'Please enter your message.');
      return false;
    }
    if (val.length < 10) {
      setError(messageInput, errorEl, 'Message must be at least 10 characters.');
      return false;
    }
    clearError(messageInput, errorEl);
    return true;
  };

  const setError = (input, errorEl, msg) => {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    if (errorEl) errorEl.textContent = msg;
  };

  const clearError = (input, errorEl) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (errorEl) errorEl.textContent = '';
  };

  // Real-time blur validation
  if (nameInput) nameInput.addEventListener('blur', validateName);
  if (emailInput) emailInput.addEventListener('blur', validateEmail);
  if (subjectInput) subjectInput.addEventListener('blur', validateSubject);
  if (messageInput) messageInput.addEventListener('blur', validateMessage);

  // Form submission handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        showToast('Please fix the highlighted fields in the form.', 'error');
        return;
      }

      // This static portfolio has no email backend configured. Do not claim that a message was sent.
      const emailLink = document.getElementById('emailLink');
      const configuredEmail = emailLink ? emailLink.dataset.email : '';
      if (!configuredEmail || !configuredEmail.includes('@') || configuredEmail.includes('ADD_YOUR_EMAIL')) {
        if (formAlert) {
          formAlert.className = 'form-alert';
          formAlert.textContent = 'The contact form is not connected yet. The portfolio owner must add a real email address before messages can be sent.';
          formAlert.style.display = 'block';
        }
        showToast('Contact email is not configured yet.', 'error');
        return;
      }

      const mailSubject = encodeURIComponent(subjectInput.value.trim());
      const mailBody = encodeURIComponent(`From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`);
      window.location.href = `mailto:${configuredEmail}?subject=${mailSubject}&body=${mailBody}`;
    });
  }

  // -------------------------------------------------------------------------
  // 12. Dynamic Year in Footer
  // -------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  // -------------------------------------------------------------------------
  // 13. Back to Top Smooth Scroll
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
