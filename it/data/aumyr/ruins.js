let ruins_lg = L.layerGroup();

let ruins_markers = [
  {
    label: "Valimar",
    loc: [2343, 246.5],
    pop:
      "Valimar è l’argomento preferito dalla gente di mare. Pare che esista una gigantesca città sottomarina al largo delle coste tra Laentas e Nordavind. ",
    img: "/images/ruins/valimar.jpg",
    copy:
      "https://www.deviantart.com/lostsoul12a1/art/Underwater-City-50119438",
    copyBy: "lostsoul121",
    link: "https://www.aumyr.world/geography/#valimar"
  },
  {
    label: "Zimara",
    loc: [2993, 1990],
    pop:
      "Zimara è il sogno proibito di ogni cercatore di tesori. Primo punto di scavo nelle profondità delle montagne, questa città degli Askari è stata ricavata da una serie di miniere e gallerie scavate con tecniche sconosciute, corridoi resi perfettamente lisci e tondi tramite la tecnologia antica. ",
    img: "/images/ruins/zimara.jpg",
    copy: "https://www.deviantart.com/piotrdura/art/Crystal-cave-583595876",
    copyBy: "piotrdura",
    link: "https://www.aumyr.world/geography/#zimara"
  },
  {
    label: "Gherzul",
    loc: [1705, 4032],
    pop:
      "Conosciuta anche come “La Necropoli”, Gherzul è un grande rovina Askari sotterranea formata da centinaia di catacombe connesse sia da piccoli cunicoli che da grandi tunnel. ",
    img: "/images/ruins/gherzul.jpg",
    copy:
      "https://www.deviantart.com/asahisuperdry/art/Ruins-underground-587621742",
    copyBy: "asahisuperdry",
    link: "https://www.aumyr.world/geography/#gherzul"
  },
  {
    label: "Xartar",
    loc: [2124, 1872],
    pop:
      "Ex metropoli e probabilmente capitale degli Askari, Xartar è il più grande complesso sotterraneo conosciuto, formato da svariati dungeon collegati che si snodano nelle profondità della terra.",
    img: "/images/ruins/xartar.jpg",
    copy: "https://www.deviantart.com/chriscold/art/Dragonfel-575557275",
    copyBy: "chriscold",
    link: "https://www.aumyr.world/geography/#xartar"
  },
  {
    label: "Perdol",
    loc: [764, 4024],
    pop:
      "Si dice che ben pochi abbiano sofferto quanto gli abitanti dell’antica città di Perdol. Alcune testimonianze trovate in superficie mostrano i resti di un insediamento splendente e ricchissimo, nel quale era possibile trovare ogni sorta di benessere materiale o spirituale.",
    img: "/images/ruins/perdol.jpg",
    copy: "https://www.deviantart.com/mirojohannes/art/Old-Mine-339872828",
    copyBy: "mirojohannes",
    link: "https://www.aumyr.world/geography/#perdol"
  },
  {
    label: "Lheng",
    loc: [111, 3467],
    pop:
      "Il modo migliore per descrivere Lheng è immaginarsi una torre rovesciata, o un cratere circolare, che si apre nel terreno, largo trecento metri e profondo almeno cinque volte tanto.",
    img: "/images/ruins/lheng.jpg",
    copy: "https://www.deviantart.com/anthonyavon/art/Abyss-563560299",
    copyBy: "anthonyavon",
    link: "https://www.aumyr.world/geography/#irem"
  },
  {
    label: "Kandros",
    loc: [1822, 2363],
    pop:
      "Kandros è considerata la Fucina del Mondo. Situata all’interno del più grande complesso vulcanico di Aumyr, è un dedalo di stanze di pietra lavica e ossidiana, temprate dal fuoco e dal magma.",
    img: "/images/ruins/kandros.jpg",
    copy:
      "https://www.deviantart.com/vandervals/art/Matte-painting-lava-city-214303673",
    copyBy: "vandervals",
    link: "https://www.aumyr.world/geography/#kandros"
  },
  {
    label: "Lornat",
    loc: [2446, 3309],
    pop:
      "Una grande fontana, ora prosciugata, costituisce tutto ciò che resta dell’antica città di Lornat, al centro dei monti di Merosh. ",
    img: "/images/ruins/lornat.jpg",
    copy: "https://www.deviantart.com/azot2019/art/Sacred-Ruins-765930168",
    copyBy: "azot2019",
    link: "https://www.aumyr.world/geography/#lornat"
  },
  {
    label: "Irem",
    loc: [304, 1712],
    pop:
      "Nessuno è in grado di stabilire dove si trovi con certezza. Avventurieri narrano di spedizioni nel deserto alla ricerca di questa favolosa “Città dalle Mille Colonne”, e l’unica testimonianza di un luogo simile è giunta tramite degli scritti di un avventuriero reso pazzo dai pericoli mortali del deserto. ",
    img: "/images/ruins/irem.jpg",
    copy: "https://www.deviantart.com/alynspiller/art/Desert-754355938",
    copyBy: "alynspiller",
    link: "https://www.aumyr.world/geography/#irem"
  },
  {
    label: "Olovar",
    loc: [498, 988],
    pop:
      "Questa città-dungeon volante è in realtà un ammasso di roccia gigantesco che, sfruttando il potere antico di enormi cristalli posti alla base si sposta costantemente sospinta dal vento, in ogni angolo di Aumyr. ",
    img: "/images/ruins/olovar.jpg",
    copy: "https://www.deviantart.com/nele-diel/art/Floating-City-671391082",
    copyBy: "nele-diel",
    link: "https://www.aumyr.world/geography/#olovar"
  }
];

for (let i = 0; i < ruins_markers.length; i++) {
  marker = L.marker(ruins_markers[i].loc, {
    icon: marker_icon_ruin
  }).addTo(ruins_lg);
  marker.bindPopup(
    "<div class='card is-ruin'><div class='card-bg' style='background-image:url(" +
      ruins_markers[i].img +
      ")'><div class='card-overlay'></div><a class='badge badge-right badge-secondary badge-sm' href='" +
      ruins_markers[i].copy +
      "' target='_blank' rel='noopener'>&copy; " +
      ruins_markers[i].copyBy +
      "</a>" +
      "</div><div class='card-body'>" +
      "<p>" +
      ruins_markers[i].pop +
      "</p><a href='" +
      ruins_markers[i].link +
      "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>"
  );
  marker.bindTooltip(ruins_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
