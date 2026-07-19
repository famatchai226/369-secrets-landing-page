# 369 Secrets — Landing Page

## Structure

```
369-secrets-landing-page/
├── index.html         ← Page principale
├── i18n.js            ← Script multilingue
├── .gitignore
├── how.md             ← Ce fichier
├── assets/            ← Images (ajoutez votre couverture ici)
│   └── (couverture.jpg)
└── locales/
    ├── fr.json        ← Traductions françaises
    └── en.json        ← Traductions anglaises
```

## Personnalisation

### Ajouter l'image de couverture
1. Placez votre image dans le dossier `assets/`
2. Dans `index.html`, modifiez la ligne :
   ```html
   <img src="assets/couverture.jpg" alt="...">
   ```

### Modifier le lien d'achat
- Dans `index.html`, recherchez `href="#"` et remplacez `#` par votre lien d'achat.

### Modifier les textes
- Éditez `locales/fr.json` pour le français
- Éditez `locales/en.json` pour l'anglais

## Multilingue
- Le français est la langue par défaut
- L'anglais est disponible via le bouton de bascule (EN/FR)
- La langue choisie est mémorisée dans le navigateur
