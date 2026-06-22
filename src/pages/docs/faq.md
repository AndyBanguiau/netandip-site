---
layout: ../../layouts/DocsLayout.astro
title: FAQ
description: Foire aux questions — NetAndIP. Réponses aux questions les plus fréquentes.
---

# FAQ — Foire aux questions

## Général

### NetAndIP est-il vraiment gratuit ?

Oui. La version gratuite est entièrement fonctionnelle avec jusqu'à 3 profils réseau sauvegardés. Aucune inscription, aucune carte bancaire, aucune limite de durée.

### Mes données sont-elles envoyées quelque part ?

Non. Toutes vos configurations restent sur votre machine dans les fichiers `config.json`, `profiles.json` et `settings.json`. NetAndIP ne contacte internet que pour vérifier les mises à jour (une fois par jour, désactivable dans les paramètres). Aucune donnée personnelle n'est collectée.

### NetAndIP fonctionne-t-il hors ligne ?

Oui, entièrement. La vérification des mises à jour est la seule fonctionnalité qui nécessite une connexion internet, et elle peut être désactivée.

---

## Installation

### Windows SmartScreen bloque le téléchargement, est-ce normal ?

Oui, c'est normal pour un logiciel indépendant distribué sans certificat de signature de code coûteux (plusieurs centaines d'euros par an). Pour installer NetAndIP :

1. Cliquez sur **Informations complémentaires**
2. Cliquez sur **Exécuter quand même**

Le code source de NetAndIP est disponible sur GitHub pour votre tranquillité d'esprit.

### Mon antivirus signale NetAndIP, est-ce un problème ?

Certains antivirus peuvent signaler des faux positifs pour des logiciels indépendants non signés. NetAndIP ne contient aucun code malveillant. Si vous avez un doute, vous pouvez analyser le fichier sur [VirusTotal](https://www.virustotal.com) ou consulter le code source sur GitHub.

---

## Utilisation

### Faut-il les droits administrateur ?

Oui, uniquement pour **appliquer** une configuration réseau. La commande `netsh` de Windows, utilisée par NetAndIP, requiert des droits élevés pour modifier la configuration réseau. La consultation et la création de profils fonctionnent sans droits élevés. Windows vous demandera une élévation au moment de l'application.

### Quelle interface réseau est modifiée ?

NetAndIP liste toutes les interfaces réseau disponibles sur votre machine. Vous pouvez choisir l'interface à configurer (Ethernet, Wi-Fi, etc.) dans les paramètres. L'interface active est sélectionnée automatiquement par défaut.

### Puis-je configurer le Wi-Fi avec NetAndIP ?

Oui. NetAndIP prend en charge les interfaces Wi-Fi. Sélectionnez votre adaptateur Wi-Fi dans la liste des interfaces. Notez que certaines configurations Wi-Fi d'entreprise (WPA Enterprise) peuvent nécessiter des paramètres supplémentaires non gérés par NetAndIP.

---

## Mises à jour

### Comment mettre à jour NetAndIP ?

NetAndIP vérifie automatiquement les mises à jour une fois par jour au démarrage. Vous verrez une notification dans l'application si une mise à jour est disponible. Vous pouvez aussi vérifier manuellement via **À propos → Vérifier les mises à jour**.

Vos profils et configurations sont conservés lors de la mise à jour.

### Comment désactiver la vérification automatique des mises à jour ?

Allez dans **Paramètres → Général → Désactiver la vérification automatique des mises à jour**.

---

## Partage et équipes

### Puis-je partager mes configurations avec mon équipe ?

Oui. Exportez votre `config.json` (sites et rôles) et `profiles.json` (profils réseau sauvegardés), puis importez-les sur les machines de vos collègues via **Fichier → Importer**.

La version Pro permet également de partager directement depuis l'interface.

### Combien de machines puis-je utiliser avec une licence Pro ?

La licence Pro est nominative, pour un utilisateur sur une machine. Pour plusieurs machines ou utilisateurs, contactez le support pour un tarif équipe.

---

## Dépannage

### La configuration ne s'applique pas

1. Vérifiez que vous avez lancé NetAndIP en tant qu'administrateur
2. Vérifiez que l'interface réseau sélectionnée est bien celle que vous souhaitez configurer
3. Vérifiez que l'adresse IP, le masque et la passerelle sont corrects

### Je ne retrouve plus mes profils

Les profils sont stockés dans `profiles.json` dans le dossier de l'application. Vérifiez que ce fichier n'a pas été déplacé ou supprimé. Pour la version installateur, le dossier est généralement `C:\Users\<Utilisateur>\AppData\Local\NetAndIP\`.

### Comment contacter le support ?

Envoyez un email à [banguiauandy@gmail.com](mailto:banguiauandy@gmail.com) en décrivant votre problème. Pour les utilisateurs Pro, le support est prioritaire.
