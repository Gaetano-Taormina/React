import { useState } from 'react';

const GREETINGS = {
  it: "Benvenuto nel nostro portale!",
  en: "Welcome to our portal!",
  es: "¡Bienvenido a nuestro portal!",
  fr: "Bienvenue sur notre portail!"
};

export default function LangSelector() {
  const [lang, setLang] = useState("it");

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 11: Selettore Lingua</h3>
        <select className="form-select mb-3" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="it">Italiano</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <div className="alert alert-success text-center mb-0 fs-5 fw-bold">
          {GREETINGS[lang]}
        </div>
      </div>
    </div>
  );
}