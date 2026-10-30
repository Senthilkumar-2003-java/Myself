import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function AnimatedDialog({ children, className = '', titleId, descriptionId, onClose }) {
  const dialogRef = useRef(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('portfolio:modal', { detail: { open: true } }));
    return () => {
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
