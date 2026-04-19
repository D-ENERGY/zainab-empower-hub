
Got it — I have the organogram image now. Here's the plan for the Zainab Bint Muhammad University site.

## Pages & structure

Multi-page site with shared navigation:

1. **Home (/)** — Hero with university name, RC number, tagline, vision/mission summary, goals preview, initiator card, CTA to organogram.
2. **About (/about)** — Full Vision, Mission, Goals (5 bullets), Initiator bio.
3. **Organogram (/organogram)** — Full interim organisational structure rendered as an interactive flowchart matching the uploaded diagram exactly.
4. **NotFound** — already exists.

Shared `Header` (logo + nav) and `Footer` (RC: 8810796, location Abuja, copyright).

## Organogram (faithful to image)

Rendered as styled HTML/CSS boxes with SVG connector lines so it looks like the source diagram and stays responsive. Hierarchy:

```text
              VISITOR (FUNDER/INITIATOR)
                       |
              CHANCELLOR (TRUSTEE – GIRDC)
                       |
              COUNCIL (PRO-CHANCELLOR / PRESIDENT – GIRDC)
                       |
              SENATE / VICE-CHANCELLOR (Female Professor)
              /         |          \
   DVC Admin         BURSARY         DVC Academics
   (F. Prof)         (Bursar)        (F. Prof)
      |              /     \              |
   REGISTRY  -------       -------     LIBRARY (Chief Librarian)
      |                                    |
   Non-Academic Depts                  FACULTIES (Deans/Provosts/Directors)
   (Dep. Registrars/Directors)             |
              \                        ACADEMIC DEPARTMENTS
               \                           /
                ------> STUDENT BODY <-----
```

On mobile it collapses to a vertical stack with indentation; on desktop it shows the full branching layout.

## Visual style

- Inspired by the crest: deep green primary, gold accent, off-white background, dark serif headings (Playfair Display) + clean sans body (Inter).
- All colors via `index.css` HSL tokens + `tailwind.config.ts` (no hard-coded colors in components).
- Crest image saved to `src/assets/zbm-crest.jpg` and used in header/hero/organogram.

## Technical changes

- `src/index.css` — add design tokens (primary green, gold accent, muted, etc.) and Google Fonts import.
- `tailwind.config.ts` — extend colors + font families bound to tokens.
- `src/assets/zbm-crest.jpg` — copied from upload.
- `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Layout.tsx`.
- `src/components/Organogram.tsx` — pure CSS/SVG chart, reusable on Home + Organogram page.
- `src/pages/Index.tsx` — replace placeholder with full home.
- `src/pages/About.tsx`, `src/pages/Organogram.tsx` — new.
- `src/App.tsx` — register `/about` and `/organogram` routes (above catch-all).

No backend, no forms — info-only site as content provided.
