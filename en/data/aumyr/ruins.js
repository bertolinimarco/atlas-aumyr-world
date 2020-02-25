let ruins_lg = L.layerGroup();

let ruins_markers = [
  {
    label: "Valimar",
    loc: [2343, 246.5],
    pop:
      "Valimar is the favourite topic for seafarers. There seems to be a gigantic underwater city off the coast between Laentas and Nordavind. ",
    img: "/images/ruins/valimar.jpg",
    copy:
      "https://www.deviantart.com/lostsoul12a1/art/Underwater-City-50119438",
    copyBy: "lostsoul121",
    link: "https://www.aumyr.world/en/geography/#valimar"
  },
  {
    label: "Zimara",
    loc: [2993, 1990],
    pop:
      "Zimara is the forbidden dream of every treasure hunter. The first excavation point in the depths of the mountains, this Askari town has been carved from a series of mines and tunnels excavated with unknown techniques, corridors made perfectly smooth and round through ancient technology. ",
    img: "/images/ruins/zimara.jpg",
    copy: "https://www.deviantart.com/piotrdura/art/Crystal-cave-583595876",
    copyBy: "piotrdura",
    link: "https://www.aumyr.world/en/geography/#zimara"
  },
  {
    label: "Gherzul",
    loc: [1705, 4032],
    pop:
      'Also known as "The Ancient Necropolis" is a large underground city formed by hundreds of catacombs connected by small tunnels and large tunnels. ',
    img: "/images/ruins/gherzul.jpg",
    copy:
      "https://www.deviantart.com/asahisuperdry/art/Ruins-underground-587621742",
    copyBy: "asahisuperdry",
    link: "https://www.aumyr.world/en/geography/#gherzul"
  },
  {
    label: "Xartar",
    loc: [2124, 1872],
    pop:
      "Former metropolis and probably the capital of Askari, Xartar is the largest known underground complex, formed by several connected dungeons that wind through the depths of the earth. ",
    img: "/images/ruins/xartar.jpg",
    copy: "https://www.deviantart.com/chriscold/art/Dragonfel-575557275",
    copyBy: "chriscold",
    link: "https://www.aumyr.world/en/geography/#xartar"
  },
  {
    label: "Perdol",
    loc: [764, 4024],
    pop:
      "It is said that very few have suffered as much as the inhabitants of the ancient city of Perdol. Some of the testimonies found on the surface show the remains of a splendid and very rich settlement, in which it was possible to find all sorts of material and spiritual wellbeing. ",
    img: "/images/ruins/perdol.jpg",
    copy: "https://www.deviantart.com/mirojohannes/art/Old-Mine-339872828",
    copyBy: "mirojohannes",
    link: "https://www.aumyr.world/en/geography/#perdol"
  },
  {
    label: "Lheng",
    loc: [111, 3467],
    pop:
      "The best way to describe Lheng is to imagine an inverted tower, or a circular crater, which opens into the ground, three hundred meters wide and at least five times deep. ",
    img: "/images/ruins/lheng.jpg",
    copy: "https://www.deviantart.com/anthonyavon/art/Abyss-563560299",
    copyBy: "anthonyavon",
    link: "https://www.aumyr.world/en/geography/#irem"
  },
  {
    label: "Kandros",
    loc: [1822, 2363],
    pop:
      "Kandros is considered the Forge of the World. Situated inside the largest volcanic complex in Aumyr, it is a maze of lava and obsidian stone rooms, tempered by fire and magma.",
    img: "/images/ruins/kandros.jpg",
    copy:
      "https://www.deviantart.com/vandervals/art/Matte-painting-lava-city-214303673",
    copyBy: "vandervals",
    link: "https://www.aumyr.world/en/geography/#kandros"
  },
  {
    label: "Lornat",
    loc: [2446, 3309],
    pop:
      "A large fountain, now drained, is all that remains of the ancient city in the middle of the Merosh Mountains.",
    img: "/images/ruins/lornat.jpg",
    copy: "https://www.deviantart.com/azot2019/art/Sacred-Ruins-765930168",
    copyBy: "azot2019",
    link: "https://www.aumyr.world/en/geography/#lornat"
  },
  {
    label: "Irem",
    loc: [304, 1712],
    pop:
      'Nobody can determine where it is with certainty. Adventurers tell of expeditions to the desert in search of this fabulous "City of Thousand Pillars", and the only testimony of such a place came through the writings of an adventurer made crazy by the deadly dangers of the desert. ',
    img: "/images/ruins/irem.jpg",
    copy: "https://www.deviantart.com/alynspiller/art/Desert-754355938",
    copyBy: "alynspiller",
    link: "https://www.aumyr.world/en/geography/#irem"
  },
  {
    label: "Olovar",
    loc: [498, 988],
    pop:
      "This flying city-dungeon is actually a mass of giant rock that, exploiting the ancient power of huge crystals placed at the base, moves constantly pushed by the wind, in every corner of Aumyr.",
    img: "/images/ruins/olovar.jpg",
    copy: "https://www.deviantart.com/nele-diel/art/Floating-City-671391082",
    copyBy: "nele-diel",
    link: "https://www.aumyr.world/en/geography/#olovar"
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
      "' class='link-text' target='_blank'>Read more on aumyr.world</a></div>"
  );
  marker.bindTooltip(ruins_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
