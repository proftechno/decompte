# Programmer l'affichage d'un décompte 


## Créer un décompte au démarrage

1.Afficher au démarrage le décompte suivant sur la matrice de LEDs :

3 pendant 1s,
2 pendant 1s,
1 pendant 1s,
0,
puis "P" pour prêt

Pour cela utiliser les blocs "montre nombre" et "pause" à glisser dans le
bloc "Au démarrage".


```blocks
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showNumber(0)
basic.showString("P")
```


## Créer une fonction décompte

Créer une fonction effectuant le décompte (3,2,1,0) sans mettre de pause
entre chaque chiffre.

1.Aller dans le menu "Avancé". Cliquer sur créer une fonction,
puis sur "faire quelque chose", remplacer le par "Décompte"

2.Reprendre tous les blocs précédents et les glisser dans
la fonction Décompte. Supprimer les blocs "pause".

Passer à la page suivante.

```blocks
function Décompte () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    basic.showString("P")
}
```



## Lancer le décompte par un appui simultané sur A et B

1.Dans le bloc "toujours", glisser un bloc "Si..vrai" (menu logique).

2.Dans le menu logique, prendre un bloc "--et--" à glisser à 
la place de vrai.

3.Dans le menu "Entrée" prendre "bouton A est pressé" et un deuxième bloc
ou vous remplacer A par B. Et les glisser de part et d'autre dans le 
bloc "--et--".


4.Dans le menu fonction, prendre un bloc "appel décompte",
que vous glissez dans la boucle si.

Il faut télécharger le programme et l'essayer sur la carte,
car en simulation il est difficile d'appuyer sur les boutons
A et B en même temps !


```blocks
basic.forever(function () {
    if (true && true) {
        Décompte()
    }
})
```
## Rajouter un buzzer (shield grove)

Rajouter un buzzer branché sur le shield grove, pour
obtenir un bip après chaque chiffre en décompte sauf après
le zéro ou le son sera plus long.

1.Dans le menu "Broches" prendre un bloc "définir la broche audio P0".
Le glisser au début du bloc "toujours".

2.Dans le menu "musique", prendre un bloc "jouer ton middle C pendant"
et changer le en mettant middle D et 1/2 temps.

3.Insérer ce bloc après chaque chiffre de la fonction décompte en le
dupliquant, sauf après le 0 ou vous changerez le 1/2 temps par 4 temps.


Télécharger le programme dans la carte. Brancher un buzzer 
sur la broche P0 du shield.
Effectuer les essais.

```blocks
function Décompte () {
    basic.showNumber(3)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(2)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(1)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(0)
    music.playTone(294, music.beat(BeatFraction.Breve))
    basic.showString("P")
}
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        Décompte()
    }
})
```

## Rajouter un signal lumineux en branchant une LED (shield grove).

1.Dans le menu "Broches" trouver le bloc "écrire sur la broche P0 la valeur".
Changer le P0 par P1.

Pour allumer la diode, il faut changer le 0 par un 1
dans le bloc "écrire........."

2.Placer ce bloc de façon à ce que la LED s'allume pendant 5s après
le bip 4 temps du 0, puis s'éteigne.

```blocks
function Décompte () {
    basic.showNumber(3)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(2)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(1)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(0)
    music.playTone(294, music.beat(BeatFraction.Breve))
    pins.digitalWritePin(DigitalPin.P1, )
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, )
}
```

