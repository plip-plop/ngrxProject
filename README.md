# NgrxProject
- Actions
- Reducers
- Store/State
- Adapter
- Effects

Installation par NPM ou par Angular CLI.
- npm install @ngrx/store --save
- ng add @ngrx/store

## Actions
Les **actions** sont des interfaces qui décrivent des **events**.


## Reducers
Les **reducers** sont des fonctions pures qui ont en charge la gestion des changements de states (i.e. changer d'un state à un autre).
Chaque reducer prend en paramètre une **action**: le reducer s'appuie sur cette action pour déterminer quand (et comment) il doit modifier le state.
Lors de l'exécution, le reducer prend la dernière action émise ainsi que l'état actuel, puis détermine s'il doit modifier le state ou renvoyer le state actuel.

```
export const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);
```

## Effects
...
- Les **effects** sont les seuls éléments à pouvoir faire des appels HTTP.

## Composants
Inject the Store service into your component to dispatch the counter actions, and use the select operator to select data from the state.
- Le StoreService doit être injecté dans le constructor.

## AppModule: Enregistrement
L'**AppModule** doit importer les éléments suivants.
- Les **reducers** du store.
  ```
  StoreModule.forRoot({ count: counterReducer }),
  ```
