class Lang {
  tank: String;
  beans: String;
  grounds: String;
  ready: String;
  settings: String;
  descale: String;

  public constructor(tank: String, beans: String, grounds: String, ready: String, settings: String, descale: String) {
    this.tank = tank;
    this.beans = beans;
    this.grounds = grounds;
    this.ready = ready;
    this.settings = settings;
    this.descale = descale;
  }
}

var en = new Lang(
  'Fill tank',
  'Fill beans',
  'Empty grounds',
  'Ready',
  "Settings:\n - 1: water hardness\n - 2: grinder",
  "Descaling is needed"
);

var fr = new Lang(
  'Remplir reservoir',
  'Ajouter grains',
  'Vider marc',
  'Pret',
  "Settings:\n - 1: durete de l'eau\n - 2: mouture",
  "Detartrage requis"
);

export { Lang, en, fr };