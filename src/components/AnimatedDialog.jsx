import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function AnimatedDialog({ children, className = '', titleId, descriptionId, onClose }) {
  const dialogRef = useRef(null);
  const [closing, setClosing] = useState(false);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('portfolio:modal', { detail: { open: true } }));
    // Keep project previews entirely inside the visible viewport, including
    // short screens and orientation changes, without hiding any details.
    const inner = dialog.querySelector('.animated-dialog-inner');
    const fitProject = () => {
      const viewport = window.visualViewport;
      const width = Math.max(1, Math.min(880, (viewport?.width || window.innerWidth) - 32));
      inner.style.width = `${width}px`;
      const naturalHeight = inner.scrollHeight;
      if (!naturalHeight) return;
      const availableHeight = Math.max(1, (viewport?.height || window.innerHeight) - 34);
      const scale = Math.min(1, availableHeight / naturalHeight);
      inner.style.transformOrigin = 'top left';
      inner.style.transform = `scale(${scale})`;
      dialog.style.width = `${width * scale + 2}px`;
      dialog.style.height = `${naturalHeight * scale + 2}px`;
    };
    const fitsViewport = dialog.classList.contains('project-modal');
    const resizeObserver = fitsViewport ? new ResizeObserver(fitProject) : null;
    if (fitsViewport) {
      fitProject();
      resizeObserver.observe(inner);
      window.addEventListener('resize', fitProject);
      window.visualViewport?.addEventListener('resize', fitProject);
    }
    return () => {
      resizeObserver?.disconnect();
      if (fitsViewport) {
        window.removeEventListener('resize', fitProject);
        window.visualViewport?.removeEventListener('resize', fitProject);
      }
      dialog.close();
      document.body.style.overflow = previousOverflow;
      window.dispatchEvent(new CustomEvent('portfolio:modal', { detail: { open: false } }));
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    if (!closing) return;
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180;
    const timeout = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timeout);
  }, [closing, onClose]);

  return (
    <dialog
      ref={dialogRef}
      data-lenis-prevent=""
      className={`animated-dialog ${className}${closing ? ' animated-dialog-closing' : ''}`}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); setClosing(true); }}
      onClick={(event) => {
        if (event.target === event.currentTarget) setClosing(true);
      }}
    >
      <div className="animated-dialog-inner">
        <button type="button" className="modal-close-btn" aria-label="Close details" autoFocus onClick={() => setClosing(true)}>
          <X size={20} />
        </button>
        {children}
      </div>
    </dialog>
  );
}
