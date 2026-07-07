import { useState } from 'react';

export default function LoginForm({ onLogin, minEmailLength = 5, minPasswordLength = 8 }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = email.length >= minEmailLength && email.includes('@');
  const isPasswordValid = password.length >= minPasswordLength;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm p-4 border-0">
      <h3 className="text-center mb-4 fw-bold text-dark">Accesso Area Riservata</h3>
      
      <div className="mb-3">
        <label className="form-label fw-bold text-secondary">Email</label>
        <input
          type="email"
          placeholder="nome@esempio.it"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // USING event.target.value
          className={`form-control form-control-lg ${email && !isEmailValid ? 'is-invalid' : ''}`}
        />
        {email && !isEmailValid && (
          <div className="invalid-feedback">
            Inserisci un'email valida (almeno {minEmailLength} caratteri con '@')
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold text-secondary">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // USING event.target.value
          className={`form-control form-control-lg ${password && !isPasswordValid ? 'is-invalid' : ''}`}
        />
        {password && !isPasswordValid && (
          <div className="invalid-feedback">
            La password deve essere di almeno {minPasswordLength} caratteri
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`btn w-100 fw-bold py-3 shadow-sm ${isFormValid ? 'btn-primary' : 'btn-secondary'}`}
      >
         Accedi
      </button>
    </form>
  );
}
