import styles from './app.module.css';
  
import { Header } from './components/Header';
import { Tip } from './components/Tip';

export default function App() {

  function handleRestart() {
    console.log('Reiniciar Jogo');
  } 

  return (
    <div className={styles.container}>
      <main>
        <Header currentAttempt={5} maxAttempts={10} onRestart={handleRestart} />
        <Tip tip="A dica é: React é uma biblioteca JavaScript para construção de interfaces de usuário." />
      </main>
    </div>
  );
}   