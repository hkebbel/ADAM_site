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
  { name: "ABB Automation",   url: "#", logo: "images/ABB.png" },
  { name: "ETBO Tool & Die", url: "#", logo: "images/etbo.png" },
  { name: "RepRap",  url: "#", logo: "images/reprap.png" },
  { name: "JLC PCB",  url: "#", logo: "images/jlcpcb.png" },
  { name: "Duet",   url: "#", logo: "images/duet.png" }
];
const SPONSOR_SPEED = 60; // pixels per second; lower is slower

// Project page: clickable parts list
const PARTS = [
  { name: "X-axis", color: "--x", text: "Moves the fixture side to side along rails driven by a stepper motor.", detail: "Replace with travel distance and drive type." },
  { name: "Y-axis", color: "--y", text: "Moves the gantry front to back, carrying the toolhead across the work area.", detail: "Replace with travel distance and drive type." },
  { name: "Z-axis", color: "--z", text: "Raises and lowers the toolhead to set cutting depth.", detail: "Replace with travel distance and drive type." },
  { name: "Toolhead", color: "--tool", text: "Holds the cutting tool and does the actual shaping.", detail: "Replace with tool type and spindle details." },
  { name: "Workpiece", color: "--work", text: "The material being shaped into the final part.", detail: "Replace with materials you can cut." },
  { name: "Material fixture", color: "--fix", text: "Clamps the workpiece so it stays put while the tool cuts.", detail: "Replace with clamping method." },
  { name: "Base", color: "--base", text: "The rigid foundation that keeps every axis aligned and steady.", detail: "Replace with frame material and weight." }
];

// Design Log page: newest last
const LOG = [
  { date: "Week 1", title: "User Case", text: "Form Labs use case maybe" }
];

// About Us page. Add photo: "images/name.jpg" to show a picture instead of the initial.
const TEAM = [
  { name: "Yifei Yang",   role: "Role, Build Lead/Mechanical Design", color: "--z",   photo: "images/yifei.png" },
  { name: "Magnus Scott",   role: "Role, Mechanical/FEM Testing",       color: "--y",   photo: "images/magnus.png" },
  { name: "Luke Taylor", role: "Role, Electical/Motor Drive",          color: "--fix", photo: "images/luke.jpg" },
  { name: "Mathew Hanson",  role: "Role, Electrical/PCB Integration",           color: "--x",   photo: "images/mathew.png" },
   { name: "Hayden Kebbel",  role: "Role, Software",           color: "--x",   photo: "images/hayden.png" }
];
