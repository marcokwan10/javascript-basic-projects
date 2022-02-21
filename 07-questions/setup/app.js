//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
// 	btn.addEventListener("click", function (e) {
// 		const q = e.currentTarget.parentElement.parentElement;
// 		q.classList.toggle("show-text");
// 	});
// });

const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
	const btn = q.querySelector(".question-btn");
	btn.addEventListener("click", function () {
		questions.forEach((i) => {
			if (i !== q) {
				i.classList.remove("show-text");
			}
		});

		q.classList.toggle("show-text");
	});
});
