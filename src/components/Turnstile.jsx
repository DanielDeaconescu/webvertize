import { useEffect, useRef } from 'react';

export default function Turnstile({ onVerify }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let widgetId = null;
    let cancelled = false;

    function initTurnstile() {
      // Stop if component was unmounted
      if (cancelled) return;

      // Wait until both the script and the container are ready
      if (!window.turnstile || !containerRef.current) {
        setTimeout(initTurnstile, 100);
        return;
      }

      widgetId = window.turnstile.render(containerRef.current, {
        sitekey: '0x4AAAAAACGwYToVvX6OMIl0',
        theme: 'light',
        callback: (token) => {
          onVerify(token);
        },
        'expired-callback': () => {
          onVerify(null);
        },
        'error-callback': () => {
          onVerify(null);
        },
      });
    }

    initTurnstile();

    return () => {
      cancelled = true;

      if (window.turnstile && widgetId !== null) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [onVerify]);

  return <div ref={containerRef} />;
}
