import InteractiveTodoList from './components/InteractiveTodoList';

export default function App() {
  const initial = [
    { id: 1, text: "Studiare la documentazione di React", completed: true },
    { id: 2, text: "Comprendere l'uso di event.target.value", completed: true },
    { id: 3, text: "Semplificare la UI con Bootstrap 5", completed: true },
    { id: 4, text: "Collegare le repo nel README principale", completed: false }
  ];

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 10: Todo List</h1>
      <InteractiveTodoList initialTasks={initial} />
    </div>
  );
}
