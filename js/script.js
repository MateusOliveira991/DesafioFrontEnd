function trocarImagem() {
    var imagem = document.getElementById('imagem');
    var imagem2=document.getElementById('minha-imagem');
    if (imagem.src.match("../img/fase2.jpg")) {
        imagem.src = "../img/faselua.jpg"; // Troque "imagem2.jpg" pelo caminho da sua segunda imagem
        imagem.alt = "faselua.jpg";
        imagem.style.opacity=0.1;
    } else {
        imagem.src = "../img/fase2.jpg"; // Troque "imagem1.jpg" pelo caminho da sua primeira imagem
        imagem.alt = "faselua.jpg";
        imagem.style.opacity=1;
    }
}