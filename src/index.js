// import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // TODO追加した時
  const targetDiv = document.createElement("div");
  targetDiv.className = "list-row"
  const li = document.createElement("li");
  li.innerText = inputText;
  const completeButton = createButton("完了");
  const deleteButton = createButton("削除");
  targetDiv.appendChild(li);
  targetDiv.appendChild(completeButton);
  targetDiv.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(targetDiv);

  // 削除ボタンを押した時の処理
  deleteButton.addEventListener("click", () => {
    deleteFromList(deleteButton.parentNode);
  })

  // 完了ボタンを押した時の処理
  completeButton.addEventListener("click", () => {
    deleteFromList(targetDiv);
    
    targetDiv.removeChild(completeButton);
    targetDiv.removeChild(deleteButton);
    
    const undoButton = createButton("戻す");
    targetDiv.appendChild(undoButton);
    
    // 戻すボタンを押した時の処理
    undoButton.addEventListener("click", () => {
      targetDiv.parentNode.removeChild(targetDiv);
      targetDiv.removeChild(undoButton);
      targetDiv.appendChild(completeButton);
      targetDiv.appendChild(deleteButton);
      document.getElementById("incomplete-list").appendChild(targetDiv);
    })
    
    document.getElementById("complete-list").appendChild(targetDiv);

  })

};

const deleteFromList = (target) => {
  target.parentNode.removeChild(target);
}

const createButton = (text) => {
  const button = document.createElement("button");
  button.innerText = text;
  return button;
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
