# SEO / Search Console Checklist

Poniższa lista jest przygotowana pod to portfolio (`Vite + React`, strona główna + sekcje one-page).

## 1) Podstawy techniczne (już wdrożone w projekcie)

- [x] `meta title` i `meta description`
- [x] Open Graph + Twitter Cards
- [x] `canonical`
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] JSON-LD (`Person`, `WebSite`, `ProfessionalService`)
- [x] `lang` dla dokumentu i aktualizacja przy zmianie języka

## 2) Google Search Console — konfiguracja

1. Wejdź do Google Search Console i dodaj usługę typu **Domain** (zalecane).
2. Zweryfikuj domenę przez rekord DNS `TXT`.
3. W sekcji **Sitemaps** dodaj:
   - `https://mikolaj.dev/sitemap.xml`
4. W sekcji **URL Inspection** sprawdź stronę główną i kliknij **Request Indexing**.
5. Powtórz po każdej większej zmianie treści.

## 3) Co monitorować co tydzień

- **Indexing > Pages**: błędy indeksacji / excluded pages.
- **Core Web Vitals**: LCP, CLS, INP (mobile + desktop).
- **Performance**:
  - CTR dla zapytań brandowych i usługowych,
  - średnia pozycja,
  - zapytania z największym potencjałem wzrostu.

## 4) Cele jakościowe (minimum)

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

## 5) Dalsze kroki (next level)

- Dodać dedykowane podstrony SEO:
  - `/projekty`
  - `/o-mnie`
  - `/kontakt`
- Rozszerzyć JSON-LD o `CreativeWork` dla projektów.
- Wrzucić mniejsze wersje obrazów (`webp/avif`) i `srcset`.
- Podpiąć Lighthouse CI lub cykliczny audyt PageSpeed.

## 6) Szybki smoke-check po deployu

1. Otwórz `view-source:https://mikolaj.dev/` i sprawdź `title`, `description`, `canonical`, `og:*`.
2. Sprawdź:
   - `https://mikolaj.dev/robots.txt`
   - `https://mikolaj.dev/sitemap.xml`
3. Wklej URL do:
   - Rich Results Test,
   - URL Inspection w GSC.
