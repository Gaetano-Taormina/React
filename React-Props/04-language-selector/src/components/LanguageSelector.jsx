import { useState } from 'react';
export default function LanguageSelector({ messages }) {
  const [currentLang, setCurrentLang] = useState('it');
  const flags = { it: '', en: '', es: '', fr: '' };
  const names = { it: 'Italiano', en: 'English', es: 'Español', fr: 'Français' };
  return (
    <div className="card shadow-sm p-4 text-center border-0">
      <div className="p-4 bg-light rounded mb-4 border">
        <div className="display-4 mb-2">{flags[currentLang]}</div>
        <p className="lead mb-0 fw-medium text-dark">{messages[currentLang]}</p>
      </div>
      <div className="row g-2">
        {Object.keys(messages).map((lang) => (
          <div className="col-6" key={lang}>
            <button
              onClick={() => setCurrentLang(lang)}
              className={`btn w-100 py-3 fw-bold shadow-sm ${currentLang === lang ? 'btn-warning text-dark' : 'btn-outline-secondary'}`}
            >
              {flags[lang]} {names[lang]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
