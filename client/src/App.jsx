import { useEffect } from "react";
import "./app.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useState } from "react";
import Editor from "react-simple-code-editor";

export default function App() {
	const [code, setCode] = useState(`function sum (a, b) {\n return a + b \n}`);

	useEffect(() => {
		prism.highlightAll();
	}, []);

	return (
		<main>
			<div className="left">
				<div className="code">
					<Editor
						value={code}
						onValueChange={(code) => setCode(code)}
						highlight={(code) =>
							prism.highlight(code, prism.languages.js, "js")
						}
						padding={10}
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 16,
							borderRadius: "4px",
							height: "100%",
							width: "100%",
						}}
					/>
				</div>
				<div className="review">Preview</div>
			</div>
			<div className="right"></div>
		</main>
	);
}
