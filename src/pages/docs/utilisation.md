---
layout: ../../layouts/DocsLayout.astro
title: Guide d'utilisation
description: Guide d'utilisation complet de NetAndIP — mode Simple, mode Expert, profils réseau, import/export.
---

# Guide d'utilisation

Tout ce que vous devez savoir pour utiliser NetAndIP efficacement au quotidien.

## Mode Simple

Le Mode Simple est conçu pour les utilisateurs qui appliquent des configurations prédéfinies par leur administrateur.

### Comment l'utiliser

1. Sélectionnez votre **Site** dans la liste déroulante (ex: Bureau Paris, Site Client)
2. Sélectionnez votre **Rôle** (ex: Poste standard, Imprimante)
3. NetAndIP affiche automatiquement l'adresse IP correspondante
4. Cliquez sur **Appliquer** pour configurer votre interface réseau

La configuration réseau est appliquée en moins de 2 secondes, sans redémarrage nécessaire.

## Mode Expert

Le Mode Expert donne accès à tous les paramètres réseau pour une configuration manuelle complète.

### Paramètres disponibles

- **Adresse IP** : adresse IPv4 statique
- **Masque de sous-réseau** : ex: 255.255.255.0 (/24)
- **Passerelle par défaut** : adresse de la passerelle
- **DNS Primaire** : serveur DNS principal
- **DNS Secondaire** : serveur DNS de secours
- **Interface réseau** : sélection de la carte réseau (filaire ou Wi-Fi)
- **DHCP** : basculement rapide vers une configuration automatique

### Enregistrer un profil

Après avoir saisi vos paramètres, cliquez sur **Enregistrer le profil** pour sauvegarder la configuration sous un nom personnalisé. Le profil sera disponible en un clic la prochaine fois.

## Gestion des profils

Les profils sont des configurations réseau sauvegardées que vous pouvez appliquer rapidement.

### Créer un profil

1. Configurez les paramètres réseau en Mode Expert
2. Cliquez sur **Enregistrer le profil**
3. Donnez un nom descriptif à votre profil
4. Le profil apparaît dans la liste

### Version Gratuite vs Pro

| Fonctionnalité | Gratuit | Pro |
|---|---|---|
| Nombre de profils | 3 | Illimité |
| Mode Simple | ✓ | ✓ |
| Mode Expert | ✓ | ✓ |
| Import/Export | ✓ | ✓ |
| Support prioritaire | — | ✓ |

## Configuration des sites et rôles

Les sites et rôles permettent au Mode Simple de fonctionner. Ils se configurent dans le fichier `config.json`.

### Structure du fichier config.json

```json
{
  "sites": [
    {
      "name": "Bureau Paris",
      "roles": [
        {
          "name": "Poste standard",
          "ip": "192.168.1.50",
          "mask": "255.255.255.0",
          "gateway": "192.168.1.1",
          "dns1": "8.8.8.8",
          "dns2": "8.8.4.4"
        }
      ]
    }
  ]
}
```

## Import / Export

### Exporter vos configurations

1. Allez dans le menu **Fichier → Exporter**
2. Choisissez ce que vous souhaitez exporter :
   - `config.json` — sites et rôles
   - `profiles.json` — profils réseau sauvegardés
3. Choisissez l'emplacement de sauvegarde

### Importer des configurations

1. Allez dans le menu **Fichier → Importer**
2. Sélectionnez le fichier JSON à importer
3. Les configurations sont fusionnées avec les configurations existantes

<div class="note warn">
  <p>L'import remplace les configurations existantes portant le même nom. Pensez à exporter vos configurations actuelles avant d'importer.</p>
</div>

## Raccourcis clavier

| Raccourci | Action |
|---|---|
| `Ctrl+S` | Enregistrer le profil actuel |
| `Ctrl+E` | Passer en Mode Expert |
| `Ctrl+Shift+A` | Appliquer la configuration |
| `F5` | Actualiser la liste des interfaces |
