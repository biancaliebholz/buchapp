
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
       "cover":"das-rätsel-der-zeit.PNG",
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
       "cover":"der-letzte-wächter.PNG",
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
       "cover":"das-verborgene-königreich.PNG",
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
    const book = books[i];
    
    let likeHeart ="";
       if (book.liked === true){
        likeHeart = renderHeart(i);
      } else {
        likeHeart = renderNoHeart(i);
      }

    let commentsHTML = "";
    if (book.comments.length === 0) {
      commentsHTML = renderNoComments();
    } else {
      let commentList = "";


    for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
        const comment = book.comments[commentIndex];
        commentList += renderComments(comment);
      }
      commentsHTML = renderUlComments(commentList);
    }

    booksHtml += renderBooksHtml(book, commentsHTML, likeHeart, i);
  }

  cardsContainer.innerHTML = booksHtml;
}




function renderNoComments(){
return`<p class="no-comments">Noch keine Kommentare.</p>`
}

function renderComments(comment){
return` <li>
           <strong> ${comment.name}:</strong> ${comment.comment}
          </li>
        `}

function renderUlComments(commentList){
return`<ul class="comments-list">${commentList}</ul>`;
        }

        function renderBooksHtml(book, commentsHTML, likeHeart, index) {
  return `
    <article class="book-card">
      <img
        class="book-cover"
        src="./assets/cover-pictures/${book.cover}"
        alt="Cover von ${book.name}"
        loading="lazy"
      />

      <h3 class="book-title">${book.name}</h3>

      <ul class="book-meta">
          <li class="likes-row">
          <strong>Likes:</strong> ${book.likes}
          ${likeHeart}
        </li>
        <li><strong>Autor:</strong> ${book.author}</li>
        <li><strong>Preis:</strong> ${book.price.toFixed(2)} €</li>
        <li><strong>Jahr:</strong> ${book.publishedYear}</li>
        <li><strong>Genre:</strong> ${book.genre}</li>
      </ul>

     <div class="book-comments">
  <h4>Kommentare (${book.comments.length})</h4>

  <div class="comments-scroll">
    ${commentsHTML}
  </div>

  <div class="comment-form">
    <input 
      id="comment-input-${index}" 
      type="text" 
      placeholder="Dein Kommentar..."
    >
    <button onclick="addComment(${index})">
      Senden
    </button>
  </div>
</div>
    </article>
  `;
}

function renderHeart(index) {
  return `
    <img 
      class="like-icon" 
      src="./assets/icons/like.PNG" 
      alt="geliked"
      onclick="toggleLike(${index})"
    >
  `;
}

function renderNoHeart(index) {
  return `
    <img 
      class="like-icon" 
      src="./assets/icons/nolike.PNG" 
      alt="nicht geliked"
      onclick="toggleLike(${index})"
    >
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

  renderBookCards();
}

function addComment(bookIndex) {
  const input = document.getElementById(`comment-input-${bookIndex}`);
  const text = input.value;

  if (text === "") {
    return;
  }

  const newComment = {
    name: "Du",
    comment: text
  };

  books[bookIndex].comments.push(newComment);
  input.value = "";

  renderBookCards();
}