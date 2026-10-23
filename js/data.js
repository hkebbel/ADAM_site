/* ==========================================================
   ADAM site content. Edit this file to change text, links,
   sponsors, team members and design-log entries.
   Colors refer to CSS variables defined in css/style.css.
   ========================================================== */

const SITE = {
  name: "ADAM",
  email: "contact.capstone24@gmail.com",          // shown on the Contact page
  footer: "© 2026 ADAM. Double Sided Incremental Forming Capstone Project."
};

// Menu links (the logo always links to index.html)
const NAV = [
  { label: "Design Log", href: "https://app.notion.com/p/MTE-481-Design-Log-Group-24-3e61a1e5f2b480b8877bc90ac2e253eb?source=copy_link", color: "--y" },
  { label: "Construction",    href: "project.html",    color: "--z" },
  { label: "Formed Parts",       href: "design-log.html", color: "--y" },
  { label: "About Us",   href: "about.html",      color: "--x" },
  { label: "Contact",    href: "contact.html",    color: "--fix" }
];

// Sponsor banner. Add a logo by putting an image in /images and
// setting logo: "images/yourlogo.png". Without a logo, the name is shown.
const SPONSORS = [
  { name: "Formlabs",   url: "#", logo: "images/formlabs.png" },
  { name: "ETBO Tool & Die", url: "#", logo: "images/etbo.png" },
  { name: "Igus", url: "#", logo: "images/igus.png" },
  { name: "Oelheld", url: "#", logo: "images/oelheld.png" },
  { name: "JLC PCB",  url: "#", logo: "images/jlcpcb.png" },
  { name: "Duet",   url: "#", logo: "images/duet.png" }
];
const SPONSOR_SPEED = 60; // pixels per second; lower is slower

// Project page: clickable parts list
const PARTS = [
  { name: "", color: "--x", text: "", detail: "" }
];

// Design Log page: newest last
const LOG = [
  { date: "Week 1", title: "User Cases", text: "" }
];

// About Us page. Add photo: "images/name.jpg" to show a picture instead of the initial.
const TEAM = [
  { name: "Yifei Yang",   role: "Role, Build Lead/Mechanical Design", color: "--z",   photo: "images/yifei.png" },
  { name: "Magnus Scott",   role: "Role, Mechanical/FEM Testing",       color: "--y",   photo: "images/magnus.png" },
  { name: "Luke Taylor", role: "Role, Electical/Motor Drive",          color: "--fix", photo: "images/luke.jpg" },
  { name: "Mathew Hanson",  role: "Role, Electrical/PCB Integration",           color: "--x",   photo: "images/mathew.png" },
   { name: "Hayden Kebbel",  role: "Role, Software",           color: "--x",   photo: "images/hayden.png" }
];
