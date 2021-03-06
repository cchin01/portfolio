document.addEventListener(
  "DOMContentLoaded",
  function () {
    var t = document.querySelector(".post-grid"),
      e = new Isotope(t, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: !0,
        layoutMode: "packery",
      });
    imagesLoaded(t).on("progress", function () {
      e.layout();
    });
    var r = {},
      a = document.querySelector(".filter-buttons");
    a.addEventListener("click", function (t) {
      if (matchesSelector(t.target, "button")) {
        var n = t.target.getAttribute("data-filter");
        (n = r[n] || n), e.arrange({ filter: n });
        var o = a.querySelector(".btn-primary");
        null !== o && (o.classList.remove("btn-primary"), o.classList.add("btn-secondary")),
          t.target.classList.remove("btn-secondary"),
          t.target.classList.add("btn-primary");
      }
    });
  },
  !1
);
