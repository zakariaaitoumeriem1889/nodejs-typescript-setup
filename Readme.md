# Node.js TypeScript Setup

Un template moderne pour démarrer rapidement un projet Node.js avec TypeScript, incluant une configuration complète d'outils de développement et de qualité de code.

## 🚀 Fonctionnalités

- **TypeScript** avec configuration stricte
- **Express.js** pour le serveur web
- **ESLint** et **Prettier** pour la qualité de code
- **Nodemon** pour le rechargement automatique en développement
- **Support des alias de chemins** avec `@/*` pointant vers `src/*`
- **Variables d'environnement** avec dotenv
- **Scripts de build et déploiement** optimisés

## 📋 Prérequis

- Node.js v22.18.0 (spécifié dans `.nvmrc`)
- npm ou yarn
- nvm (optionnel, pour la gestion des versions Node.js)

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd nodejs-typescript-setup
```

### 2. Installer la version Node.js recommandée (avec nvm)

```bash
# Option 1: Utiliser le script bash fourni
source nvm.bash

# Option 2: Manuellement
nvm install v22.18.0
nvm use v22.18.0
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configuration de l'environnement

Créez un fichier `.env` à la racine du projet :

```env
PORT=3000
NODE_ENV=development
```

## 🚀 Scripts disponibles

### Développement

```bash
# Démarrer le serveur en mode développement avec rechargement automatique
npm run dev

# Servir directement sans nodemon
npm run serve
```

### Production

```bash
# Construire le projet
npm run build

# Démarrer le serveur en production
npm start
```

### Utilitaires

```bash
# Nettoyer le dossier de build
npm run clean

# Exécuter les tests (à configurer)
npm test
```

## 📁 Structure du projet

```
nodejs-typescript-setup/
├── src/                    # Code source TypeScript
│   └── index.ts           # Point d'entrée principal
├── dist/                  # Code compilé (généré)
├── node_modules/          # Dépendances
├── .env                   # Variables d'environnement (à créer)
├── .gitignore            # Fichiers ignorés par Git
├── .nvmrc                # Version Node.js recommandée
├── .prettierrc           # Configuration Prettier
├── .prettierignore       # Fichiers ignorés par Prettier
├── eslint.config.mjs     # Configuration ESLint
├── nodemon.json          # Configuration Nodemon
├── tsconfig.json         # Configuration TypeScript
├── package.json          # Métadonnées et dépendances
├── nvm.bash             # Script d'installation Node.js
└── LICENSE              # Licence MIT
```

## ⚙️ Configuration

### TypeScript

Le projet utilise une configuration TypeScript stricte avec :

- **Module système** : `nodenext` pour la compatibilité moderne
- **Alias de chemins** : `@/*` → `src/*`
- **Options strictes** activées pour une meilleure sécurité de type
- **Support ES Next** avec les dernières fonctionnalités JavaScript

### ESLint & Prettier

- Configuration ESLint stricte avec TypeScript
- Intégration Prettier pour le formatage automatique
- Règles personnalisées pour un code cohérent
- Support des imports et de la syntaxe moderne

### Nodemon

Configuration pour le développement :

- Surveillance des fichiers `.ts`
- Redémarrage automatique lors des changements
- Ignorer le dossier `dist`
- Surveiller `src/`, `package.json`, `tsconfig.json`, et `.env`

## 🔧 Personnalisation

### Ajouter de nouvelles dépendances

```bash
# Dépendance de production
npm install <package-name>

# Dépendance de développement
npm install -D <package-name>
```

### Modifier les alias de chemins

Dans `tsconfig.json` :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"]
    }
  }
}
```

### Variables d'environnement

Ajoutez vos variables dans `.env` :

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your-database-url
API_KEY=your-api-key
```

## 📦 Dépendances principales

### Production

- **express** : Framework web rapide et minimaliste
- **dotenv** : Chargement des variables d'environnement
- **find-package-json** : Utilitaire pour trouver package.json
- **local-ip-url** : Obtenir l'adresse IP locale

### Développement

- **typescript** : Superset typé de JavaScript
- **tsx** : Exécuteur TypeScript rapide
- **nodemon** : Rechargement automatique du serveur
- **eslint** : Linter pour la qualité de code
- **prettier** : Formatage automatique du code
- **rimraf** : Suppression cross-platform de dossiers

## 🧪 Tests

Le système de tests n'est pas encore configuré. Pour ajouter des tests :

1. Installer Jest ou Vitest
2. Configurer les scripts de test
3. Créer un dossier `tests/` ou `__tests__/`

Exemple avec Jest :

```bash
npm install -D jest @types/jest ts-jest
```

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

### Variables d'environnement de production

Assurez-vous de définir :

```env
NODE_ENV=production
PORT=8080
```

### Démarrage en production

```bash
npm start
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📞 Support

Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à ouvrir une issue sur GitHub.

---

*Développé avec ❤️ par Zakaria AIT OUMERIEM*