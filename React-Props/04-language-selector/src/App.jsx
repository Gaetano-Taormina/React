import { useState } from 'react';

function LanguageSelector({ messages }) {
  const [currentLang, setCurrentLang] = useState('it');
  const flags = { it: '🇮🇹', en: '🇬🇧', es: '🇪🇸', fr: '🇫🇷' };
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

export default function App() {
  const welcomeMessages = {
    it: "Benvenuti nella nostra applicazione React moderna con Bootstrap!",
    en: "Welcome to our modern React application built with Bootstrap!",
    es: "¡Bienvenidos a nuestra aplicación React moderna con Bootstrap!",
    fr: "Bienvenue dans notre application React moderne avec Bootstrap!"
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 4: Selettore Lingua</h1>
      <LanguageSelector messages={welcomeMessages} />
    </div>
  );
}
