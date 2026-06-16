import logo from '../../assets/logo.png';
import restart from '../../assets/restart.svg';
import styles from './index.module.css';

type HeaderProps = {
  currentAttempt: number;
  maxAttempts: number;
  onRestart: () => void;
}

export function Header({ currentAttempt, maxAttempts, onRestart }: HeaderProps) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />

        <header>

            <span>
                <strong>{currentAttempt}</strong> de {maxAttempts} tentativas
            </span>

            <button type="button" onClick={onRestart} title="Reiniciar Jogo">
                <img src={restart} alt="Reiniciar Jogo" />
            </button>

        </header>

    </div>
  );
}