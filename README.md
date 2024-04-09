Questions TP

1) 
Le fichier package-lock.json généré par la commande npm install a pour but de fournir une description détaillée et déterministe de l'arbre des dépendances généré lors du processus d'installation.

2)
Cette convention d'utiliser un format à 3 chiffres pour les numéros de version dans les dépendances NPM est appelée "Versionnement Sémantique". Le Versionnement Sémantique est un schéma de numérotation qui fournit une manière standardisée d'attribuer des numéros de version aux versions des logiciels.
Un  numéro de version est composé de trois parties : MAJEURE.MINEURE.CORRECTIF. 

3)
Une devDependency, ou dépendance de développement, fait référence à une dépendance nécessaire uniquement lors du développement d'un projet logiciel, mais qui n'est pas requise pour son exécution en production.
Une devDependency est utilisée pour le développement uniquement et est habituellement incluse dans le fichier package.json sous la clé "devDependencies".
Ces dépendances ne sont pas installées automatiquement lorsqu'un utilisateur installe le package principal à partir duquel le projet dépend et sontu utiles pour fournir des outils et des bibliothèques nécessaires au processus de développement, tels que des frameworks de test, des utilitaires de build, ou des bibliothèques de mock.
Une Dependency (dépendance) est nécessaire pour l'exécution du logiciel en production te est incluse dans le fichier package.json sous la clé "dependencies".
Ces dépendances sont automatiquement installées lors de l'installation du package principal à partir duquel le projet dépend et omprennent des bibliothèques et des modules requis pour l'exécution correcte de l'application, tels que des frameworks, des utilitaires, ou des bibliothèques de support.

4)
Une fermeture (closure) en JavaScript est une fonction interne qui a accès aux variables locales d'une fonction englobante, même après que cette fonction ait été exécutée. Une fermeture est créée lorsque vous définissez une fonction à l'intérieur d'une autre fonction et que la fonction interne utilise des variables déclarées dans la fonction englobante.
Une IIFE (Immediately Invoked Function Expression) est une fermeture JavaScript qui est immédiatement invoquée après sa définition. Elle est généralement utilisée pour créer un contexte de portée locale afin d'encapsuler des variables et des fonctions, empêchant ainsi la pollution de l'espace global.

5)
import * from './utils' importe toutes les fonctionnalités exportées par le module utils dans un objet.
import { parseUrl } from './utils' importe uniquement la fonction parseUrl depuis le module utils.
Utiliser import * from './utils' peut entraîner une surcharge de l’espace de noms avec toutes les fonctionnalités exportées par le module, ce qui peut rendre le code moins lisible et entraîner des conflits de noms.
Utiliser import { parseUrl } from './utils' permet une importation plus ciblée et précise des fonctionnalités dont vous avez besoin, ce qui peut rendre le code plus clair et éviter les conflits de noms. Cependant, cela signifie que si on a besoin de plusieurs fonctionnalités du module, on doit les importer individuellement, ce qui peut être long.

6)
Héritage multiple : En Java, une classe peut hériter de plusieurs classes parentes, ce qui est connu sous le nom d'héritage multiple. Par exemple, une classe peut étendre une classe principale tout en implémentant une ou plusieurs interfaces. En revanche, en ES6, une classe peut seulement hériter d'une seule classe parente.
Visibilité des membres : En Java, vous pouvez définir la visibilité des membres de classe (attributs et méthodes) comme public, protected, private, ou package-private (lorsqu'aucun modificateur n'est spécifié). Cela vous permet de contrôler l'accès aux membres d'une classe depuis d'autres classes. En ES6, toutes les propriétés et méthodes déclarées dans une classe sont publiques par défaut, ce qui signifie qu'elles sont accessibles depuis n'importe où dans le code.

7)
Avec var, la portée de la variable est la fonction dans laquelle elle est déclarée, ou la portée globale si elle est déclarée en dehors de toute fonction. Cela signifie qu'une variable var est accessible même avant sa déclaration (hoisting).
Avec let, la portée de la variable est limitée au bloc dans lequel elle est déclarée (un bloc étant défini par une paire de {}). Cette portée est souvent appelée portée de bloc. Les variables let ne sont pas soumises au hoisting et doivent être déclarées avant leur utilisation dans le code.
Avec var, il est possible de redéclarer une variable dans la même portée sans générer d'erreur.
Avec let, il n'est pas possible de redéclarer une variable dans le même bloc. Une tentative de le faire générera une erreur de syntaxe.

8)
Lorsqu’on appelle une fonction avec .bind(this), on crée une nouvelle fonction liée où this est fixé à la valeur fournie en argument. Cela garantit que, peu importe où la fonction liée est appelée, this référencera toujours l'objet spécifié.
Si on supprime .bind(this), la fonction sera exécutée avec le contexte this actuel lors de son appel. Cela signifie que this sera déterminé par la façon dont la fonction a été appelée, ce qui peut entraîner des erreurs ou un comportement inattendu si le contexte this est différent de ce qui était prévu.
Les fonctions fléchées capturent le contexte this de leur portée immédiate à l'exécution, ce qui signifie qu'elles n'ont pas leur propre this. Au lieu de cela, elles utilisent le this de la portée englobante à l'endroit où elles sont définies. Par conséquent, lors de l'utilisation de fonctions fléchées, on n’a généralement pas besoin d'utiliser .bind(this) car elles n'ont pas de contexte this propre et utilisent plutôt le contexte this de leur portée englobante.

9)
Le symbole @ de @babel/*** fait référence à des plugins ou des presets dans l'écosystème Babel. Babel est un outil de compilation JavaScript utilisé pour transformer le code ECMAScript moderne (par exemple, ES6/ES2015 et versions ultérieures) en une version compatible avec les environnements JavaScript plus anciens. L'utilisation du préfixe "@" dans @babel/*** indique que le module spécifié est un package scoped sous l'espace de nom "babel". Cela permet d'organiser les packages de manière logique et évite les conflits de noms entre les différents projets.

10)
Les promesses permettent une gestion plus efficace des erreurs. Avec les callbacks traditionnels, la gestion des erreurs peut devenir rapidement complexe en raison de la structure en cascade des callbacks. Avec les promesses, on peut chaîner des .then() et utiliser .catch() à la fin pour gérer toutes les erreurs survenues dans la chaîne.
Les promesses facilitent la lecture et la compréhension du code asynchrone. Les .then() et .catch() permettent d'exprimer clairement le flux d'exécution du code, ce qui rend le code plus lisible et plus maintenable.
Les promesses aident à éviter le "callback hell" (enchevêtrement de callbacks) qui peut se produire lorsque de nombreuses opérations asynchrones sont imbriquées les unes dans les autres. La syntaxe des promesses permet d'écrire un code plus plat et plus linéaire, ce qui le rend plus facile à comprendre et à déboguer.
Les promesses sont compatibles avec l'utilisation d'async et await, introduits dans ECMAScript 2017 (ES8). Cela permet d'écrire du code asynchrone de manière synchrone, ce qui le rend plus facile à comprendre pour les développeurs habitués à la programmation synchrone.

11)
L'ajout de async et await à ECMAScript a été introduit dans la version ECMAScript 2017 (ES8).

12)
Les composants sont des unités autonomes de fonctionnalité, ce qui rend le code plus modulaire et plus facile à organiser. Chaque composant est responsable d'une tâche spécifique, ce qui simplifie la gestion du code.
Les composants peuvent être réutilisés dans différentes parties de l'application ou même dans des projets différents, ce qui réduit la duplication du code et facilite les mises à jour globales.
Les composants sont généralement indépendants les uns des autres, ce qui signifie qu'ils peuvent être développés, testés et déployés séparément, facilitant ainsi la maintenance et l'évolutivité de l'application.

13)
Les fonctions pures produisent la même sortie pour une entrée donnée et n'ont pas d'effets secondaires, ce qui signifie qu'elles n'accèdent pas à des variables en dehors de leur portée locale et ne modifient pas les données globales. Cela rend les fonctions pures prévisibles et faciles à tester.
Les données immuables ne changent pas après leur création. Plutôt que de modifier les données existantes, la programmation fonctionnelle encourage la création de nouvelles données à partir des données existantes.
Les fonctions d'ordre supérieur sont des fonctions qui prennent d'autres fonctions en tant qu'arguments ou renvoient des fonctions en tant que résultats. Cela permet de créer des abstractions puissantes et de composer des fonctions de manière flexible.

14)

La fonction map() est une méthode disponible pour les tableaux en JavaScript. Elle est utilisée pour créer un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.

15)

La fonction filter() est une méthode disponible pour les tableaux en JavaScript. Elle est utilisée pour créer un nouveau tableau contenant uniquement les éléments du tableau d'origine qui satisfont à une condition spécifiée par une fonction de rappel.

16)
La fonction reduce() est une méthode disponible pour les tableaux en JavaScript. Elle est utilisée pour réduire un tableau à une seule valeur en appliquant une fonction de rappel à chaque élément du tableau.

17)
Avec les promesses et .then(), on écrit le code de manière plus impérative. On appelle une fonction asynchrone et attachez un gestionnaire de succès avec .then() pour traiter le résultat une fois qu'il est disponible.
Le code utilisant .then() peut rapidement devenir complexe lorsque plusieurs appels asynchrones sont enchaînés, car cela conduit à ce que l'on appelle le "callback hell" ou l'"enfer des rappels".
Avec async/await, on écrit du code de manière plus synchrone, ce qui le rend plus lisible et plus facile à comprendre. On marque les fonctions asynchrones avec le mot-clé async et on utilise await pour attendre que la promesse soit résolue.
L'utilisation de async/await permet d'éviter le "callback hell" en utilisant une syntaxe qui ressemble davantage à du code synchrone, même si le code est asynchrone en réalité.

18)

En Sass (Syntactically Awesome Style Sheets), la convention du préfixe _ est utilisée pour indiquer des fichiers Sass partiels. Un fichier Sass partiel est un fichier qui contient des morceaux de code CSS ou Sass destinés à être importés dans d'autres fichiers Sass, plutôt que compilés en un fichier CSS autonome.
Le préfixe _ indique au compilateur Sass que le fichier est partiel et ne doit pas être compilé en son propre fichier de sortie CSS. Au lieu de cela, il doit être importé dans d'autres fichiers Sass à l'aide de la directive @import.
