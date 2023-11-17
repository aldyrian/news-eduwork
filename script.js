$(".search-button").on("click", function () {
    $.ajax({
        url: "https://newsapi.org/v2/everything?apiKey=25555a47c84e4b52bd984937a28f53e5&q=" + $(".input-keyword").val(),
        success: (results) => {
            const berita = results.articles.slice(0, 100); // Memotong array hingga 100 berita
            let cards = "";
            berita.forEach((m) => {
                cards += `<div class="col-md-4 my-4">
                    <div class="card">
                        <img src="${m.urlToImage}" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">${m.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${m.author}</h6>
                            <p class="card-text">
                                ${m.description}
                            </p>
                        </div>
                    </div>
                </div>`;
            });
            $(".news-container").html(cards);
        },
        error: (e) => {
            console.log(e.responseText);
        },
    });
});
