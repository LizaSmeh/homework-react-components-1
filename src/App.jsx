import { useState } from "react";
import styles from "./app.module.css";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	let isValueVaild = value.length < 3;


	const onInputButtonClick = () => {
		let promptValue = prompt("Введите значение", "");
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError("");
		}
	};

	const onAddButtonClick = () => {
		if (!isValueVaild) {
			//list.push(value);
			setValue("");
			setError("");
			const updatedList = [...list, { id: Date.now(), value }];
			setList(updatedList);
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles["page-heading"]}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>: "
					<output className={styles["current-value"]}>{value}</output>
					"
				</p>
				{error && <div className={styles.error}>{error}</div>}
				<div className={styles["buttons-container"]}>
					<button
						className={styles.button}
						onClick={onInputButtonClick}
					>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={error}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles["list-container"]}>
					<h2 className={styles["list-heading"]}>Список:</h2>
					{list.length === 0 ? (
						<p className={styles["no-margin-text"]}>
							Нет добавленных элементов
						</p>
					) : (
						<ul className={styles.list}>
							{list.map(({ id, value }) => (
								<li key={id} className={styles["list-item"]}>
									{value}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
