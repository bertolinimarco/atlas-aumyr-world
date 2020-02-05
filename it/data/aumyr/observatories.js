let observatories_lg = L.layerGroup();

let observatories_markers = [
  {
    label: "Osservatorio Gaulur",
    loc: [308, 2710],
    pop:
      "Antiche meraviglie archeologiche, gli Osservatori costituiscono uno dei misteri più grandi per gli studiosi degli Askari. Si compongono di grandi camere dal soffitto semicircolare, coperte di simboli arcani, incluse in saloni immensi pieni di macchinari per l’osservazione astronomica.",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a25c3869-9dab-4fab-bc27-239ce00c0850/ddcuu90-25485653-d97c-4bc7-a2d7-1636b53c8517.jpg/v1/fill/w_1920,h_1278,q_75,strp/engulfed_by_tomtc_ddcuu90-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcL2EyNWMzODY5LTlkYWItNGZhYi1iYzI3LTIzOWNlMDBjMDg1MFwvZGRjdXU5MC0yNTQ4NTY1My1kOTdjLTRiYzctYTJkNy0xNjM2YjUzYzg1MTcuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-xb-b_zmIGp3FKxaocUuEWb4zAOLn-1sNCWF5lanzgM",
    copy: "https://www.deviantart.com/tomtc/art/Engulfed-807654564",
    copyBy: "tomtc",
    link: "https://www.aumyr.world/geography/#osservatori"
  },
  {
    label: "Osservatorio Nembus",
    loc: [2827, 4615],
    pop:
      "Antiche meraviglie archeologiche, gli Osservatori costituiscono uno dei misteri più grandi per gli studiosi degli Askari. Si compongono di grandi camere dal soffitto semicircolare, coperte di simboli arcani, incluse in saloni immensi pieni di macchinari per l’osservazione astronomica.",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a25c3869-9dab-4fab-bc27-239ce00c0850/ddcuu90-25485653-d97c-4bc7-a2d7-1636b53c8517.jpg/v1/fill/w_1920,h_1278,q_75,strp/engulfed_by_tomtc_ddcuu90-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcL2EyNWMzODY5LTlkYWItNGZhYi1iYzI3LTIzOWNlMDBjMDg1MFwvZGRjdXU5MC0yNTQ4NTY1My1kOTdjLTRiYzctYTJkNy0xNjM2YjUzYzg1MTcuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-xb-b_zmIGp3FKxaocUuEWb4zAOLn-1sNCWF5lanzgM",
    copy: "https://www.deviantart.com/tomtc/art/Engulfed-807654564",
    copyBy: "tomtc",
    link: "https://www.aumyr.world/geography/#osservatori"
  },
  {
    label: "Osservatorio Akar",
    loc: [1378, 880],
    pop:
      "Antiche meraviglie archeologiche, gli Osservatori costituiscono uno dei misteri più grandi per gli studiosi degli Askari. Si compongono di grandi camere dal soffitto semicircolare, coperte di simboli arcani, incluse in saloni immensi pieni di macchinari per l’osservazione astronomica.",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a25c3869-9dab-4fab-bc27-239ce00c0850/ddcuu90-25485653-d97c-4bc7-a2d7-1636b53c8517.jpg/v1/fill/w_1920,h_1278,q_75,strp/engulfed_by_tomtc_ddcuu90-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcL2EyNWMzODY5LTlkYWItNGZhYi1iYzI3LTIzOWNlMDBjMDg1MFwvZGRjdXU5MC0yNTQ4NTY1My1kOTdjLTRiYzctYTJkNy0xNjM2YjUzYzg1MTcuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-xb-b_zmIGp3FKxaocUuEWb4zAOLn-1sNCWF5lanzgM",
    copy: "https://www.deviantart.com/tomtc/art/Engulfed-807654564",
    copyBy: "tomtc",
    link: "https://www.aumyr.world/geography/#osservatori"
  }
];

for (let i = 0; i < observatories_markers.length; i++) {
  marker = L.marker(observatories_markers[i].loc, {
    icon: marker_icon_observatory
  }).addTo(observatories_lg);
  marker.bindPopup(
    "<div class='card is-keep'><div class='card-bg' style='background-image:url(" +
      observatories_markers[i].img +
      ")'><div class='card-overlay'></div><a class='badge badge-right badge-secondary badge-sm' href='" +
      observatories_markers[i].copy +
      "' target='_blank' rel='noopener'>&copy; " +
      observatories_markers[i].copyBy +
      "</a>" +
      "</div><div class='card-body'>" +
      "<p>" +
      observatories_markers[i].pop +
      "</p><a href='" +
      observatories_markers[i].link +
      "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>"
  );
  marker.bindTooltip(observatories_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
