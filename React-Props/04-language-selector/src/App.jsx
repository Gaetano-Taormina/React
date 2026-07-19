import LanguageSelector from './components/LanguageSelector';
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
