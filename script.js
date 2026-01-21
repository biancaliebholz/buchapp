
let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "cover":"geheimnisse-des-ozeans.PNG",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
       "cover":"der-vergessene-pfad.PNG",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "cover":"die-farben-des-himmels.PNG",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
       "cover":"das-raetsel-der-zeit.png",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
       "cover":"der-letzte-waechter.PNG",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "cover":"im-schatten-des-mondes.PNG",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
       "cover":"jenseits-der-sterne.PNG",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
       "cover":"das-verborgene-koenigreich.PNG",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
       "cover":"liebe-in-zeiten-des-krieges.PNG",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]

  
function renderBookCards() {
  const cardsContainer = document.getElementById("book_cards");
  let booksHtml = "";

  for (let i = 0; i < books.length; i++) {
    booksHtml += renderSingleBookCard(i);
  }

  cardsContainer.innerHTML = booksHtml;
}


function renderSingleBookCard(index) {
  const book = books[index];

  const likeHeart = getLikeButtonHtml(index, book.liked); 
  const commentsHTML = getCommentsHtml(book.comments);    

  return renderBooksHtml(book, commentsHTML, likeHeart, index);
}

function getLikeButtonHtml(index, liked) {
  if (liked === true) {
    return renderHeart(index);
  }
  return renderNoHeart(index);
}

function getCommentsHtml(comments) {
  if (comments.length === 0) {
    return renderNoComments();
  }

  let commentList = "";
  for (let i = 0; i < comments.length; i++) {
    commentList += renderComments(comments[i]);
  }
  return renderUlComments(commentList);
}



function updateLikeUI(index) {
  const book = books[index];

 
  const likesTextEl = document.getElementById(`likes-count-${index}`);
  if (likesTextEl) likesTextEl.textContent = book.likes;

 
  const likeContainer = document.getElementById(`like-container-${index}`);
  if (likeContainer) likeContainer.innerHTML = getLikeButtonHtml(index, book.liked);
}

function updateCommentsUI(index) {
  const book = books[index];


  const headline = document.getElementById(`comments-headline-${index}`);
  if (headline) headline.textContent = `Kommentare (${book.comments.length})`;

  
  const listContainer = document.getElementById(`comments-container-${index}`);
  if (listContainer) listContainer.innerHTML = getCommentsHtml(book.comments);
}



function renderBooksHtml(book, commentsHTML, likeHeart, index) {
  return `
    <article class="book-card" id="book-card-${index}">
      <img
        class="book-cover"
        src="./assets/cover-pictures/${book.cover}"
        alt="Cover von ${book.name}"
        loading="lazy"
      />

      <h3 class="book-title">${book.name}</h3>

      <ul class="book-meta">
        <li class="likes-row">
          <strong>Likes:</strong>
          <span id="likes-count-${index}">${book.likes}</span>

          <span id="like-container-${index}">
            ${likeHeart}
          </span>
        </li>

        <li><strong>Autor:</strong> ${book.author}</li>
        <li><strong>Preis:</strong> ${book.price.toFixed(2)} €</li>
        <li><strong>Jahr:</strong> ${book.publishedYear}</li>
        <li><strong>Genre:</strong> ${book.genre}</li>
      </ul>

      <div class="book-comments">
        <h4 id="comments-headline-${index}">Kommentare (${book.comments.length})</h4>

        <div class="comments-scroll" id="comments-container-${index}">
          ${commentsHTML}
        </div>

        <div class="comment-form">
          <input 
            id="comment-input-${index}" 
            type="text" 
            placeholder="Dein Kommentar..."
            aria-label="Kommentar für ${book.name}"
          >
          <button type="button" onclick="addComment(${index})">
            Senden
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderNoComments() {
  return `<p class="no-comments">Noch keine Kommentare.</p>`;
}

function renderComments(comment) {
  return `
    <li>
      <strong>${comment.name}:</strong> ${comment.comment}
    </li>
  `;
}

function renderUlComments(commentList) {
  return `<ul class="comments-list">${commentList}</ul>`;
}

function renderHeart(index) {
  return `
    <button class="like-btn" type="button" onclick="toggleLike(${index})" aria-label="Like entfernen">
      <img class="like-icon" src="./assets/icons/like.PNG" alt="geliked">
    </button>
  `;
}

function renderNoHeart(index) {
  return `
    <button class="like-btn" type="button" onclick="toggleLike(${index})" aria-label="Like setzen">
      <img class="like-icon" src="./assets/icons/nolike.PNG" alt="nicht geliked">
    </button>
  `;
}



function toggleLike(index) {
  const book = books[index];

  if (book.liked === true) {
    book.liked = false;
    book.likes = book.likes - 1;
  } else {
    book.liked = true;
    book.likes = book.likes + 1;
  }

  updateLikeUI(index); 
}

function addComment(index) {
  const input = document.getElementById(`comment-input-${index}`);
  const text = input.value.trim();

  if (text === "") return;

  const newComment = {
    name: "Du",
    comment: text
  };

  books[index].comments.unshift(newComment);
  input.value = "";

  updateCommentsUI(index); 
}