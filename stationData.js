const stationData = [
  {
    name: "Marktplatz",
    distance: "10m",
    coordinate: { latitude: 52.15279, longitude: 9.95176 },
    path: require("./assets/img/Marktplatz.jpeg"),
    desc: "Prägend für das Stadtbild Hildesheims ist der Historische Marktplatz. Hier reiht sich ein Fachwerkhaus an das nächste. Sie sind von außen schön anzusehen, und im Inneren erzählen einige der Häuser die Geschichte der Stadt. Fast alle Gebäude am Marktplatz wurden im Zweiten Weltkrieg zerstört. Viele wurden jedoch in Anlehnung an die Originalbauten wieder aufgebaut und geben Zeugnis für die Baustile der vergangenen Jahrhunderte.",
    id: 0,
  },
  {
    name: "Zuckerhut",
    distance: "100m",
    coordinate: { latitude: 52.152227, longitude: 9.949896 },
    path: require("./assets/img/zuckerhut.jpeg"),
    desc: "Der Umgestülpte Zuckerhut war ein um 1510 erbautes Fachwerkhaus, das sich durch kühne Auskragungen an drei Fassadenfronten auszeichnete. Das Haus wurde im Zweiten Weltkrieg beim Luftangriff auf Hildesheim am 22. März 1945 zerstört und seit 2009 rekonstruiert.",
    id: 1,
  },
  {
    name: "Huckup",
    distance: "40m",
    coordinate: { latitude: 52.151, longitude: 9.95091 },
    path: require("./assets/img/huckup.jpeg"),
    desc: "Der Huckup ist ein vom Dresdner Bildhauer Carl Röder 1905 geschaffenes Denkmal an der Ecke Schuhstraße und Hoher Weg, also am südlichen Ende der Fußgängerzone in Hildesheim. Es verbildlicht die alten Hildesheimer Sagen vom Huckup.",
    id: 2,
  },
  {
    name: "Hindenburgplatz",
    distance: "40m",
    coordinate: { latitude: 52.149792, longitude: 9.954432 },
    path: require("./assets/img/hindenburgplatz.jpeg"),
    desc: "Der Hindenburgplatz (kurz: PvH) ist ein zentraler Platz in Hildesheim. Er ist nach Paul von Hindenburg benannt, von 1925 bis zu seinem Tod Anfang August 1934 Reichspräsident im Deutschen Reich der Weimarer Republik sowie in der Anfangszeit des nationalsozialistischen Deutschen Reiches.",
    id: 3,
  },
  {
    name: "Neustädter Markt",
    distance: "40m",
    coordinate: { latitude: 52.14809, longitude: 9.954694 },
    path: require("./assets/img/NeustädterMarkt.jpeg"),
    desc: "Der Neustädter Markt ist der Marktplatz der Hildesheimer Neustadt. Der Wochenmarkt in Hildesheim findet jeden Mittwoch und Samstag von 6 bis 13 Uhr auf dem Neustädter Markt statt. Man findet dort frische und regionale Produkte, Leckereien und Angebote aus ökologischem Anbau.",
    id: 4,
  },
  {
    name: "Kehrwiederwall",
    distance: "40m",
    coordinate: { latitude: 52.145756, longitude: 9.955883 },
    path: require("./assets/img/kehrwiederwall.jpeg"),
    desc: "Der auf dem Foto zu sehende Kehrwiederwall befindet sich nahe des Neuen Tors in Hildesheim. Dieser ist Teil mehrerer Wallanlagen, die im 15. Jahrhundert zum Schutz der Stadt errichtet wurden. Neben dem Kehrwiederwall zählen zu diesen der Langelinienwall und der Hohe Wall. Sie umrahmen den Stadtkern zu etwa Zweidritteln und sind Bestandteil der öffentlichen Grünflächen. Geschützt als Baudenkmäler dienen sie heute vor allem als Erholungsgebiet.",
    id: 5,
  },
  {
    name: "Lappenberg",
    distance: "40m",
    coordinate: { latitude: 52.145921, longitude: 9.951783 },
    path: require("./assets/img/lappenberg.jpeg"),
    desc: "Der Lappenberg, ein kleiner am Gelben Stern angrenzender kleiner Platz, gehört zu den romantischsten Altstadtarealen von Hildesheim. Bis 1938 stand hier auch eine Synagoge. Der Platz endet im Süden am sogenannten Neuen Tor, einem Festungstor der barocken Stadtumwallung. Östlich des Platzes steht der um 1300 erbaute Kehrwiederturm.",
    id: 6,
  },
  {
    name: "Brühl",
    distance: "40m",
    coordinate: { latitude: 52.14802, longitude: 9.950452 },
    path: require("./assets/img/brühl.jpeg"),
    desc: "Der Brühl ist eine historische Straße im südlichen Teil der Innenstadt von Hildesheim, in der sich neben gut erhaltenen Fachwerkhäusern noch mehrere weitere bedeutende Sehenswürdigkeiten befinden. 373 m lang, verläuft der Brühl von der Kreuzstraße im Norden bis zum Godehardsplatz im Süden.",
    id: 7,
  },
  {
    name: "Heilig-Kreuz-Kirche",
    distance: "40m",
    coordinate: { latitude: 52.149536, longitude: 9.951157 },
    path: require("./assets/img/kirche.jpeg"),
    desc: "Die katholische Kirche Zum Heiligen Kreuz gehört zu den historischen Kirchen in der Altstadt von Hildesheim. Unter ihnen nimmt sie durch ihr Alter und ihre komplexe Baugeschichte eine Sonderstellung ein. Die Heilig-Kreuz-Kirche liegt nur wenige hundert Meter östlich des Doms in der Kreuzstraße 5, in rund 88 Meter Höhe über dem Meeresspiegel. Vom einstigen Petrustor der Domburg führt die Kreuzstraße, ein Teil der alten West-Ost-Fernhandelsstraße, direkt auf das Portal der Kirche zu.",
    id: 8,
  },
];

export default stationData;