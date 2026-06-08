import logo from '../../assets/logo.png';
import styles from './index.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />

        <header>

            <span>
                <strong>5</strong> de 10 tentativas
            </span>

            <button type="button">
                <span>Nova Partida</span>
            </button>

        </header>

    </div>
  );
}