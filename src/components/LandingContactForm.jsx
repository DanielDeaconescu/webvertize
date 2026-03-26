import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';

function LandingContactForm({ selectedPackage, onSubmitHandler, loading }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const ref = useRef(null);
  const widgetRef = useRef(null);

  // registering the virtual field
  useEffect(() => {
    register('cf_turnstile_token', { required: true });
  }, [register]);

  const onTurnstileSuccess = (token) => {
    setValue('cf_turnstile_token', token, {
      shouldValidate: true,
    });
  };

  // Rendering the turnstile
  useEffect(() => {
    if (!window.turnstile) return;

    widgetRef.current = window.turnstile.render(ref.current, {
      sitekey: '0x4AAAAAACGwYToVvX6OMIl0',
      callback: onTurnstileSuccess,
    });

    return () => {
      if (widgetRef.current !== null) {
        window.turnstile.remove(widgetRef.current);
      }
    };
  }, []);

  function submitHandler(data) {
    console.log('data in submitHandler: ', data);
    onSubmitHandler(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Nume
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            {...register('name', {
              required: "Câmplul 'Nume' este obligatoriu!",
            })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="form-label">
            Număr de telefon
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            {...register('phone', {
              required: "Câmplul 'Număr de telefon' este obligatoriu!",
            })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="package" className="form-label">
            Pachet de interes (opțional)
          </label>
          <select
            name="package"
            id="package"
            className="form-select"
            {...register('package')}
          >
            <option value="basic">Pachetul Basic</option>
            <option value="standard">Pachetul Standard</option>
            <option value="premium">Pachetul Premium</option>
            <option value="unknown">Nu știu încă</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mesaj (opțional)
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            placeholder="Spune-ne puțin despre afacerea ta..."
            rows="4"
            {...register('message')}
          ></textarea>
        </div>
        {/* Turnstile */}
        <div className="d-flex justify-content-center mb-2">
          <div
            ref={ref}
            className="turnstile-landing-page"
            data-theme="light"
            data-size="normal"
          ></div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {loading && <LoadingSpinner />}
          Trimite
        </button>
      </form>
    </div>
  );
}

export default LandingContactForm;
