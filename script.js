function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }

    // Converte a coleção de botões em um array para evitar erros ao desabilitar
    let buttons = Array.from(button.parentElement.getElementsByTagName('button'));
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}
