## Opis działania aplikacji

Ten program jest narzędziem do konwersji treści artykułu z pliku tekstowego (`article.txt`) na format HTML, korzystając z API OpenAI. Program wykonuje następujące kroki:

- Wczytanie treści artykułu: Program otwiera plik `article.txt` i pobiera z niego treść artykułu.
- Generowanie zawartości HTML: Program korzysta z modelu językowego OpenAI, aby przekształcić treść artykułu na strukturę HTML.
- Zapis wygenerowanego HTML: Wynikowy kod HTML jest zapisywany w pliku `artykul.html`.

> Uwaga: Program nie generuje pełnego dokumentu HTML, a jedynie zawartość przeznaczoną do umieszczenia wewnątrz tagów `<body>`.

## Wymagania

- Node.js
- OpenAI API Key

## Instrukcja uruchomienia

1. Klonowanie repozytorium:

```bash
    git clone https://github.com/IgorM867/gpt-article-generator.git
    cd gpt-article-generator
```

2. Instalacja potrzebnych bibliotek:

```bash
    npm install
```

3. Zdefiniowanie klucza API: Utwórz plik `.env` i umieść w nim w swój klucz:

```
    OPENAI_API_KEY=twoj_klucz
```

4. Umieszczenie treści artykułu w pliki `article.txt`.

5. Uruchomienie aplikacji:

```bash
    node --env-file=.env main.js
```

6. Sprawdzanie wyników: Wygenerowany plik HTML (`artykul.html`) zostanie utworzony. Możesz jego zawartość wkleić to pliku `szablon.html` i sprawdzić resultat otwierając ten plik w przeglądarce.
