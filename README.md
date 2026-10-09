# KOL Finder

MSL research workspace by Lucid Logic. Node 22+, no package dependencies or API keys.

Run `npm start` and open http://localhost:3000. `npm test` runs evidence aggregation tests.

## Features
- Therapeutic-area selection, starter expert directory and custom author research.
- Animated geographic collaboration atlas. Connections come from sampled shared authorship.
- Live Europe PMC papers restricted to disease terms in titles and abstracts of PubMed-indexed records, plus ClinicalTrials.gov registry context.
- Literature-based author discovery, source-linked collaborator cards, meeting preparation.
- Browser-local notes, shortlist, two/three expert comparison and text brief export.
- Responsive layout and reduced-motion support.

## Evidence limits
Expert queries match surname and initials and require disambiguation. Starter directory affiliations need verification; these are not certified profiles. The app does not present a definitive KOL roster, career publication counts or an influence ranking. Discovery uses the 100 most recent query matches; profiles use 50. Registry name mentions do not establish investigator status. Recognized institution locations are approximate and inferred from publication affiliations. Unknown institutions are not mapped. Trial, paper and citation counts show their scope in the UI.

Sources are retrieved on demand, cached in memory for 15 minutes, with independent error handling. The app uses no LLM and does not generate clinical conclusions. Scientific prompts are templates drawn from paper titles. No private datasets, Open Payments, grants, CRM, auth, shared storage or contact enrichment are connected. Saved profiles and notes are browser-local. Do not store sensitive information.

Map boundaries: Natural Earth 1:110m public-domain country data via nvkelso/natural-earth-vector. Typography optionally loads Google Fonts; system font fallback is included.

Deploy: repository-linked Railway service, Dockerfile build, `/health` healthcheck, platform PORT respected. Future extensions: licensed KOL roster/imports, ORCID disambiguation, data refresh monitoring, authentication, database and team/territory workflows.
