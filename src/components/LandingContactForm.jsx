import { useForm } from 'react-hook-form';

function LandingContactForm({ selectedPackage, onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
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
        <div className="mb-4">
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

        <button type="submit" className="btn btn-primary w-100">
          Trimite
        </button>
      </form>
    </div>
  );
}

export default LandingContactForm;
