const h1 = document.createElement("h1");
h1.innerText = "고기살롱";
h1.style.color = "red";
document.body.appendChild(h1);

const meats = ["삼겹살", "목살", "돼지갈비", "양념갈비", "항정살"];

meats.map((x, i) => {
  {
    const btn = document.createElement("button");
    btn.innerText = `${i + 1}번째 ` + x;

    btn.style.backgroundColor = i % 2 ? "skyblue" : "green";

    btn.addEventListener("click", () => {
      alert(`${x}`);
    });
    document.body.appendChild(btn);
  }
});
