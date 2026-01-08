# Portfolio Project Structure

## Tree Structure

```
Portfolio/
├── .gitignore
├── index.html
├── script.js
├── styles.css
├── certificados.html
├── cv.html
├── cv.css
├── Files/
│   └── Cristian_Israel_Vazquez_Diaz _CV.pdf
├── images/
│   ├── 1RPS.PNG
│   ├── BlueWall.jpg
│   ├── cascading-waterfall.jpg
│   ├── Certificado Desarrollo Web.PNG
│   ├── Certificado Inicial.PNG
│   ├── Certificado Web Desing.PNG
│   ├── Dragon1.PNG
│   ├── forest-path.jpg
│   ├── Fotocv.png
│   ├── imageplay.png
│   ├── logo-rombo-amarillo.png
│   ├── mountain-landscape.jpg
│   ├── Musicimg.PNG
│   ├── ocean-sunset-golden-hour.jpg
│   ├── Playimage.jpg
│   ├── Register.PNG
│   ├── Register2.PNG
│   ├── rolling-sand-dunes.jpg
│   ├── serene-water-mirroring.jpg
│   ├── starry-night.jpg
│   └── Tictac.PNG
├── Project1/
│   └── RockPaperScissors/
│       ├── index.html
│       ├── script.js
│       └── styles.css
├── Project2/
│   └── Webtictactoe/
│       ├── index.html
│       ├── main.js
│       ├── package.json
│       ├── tsconfig.json
│       ├── yarn.lock
│       ├── css/
│       │   └── index.css
│       └── js/
│           ├── store.js
│           └── view.js
├── Project3/
│   ├── welcome.html
│   └── Make-web/
│       ├── app.js
│       ├── BlueWall.jpg
│       ├── index.html
│       ├── login.html
│       └── style.css
├── Project4/
│   └── RPG-Dragon/
│       ├── index.html
│       ├── script.js
│       └── styles.css
└── Project5/
    └── MusicApp/
        ├── index.html
        ├── script.js
        └── styles.css
```

---

## Visual Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        PORTFOLIO ROOT                           │
├─────────────────────────────────────────────────────────────────┤
│  📄 .gitignore                                                   │
│  📄 index.html          📄 script.js        📄 styles.css       │
│  📄 certificados.html   📄 cv.html          📄 cv.css           │
├─────────────────────────────────────────────────────────────────┤
│  📁 Files/                                                       │
│  └── 📄 Cristian_Israel_Vazquez_Diaz _CV.pdf                     │
├─────────────────────────────────────────────────────────────────┤
│  📁 images/ (21 image files)                                     │
│  ├── 🖼️ 1RPS.PNG        🖼️ BlueWall.jpg     🖼️ cascadin...     │
│  ├── 🖼️ Certif...Web    🖼️ Certif...Inicial 🖼️ Certif...Desing  │
│  ├── 🖼️ Dragon1.PNG     🖼️ forest-path.jpg  🖼️ Fotocv.png       │
│  ├── 🖼️ imageplay.png   🖼️ logo-rombo...    🖼️ mountain-...     │
│  ├── 🖼️ Musicimg.PNG    🖼️ ocean-sunset     🖼️ Playimage.jpg    │
│  ├── 🖼️ Register.PNG    🖼️ Register2.PNG    🖼️ rolling-sand     │
│  ├── 🖼️ serene-wat...   🖼️ starry-night     🖼️ Tictac.PNG       │
│  └── 🖼️ ... (other images)                                       │
├─────────────────────────────────────────────────────────────────┤
│  📁 Project1/                                                    │
│  └── 📁 RockPaperScissors/                                       │
│      ├── 📄 index.html                                           │
│      ├── 📄 script.js                                            │
│      └── 📄 styles.css                                           │
├─────────────────────────────────────────────────────────────────┤
│  📁 Project2/                                                    │
│  └── 📁 Webtictactoe/                                            │
│      ├── 📄 index.html                                           │
│      ├── 📄 main.js                                              │
│      ├── 📄 package.json                                         │
│      ├── 📄 tsconfig.json                                        │
│      ├── 📄 yarn.lock                                            │
│      ├── 📁 css/                                                 │
│      │   └── 📄 index.css                                        │
│      └── 📁 js/                                                  │
│          ├── 📄 store.js                                         │
│          └── 📄 view.js                                          │
├─────────────────────────────────────────────────────────────────┤
│  📁 Project3/                                                    │
│  ├── 📄 welcome.html                                             │
│  └── 📁 Make-web/                                                │
│      ├── 📄 app.js                                               │
│      ├── 🖼️ BlueWall.jpg                                         │
│      ├── 📄 index.html                                           │
│      ├── 📄 login.html                                           │
│      └── 📄 style.css                                            │
├─────────────────────────────────────────────────────────────────┤
│  📁 Project4/                                                    │
│  └── 📁 RPG-Dragon/                                              │
│      ├── 📄 index.html                                           │
│      ├── 📄 script.js                                            │
│      └── 📄 styles.css                                           │
├─────────────────────────────────────────────────────────────────┤
│  📁 Project5/                                                    │
│  └── 📁 MusicApp/                                                │
│      ├── 📄 index.html                                           │
│      ├── 📄 script.js                                            │
│      └── 📄 styles.css                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Project Summary

| Category | Count | Description |
|----------|-------|-------------|
| **Root Files** | 7 | Main HTML, CSS, JS files (index, script, styles, certificados, cv, cv.css) |
| **PDF Files** | 1 | CV PDF |
| **Image Files** | 21 | PNG and JPG images |
| **Sub-projects** | 5 | Game and application projects |
| **Total Files** | ~37+ | Complete project structure |

---

## Sub-projects Overview

1. **Project1/RockPaperScissors** - Rock Paper Scissors game
2. **Project2/Webtictactoe** - Tic Tac Toe web game (TypeScript)
3. **Project3/Make-web** - Web application with login
4. **Project4/RPG-Dragon** - Dragon RPG game
5. **Project5/MusicApp** - Music player application

---

*Generated on: Portfolio Documentation*

