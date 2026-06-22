---
layout: ../../layouts/DocsLayout.astro
title: Installation
description: Guide d'installation de NetAndIP sur Windows 10 et Windows 11.
---

# Installation

Guide complet pour installer NetAndIP sur votre machine Windows.

## Configuration requise

- **Système d'exploitation** : Windows 10 (64-bit) ou Windows 11
- **Architecture** : x64 uniquement
- **Droits** : Droits administrateur pour appliquer les configurations réseau
- **Espace disque** : ~50 Mo
- **Connexion internet** : Uniquement pour les mises à jour (désactivable)

## Téléchargement

Téléchargez la dernière version depuis la [page de téléchargement](/download) ou directement depuis [GitHub Releases](https://github.com/AndyBanguiau/netandip/releases/latest).

Deux versions sont disponibles :

| Version | Fichier | Description |
|---------|---------|-------------|
| Installateur | `NetAndIP-Setup-3.0.0-x64.exe` | Recommandé — installe avec raccourci et désinstalleur |
| Portable | `NetAndIP.exe` | Sans installation — idéal pour clé USB |

## Installation (version installateur)

1. Téléchargez `NetAndIP-Setup-3.0.0-x64.exe`
2. Double-cliquez sur le fichier téléchargé
3. Si Windows SmartScreen s'affiche, cliquez sur **Informations complémentaires** puis **Exécuter quand même** (normal pour un logiciel indépendant)
4. Suivez les étapes de l'assistant d'installation
5. NetAndIP sera disponible depuis le menu Démarrer et le bureau

## Utilisation portable

1. Téléchargez `NetAndIP.exe`
2. Copiez-le dans le dossier de votre choix (ex: clé USB)
3. Double-cliquez pour lancer — aucune installation requise
4. Les fichiers de configuration seront créés dans le même dossier que l'exécutable

## Première utilisation

1. Lancez NetAndIP
2. Si demandé, accordez les droits administrateur (nécessaires pour modifier la configuration réseau)
3. Accédez à l'onglet **Expert** pour configurer vos sites et rôles
4. Ou utilisez le **Mode Simple** si une configuration a déjà été partagée par votre administrateur

<div class="note">
  <p>NetAndIP crée automatiquement les fichiers `config.json`, `profiles.json` et `settings.json` lors du premier lancement. Ces fichiers contiennent vos configurations et restent entièrement sur votre machine.</p>
</div>

## Désinstallation

- **Version installateur** : Panneau de configuration → Programmes → Désinstaller un programme → NetAndIP
- **Version portable** : Supprimez simplement le dossier contenant `NetAndIP.exe` et ses fichiers de configuration
