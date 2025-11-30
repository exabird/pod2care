# Pod2care - Cabinet de Podologie

Site web moderne pour le cabinet de podologie Pod2care.

## Stack technique

- **Framework**: Next.js 15 avec App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typographie**: Fraunces (titres) + DM Sans (corps)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure

```
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Footer.tsx       # Pied de page
│   └── sections/        # Sections de la page
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       ├── TestimonialsSection.tsx
│       └── ContactSection.tsx
```

## Personnalisation

- **Couleurs**: Modifier `tailwind.config.ts` pour ajuster la palette
- **Contenu**: Les textes sont directement dans les composants
- **Contact**: Mettre à jour les coordonnées dans les fichiers concernés

