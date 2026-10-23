(() => {
  const menuButton = document.querySelector('.menu-button');
  const primaryNav = document.querySelector('.primary-nav');

  if (menuButton && primaryNav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      primaryNav.classList.remove('open');
      document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      primaryNav.classList.toggle('open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 860) closeMenu();
    });
  }

  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq-item button[aria-expanded="true"]').forEach((otherButton) => {
        if (otherButton === button) return;
        otherButton.setAttribute('aria-expanded', 'false');
        const otherPanelId = otherButton.getAttribute('aria-controls');
        const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
        if (otherPanel) otherPanel.hidden = true;
      });

      button.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach((item) => item.classList.add('is-hidden'));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.classList.remove('is-hidden');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const slotDatesEl = document.getElementById('slot-dates');
  const slotTimesEl = document.getElementById('slot-times');
  const slotSelectedEl = document.getElementById('slot-selected');
  let consultSlot = null;

  if (slotDatesEl && slotTimesEl) {
    const SLOT_TIMES = [
      { label: '10:00 AM', h: 10, m: 0 },
      { label: '11:30 AM', h: 11, m: 30 },
      { label: '1:00 PM', h: 13, m: 0 },
      { label: '2:30 PM', h: 14, m: 30 },
      { label: '4:00 PM', h: 16, m: 0 }
    ];
    // Snapshot of the sample bookings stubbed on the demo Google Calendar (America/Denver).
    const BOOKED = new Set([
      '2026-10-21|10:00 AM', '2026-10-21|2:30 PM',
      '2026-10-22|11:30 AM',
      '2026-10-23|10:00 AM', '2026-10-23|1:00 PM', '2026-10-23|4:00 PM',
      '2026-10-26|2:30 PM',
      '2026-10-27|10:00 AM', '2026-10-27|11:30 AM',
      '2026-10-28|1:00 PM',
      '2026-10-29|4:00 PM',
      '2026-10-30|11:30 AM', '2026-10-30|2:30 PM'
    ]);
    const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const dayFmt = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
    const longFmt = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const days = [];
    const cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    while (days.length < 10) {
      const wd = cursor.getDay();
      if (wd >= 1 && wd <= 5) days.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    let activeDate = days[0];

    const renderTimes = () => {
      slotTimesEl.innerHTML = '';
      const now = new Date();
      const isToday = iso(activeDate) === iso(now);
      SLOT_TIMES.forEach((slot) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'slot-time';
        btn.textContent = slot.label;
        const booked = BOOKED.has(`${iso(activeDate)}|${slot.label}`);
        const past = isToday && (slot.h < now.getHours() || (slot.h === now.getHours() && slot.m <= now.getMinutes()));
        if (booked || past) {
          btn.disabled = true;
          btn.title = booked ? 'Already booked' : 'Time has passed';
        }
        if (consultSlot && consultSlot.date === iso(activeDate) && consultSlot.label === slot.label) {
          btn.classList.add('is-selected');
        }
        btn.addEventListener('click', () => {
          consultSlot = { date: iso(activeDate), label: slot.label, text: `${longFmt.format(activeDate)} at ${slot.label}` };
          if (slotSelectedEl) slotSelectedEl.textContent = `Selected: ${consultSlot.text}. It will be included in your request.`;
          renderTimes();
        });
        slotTimesEl.appendChild(btn);
      });
    };

    days.forEach((day) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-date';
      if (iso(day) === iso(activeDate)) btn.classList.add('is-selected');
      btn.innerHTML = `<small>${dayFmt.format(day)}</small>${day.getDate()}`;
      btn.addEventListener('click', () => {
        activeDate = day;
        slotDatesEl.querySelectorAll('.slot-date').forEach((b) => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        renderTimes();
      });
      slotDatesEl.appendChild(btn);
    });
    renderTimes();
  }

  const form = document.getElementById('consultation-form');
  if (form) {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.querySelector('#visitor-name').value.trim();
      const phone = form.querySelector('#visitor-phone').value.trim();
      const message = form.querySelector('#visitor-message').value.trim();
      const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked'))
        .map((input) => input.value);

      if (!name || !phone) {
        if (status) status.textContent = 'Please add your name and phone number so Designer Fabrics can reach you.';
        (!name ? form.querySelector('#visitor-name') : form.querySelector('#visitor-phone')).focus();
        return;
      }

      const subject = encodeURIComponent(`Consultation request from ${name}`);
      const bodyLines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Interested in: ${interests.length ? interests.join(', ') : 'Not specified'}`,
        '',
        'Project details:',
        message || 'No additional details provided.'
      ];
      if (consultSlot) bodyLines.splice(2, 0, `Preferred consultation time: ${consultSlot.text}`);
      const body = encodeURIComponent(bodyLines.join('\n'));

      if (status) status.textContent = 'Opening your email app with your consultation request…';
      window.location.href = `mailto:designerfabricsinc@yahoo.com?subject=${subject}&body=${body}`;
    });
  }

  const poForm = document.getElementById('photo-order-form');
  if (poForm) {
    const fileInput = document.getElementById('po-photos');
    const previews = document.getElementById('po-previews');
    const photoNote = document.getElementById('po-photo-note');
    const refEl = document.getElementById('po-ref');
    const errorEl = document.getElementById('po-error');
    const statusEl = document.getElementById('po-status');
    const fallbackPanel = document.getElementById('po-fallback');
    const mailtoLink = document.getElementById('po-mailto');
    const copyButton = document.getElementById('po-copy');
    const copyStatus = document.getElementById('po-copy-status');
    const MAX_PHOTOS = 6;
    const MAX_BYTES = 12 * 1024 * 1024;
    let photos = [];
    let sizeWarning = '';
    let refCode = '';

    const ensureRef = () => {
      if (refCode) return refCode;
      const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
      let code = '';
      for (let i = 0; i < 5; i += 1) {
        code += chars[Math.floor(Math.random() * chars.length)];
      }
      refCode = `DF-${code}`;
      if (refEl) refEl.textContent = refCode;
      return refCode;
    };
    ['pointerdown', 'focusin', 'change'].forEach((evt) => poForm.addEventListener(evt, ensureRef));

    poForm.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        ensureRef();
        const pressed = chip.getAttribute('aria-pressed') === 'true';
        chip.setAttribute('aria-pressed', String(!pressed));
      });
    });

    const renderPreviews = () => {
      previews.innerHTML = '';
      photos.forEach((photo, index) => {
        const figure = document.createElement('figure');
        figure.className = 'photo-thumb';
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = `Photo ${index + 1} you added`;
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'thumb-remove';
        remove.textContent = '×';
        remove.setAttribute('aria-label', `Remove photo ${index + 1}`);
        remove.addEventListener('click', () => {
          URL.revokeObjectURL(photo.url);
          photos.splice(index, 1);
          renderPreviews();
        });
        figure.append(img, remove);
        previews.appendChild(figure);
      });
      const countText = photos.length
        ? `${photos.length} of ${MAX_PHOTOS} photos added.`
        : '';
      photoNote.textContent = [countText, sizeWarning].filter(Boolean).join(' ');
    };

    if (fileInput) {
      fileInput.addEventListener('change', () => {
        ensureRef();
        const picked = Array.from(fileInput.files || []);
        sizeWarning = '';
        let capped = false;
        picked.forEach((file) => {
          if (!file.type.startsWith('image/')) return;
          if (photos.length >= MAX_PHOTOS) { capped = true; return; }
          if (file.size > MAX_BYTES) {
            sizeWarning = `Heads up: “${file.name}” is over 12MB—it may be too large to email. Consider sending it over Wi-Fi or bringing it on your phone.`;
          }
          photos.push({ file, url: URL.createObjectURL(file) });
        });
        if (capped) {
          sizeWarning = [sizeWarning, `Only the first ${MAX_PHOTOS} photos were kept.`].filter(Boolean).join(' ');
        }
        fileInput.value = '';
        renderPreviews();
      });
    }

    const fieldValue = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    const buildSummary = () => {
      const interests = Array.from(poForm.querySelectorAll('.chip[aria-pressed="true"]'))
        .map((chip) => chip.textContent.trim());
      const lines = [
        `Start Your Design — ${refCode}`,
        '',
        `Name: ${fieldValue('po-name')}`,
        `Phone: ${fieldValue('po-phone')}`,
        `Email: ${fieldValue('po-email') || 'Not provided'}`,
        `Interested in: ${interests.length ? interests.join(', ') : 'Not specified'}`,
        `Approx. size / measurements: ${fieldValue('po-size') || 'Not provided'}`,
        '',
        'Notes:',
        fieldValue('po-notes') || 'No notes provided.',
        '',
        `Photos selected: ${photos.length}${photos.length ? ` (${photos.map((p) => p.file.name).join(', ')})` : ''}`
      ];
      return lines.join('\n');
    };

    const showFallback = (summary) => {
      if (mailtoLink) {
        mailtoLink.href = `mailto:designerfabricsinc@yahoo.com?subject=${encodeURIComponent(`Start Your Design ${refCode}`)}&body=${encodeURIComponent(summary)}`;
      }
      if (fallbackPanel) {
        fallbackPanel.hidden = false;
        fallbackPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (statusEl) {
        statusEl.textContent = photos.length
          ? 'Use the email option below to send everything—just attach your photos before you hit send.'
          : 'Use the email option below to send your details to the showroom.';
      }
    };

    poForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      ensureRef();
      if (fallbackPanel) fallbackPanel.hidden = true;
      if (statusEl) statusEl.textContent = '';

      const name = fieldValue('po-name');
      const phone = fieldValue('po-phone');
      const notes = fieldValue('po-notes');
      const problems = [];
      if (!photos.length && !notes) problems.push('Add at least one photo—or a few notes about your project—so we know what you’re dreaming up.');
      if (!name) problems.push('Please add your name.');
      if (!phone) problems.push('Please add your phone number so the showroom can reach you.');

      if (problems.length) {
        errorEl.textContent = problems.join(' ');
        errorEl.hidden = false;
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (!name) document.getElementById('po-name').focus({ preventScroll: true });
        else if (!phone) document.getElementById('po-phone').focus({ preventScroll: true });
        return;
      }
      errorEl.hidden = true;

      const summary = buildSummary();

      if (photos.length && navigator.canShare) {
        const files = photos.map((p) => p.file);
        let canShareFiles = false;
        try { canShareFiles = navigator.canShare({ files }); } catch (e) { canShareFiles = false; }
        if (canShareFiles) {
          try {
            await navigator.share({ files, title: `Start Your Design ${refCode}`, text: summary });
            if (statusEl) statusEl.textContent = 'Shared—thank you! The showroom will be in touch soon. Mention your reference if you call: ' + refCode + '.';
            return;
          } catch (err) {
            if (err && err.name === 'AbortError') {
              if (statusEl) statusEl.textContent = 'No problem—your photos and details are still here whenever you’re ready to send.';
              return;
            }
          }
        }
      } else if (!photos.length && navigator.share) {
        try {
          await navigator.share({ title: `Start Your Design ${refCode}`, text: summary });
          if (statusEl) statusEl.textContent = 'Shared—thank you! The showroom will be in touch soon.';
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') {
            if (statusEl) statusEl.textContent = 'No problem—your details are still here whenever you’re ready to send.';
            return;
          }
        }
      }

      showFallback(summary);
    });

    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        ensureRef();
        try {
          await navigator.clipboard.writeText(buildSummary());
          copyStatus.textContent = 'Details copied—paste them into any email or message.';
          copyButton.textContent = 'Copied ✓';
          window.setTimeout(() => { copyButton.textContent = 'Copy Details'; }, 2200);
        } catch (e) {
          copyStatus.textContent = 'Copy isn’t available in this browser—the email button above includes everything.';
        }
      });
    }
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
