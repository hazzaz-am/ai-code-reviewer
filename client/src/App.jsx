import { useEffect } from "react";
import "./app.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useState } from "react";
import Editor from "react-simple-code-editor";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

export default function App() {
	const [code, setCode] = useState("");
	const [review, setReview] = useState("");

	useEffect(() => {
		prism.highlightAll();
	}, []);

	async function handleReview() {
		const response = await axios.post(
			`${import.meta.env.VITE_API_KEY}/ai/get-review`,
			{
				code,
			}
		);
		setReview(response.data);
	}

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
				<div className="review" onClick={handleReview}>
					Review
				</div>
			</div>
			<div className="right">
				<Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
			</div>
		</main>
	);
}
