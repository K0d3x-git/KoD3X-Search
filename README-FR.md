# KoD3X-Search

Une bibliothèque JavaScript légère qui ajoute une fonctionnalité de recherche dynamique à n'importe quelle page web avec une configuration minimale.

## ✨ Fonctionnalités

- **Configuration Simple** : Ajoutez simplement des attributs HTML à vos éléments
- **Zéro Dépendance** : JavaScript vanilla pur, aucune bibliothèque externe requise
- **Filtrage en Temps Réel** : Mise à jour pendant que l'utilisateur tape
- **Animations Fluides** : Transitions CSS élégantes pour masquer/afficher les éléments
- **Responsive** : Fonctionne sur tous les appareils et tailles d'écran
- **Aucune Configuration** : Fonctionne immédiatement après installation

## 🚀 Installation

### Téléchargement Direct

Téléchargez les fichiers et incluez-les dans votre projet :

```html
<script src="path/to/KoD3X-Search.js"></script>
```

Ou utilisez la version minifiée :

```html
<script src="path/to/KoD3X-Search.min.js"></script>
```

## 🎯 Démarrage Rapide

1. Ajoutez le script à votre HTML :
```html
<script src="src/KoD3X-Search.js"></script>
```

2. Ajoutez l'attribut `kod3x-search-input` à votre champ de recherche :
```html
<input type="text" kod3x-search-input="products" placeholder="Rechercher...">
```

3. Ajoutez l'attribut `kod3x-search` aux éléments que vous voulez filtrer :
```html
<div kod3x-search="products">Produit Un</div>
<div kod3x-search="products">Produit Deux</div>
<div kod3x-search="products">Produit Trois</div>
```

4. Optionnel : Ajoutez un élément pour afficher "Aucun résultat" :
```html
<div id="no-results" style="display: none;">
  Aucun résultat trouvé
</div>
```

5. C'est tout ! La bibliothèque s'initialise automatiquement.

## 📖 Exemple

Un exemple d'implémentation est inclus dans le fichier [`demos/index.html`](demos/index.html). Cette démonstration présente :

- Implémentation basique avec un style moderne
- Catalogue de produits avec plusieurs éléments filtrables
- Recherche dans le contenu textuel complet (nom, catégorie, description, prix, tags)
- Layout responsive pour toutes les tailles d'appareils
- Message "Aucun résultat trouvé" qui apparaît quand aucune correspondance n'est trouvée
- Animations fluides pour masquer/afficher les éléments

Pour lancer l'exemple :
1. Ouvrez le fichier [`demos/index.html`](demos/index.html) dans votre navigateur
2. Essayez de taper dans la barre de recherche pour voir le filtrage en temps réel
3. Recherchez des noms de produits, catégories ou mots-clés (ex: "iPhone", "laptop", "Sony")

## 🔧 Utilisation Avancée

### Groupes de Recherche Multiples

Vous pouvez avoir plusieurs groupes de recherche indépendants sur la même page :

```html
<!-- Recherche Produits -->
<input type="text" kod3x-search-input="products" placeholder="Rechercher des produits...">
<div kod3x-search="products">Produit Un</div>
<div kod3x-search="products">Produit Deux</div>

<!-- Recherche Utilisateurs -->
<input type="text" kod3x-search-input="users" placeholder="Rechercher des utilisateurs...">
<div kod3x-search="users">Utilisateur Un</div>
<div kod3x-search="users">Utilisateur Deux</div>
```

### Style Personnalisé pour "Aucun Résultat"

```html
<div id="no-results" style="display: none;">
  <h3>Aucun élément trouvé</h3>
  <p>Essayez d'ajuster ou de modifier vos critères de recherche</p>
</div>
```

### Classes CSS pour les Animations

La bibliothèque utilise des classes CSS pour les animations :

```css
/* Élément en cours de masquage (avec transition) */
.kod3x-search-hidden {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

/* Élément complètement masqué */
.kod3x-search-completely-hidden {
  display: none !important;
}
```

## 📚 Référence API

### Attributs HTML

| Attribut | Description | Exemple |
|----------|-------------|---------|
| `kod3x-search-input="id"` | Ajouter aux éléments input pour créer un champ de recherche | `<input kod3x-search-input="products">` |
| `kod3x-search="id"` | Ajouter aux éléments qui doivent être filtrés | `<div kod3x-search="products">Élément</div>` |

### Méthodes JavaScript

| Méthode | Description |
|---------|-------------|
| `new KoD3XSearch()` | Crée une nouvelle instance et initialise la bibliothèque |
| `filterItems(searchId, query)` | Filtre les éléments pour un groupe de recherche donné |

### Éléments Spéciaux

| Élément | Description |
|---------|-------------|
| `#no-results` | Élément affiché quand aucun résultat n'est trouvé (optionnel) |

## 🌐 Support Navigateurs

KoD3X-Search fonctionne dans tous les navigateurs modernes :

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Opera (dernière version)
- Chrome pour Android (dernière version)
- Safari iOS (dernière version)

## ⚡ Performance

KoD3X-Search est conçu pour être extrêmement léger et performant :

- Aucune dépendance externe
- Utilise des sélecteurs DOM efficaces
- Animations CSS fluides avec transitions
- Recherche basée sur le contenu textuel complet
- Reflows et repaints minimaux

## 🎨 Personnalisation

### Algorithme de Correspondance Personnalisé

Si vous devez personnaliser la façon dont les correspondances sont déterminées, vous pouvez étendre la bibliothèque :

```javascript
// Sauvegarder la méthode prototype originale
const originalFilterItems = KoD3XSearch.prototype.filterItems;

// Remplacer par une logique personnalisée
KoD3XSearch.prototype.filterItems = function(searchId, query) {
  // Votre implémentation personnalisée ici
  // ou appeler l'original avec un comportement personnalisé
  originalFilterItems.call(this, searchId, query);
}
```

### Styles CSS Personnalisés

Vous pouvez personnaliser les animations et l'apparence :

```css
/* Personnaliser l'animation de masquage */
.kod3x-search-hidden {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Style pour le message "aucun résultat" */
#no-results {
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
}
```

---

**Développé avec ❤️ par KoD3X**
