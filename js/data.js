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
  { label: "Mission",    href: "mission.html",    color: "--fix" },
//  { label: "Design Log", href: "https://app.notion.com/p/MTE-481-Design-Log-Group-24-3e61a1e5f2b480b8877bc90ac2e253eb?source=copy_link", color: "--y" },
  { label: "Construction",    href: "project.html",    color: "--z" },
  { label: "Formed Parts",       href: "design-log.html", color: "--y" },
  { label: "About Us",   href: "about.html",      color: "--x" },
  { label: "Contact",    href: "contact.html",    color: "--fix" }
];

// Sponsor banner. Add a logo by putting an image in /images and
// setting logo: "images/yourlogo.png". Without a logo, the name is shown.
const SPONSORS = [
  { name: "Formlabs",   url: "https://formlabs.com/", logo: "images/formlabs.png" },
  { name: "Northwestern University",   url: "https://www.cao.mech.northwestern.edu/", logo: "images/NW.jpg" },
  { name: "Oelheld", url: "https://www.oelheld.com/en/", logo: "images/oelheld.png" },
  { name: "Duet",   url: "https://www.duet3d.com/", logo: "images/duet.png" },
  // { name: "ABB",   url: "#", logo: "images/ABB.png" },
  // { name: "Linamar", url: "#", logo: "images/Linamar.png" },
  { name: "ETBO Tool & Die", url: "https://etbo.ca/", logo: "images/etbo.png" },
  { name: "Igus", url: "https://www.igus.ca/", logo: "images/igus.png" },
  { name: "Stepper Online",  url: "https://www.stepperonline.ca/", logo: "images/StepO.jpg" }
];
const SPONSOR_SPEED = 60; // pixels per second; lower is slower

/* ----------------------------------------------------------
   HOW "blocks" WORK (used by parts and log entries)
   A { heading } block starts a collapsible section. Every block after it
   (text, list, image) goes inside that section until the next heading.
   The first section opens by default; add open: true to any heading to
   open it too.
     { heading: "Title" }                      starts a collapsible section
     { text: "A paragraph." }                  paragraph
     { list: ["one", "two"] }                  bullet list
     { image: "images/x.png", caption: "..." } image with optional caption
   ---------------------------------------------------------- */

// Project page: clickable parts list
const PARTS = [
  { name: "Mechanical", color: "--base", image: "images/mech.jpg",
    blocks: [
      { heading: "Overview" },
      { text: "The mechanical design of ADAM is based on a 3D printer, with a gantry system that moves the toolhead in the X and Y axes, and a Z-axis that moves the workpiece up and down." },
      { image: "images/machine.png", caption: "Machine" },

      { heading: "Axis definition" },
      { list: [
        "Z: Normal to workpiece",
        "X: Parallel to workpiece (single actuator)",
        "Y: Parallel to workpiece (2x actuators)"
      ] },

      { heading: "Actuators and stages" },
      { list: [
        "8x NEMA 23 steppers total",
        "120mm linear stages for X and Z",
        "400mm stroke in X",
        "150mm stroke in Z",
        "82mm linear stages for Y, all with 400mm stroke"
      ] },

      { heading: "Toolhead" },
      { text: "The toolhead will be custom machined from a hardened steel to resist deformation" },
      { list: ["Lubrication system to be interfaced with the toolhead"] },

      { heading: "Workpiece fixture" },
      { text: "The workpiece will be held in place by a fixture, which can be adjusted to accommodate different sizes and shapes of sheet metal." },

      { heading: "Base" },
      { text: "The base of the machine will be designed to be stable and rigid, to minimize vibrations during operation." },

      { heading: "Deformation" },
      { image: "images/Deformation.png", caption: "Deformation" }
    ] },

  { name: "Electrical", color: "--x", image: "images/elec.jpg",
    text: "The electrical design of ADAM is going to be built using the schematic below. The design will be based on a 6XD motherboard, which will be used to control the motors and other components of the machine.",
    blocks: [
      { heading: "Power and control" },
      { list: [
        "600W PSU (PN TBD)",
        "Recovered enclosure from previous capstone (SPIFY)",
        "Working with Duet3D to get motor control boards",
        "1x 6XD motherboard (6 motor capacity)",
        "2x 1XD expansion boards (1 motor each)",
        "2x ADC sensing boards (for laser distance + strain gauges)"
      ] },

      { heading: "Schematic" },
      { pdf: "pdfs/ES.pdf", title: "Electrical schematic" },

      { heading: "Safety" },
      { text: "All stage limit switches will be wired in series to provide E-stop functionality in the event of over-travel or loose cable." }
    ] },

  { name: "Software", color: "--y", image: "images/software.jpg",
    blocks: [
      { heading: "Toolpath generation" },
      { text: "Toolpaths for the machine are created using G-code to command the motors to the correct tool tip positions in all three degrees of freedom." },

      { heading: "Slicing software" },
      { text: "To create a toolpath from CAD files, software from Northwestern University's research on incremental forming was repurposed. The software was dissected and wrapped by a script that streamlines the options and simplifies the slicing of the CAD surface and the output toolpath." },

      { heading: "Toolpath preview" },
      { image: "images/toolpath.webp", caption: "Generated toolpath" },

      { heading: "More information" },
      { text: "More information to come." }
    ] },

  { name: "Simulation", color: "--z", image: "images/sim.jpg",
    text: "Simululations that were run to predict the material response to incremental forming metrics.",
    blocks: [
      { heading: "Goals" },
      { text: "Finding material response to incremental forming metrics." },

      { heading: "Setup" },
      { list: ["Software used", "Material model", "Boundary conditions"] },

      { heading: "Results" },
      { text: "[Results will be inserted here]" }
    ] },

  { name: "Deliverables", color: "--tool", image: "images/Del.jpg",
    text: "Click to see the deliverables for this project.",
    blocks: [
      { heading: "Preliminary Design Presentation" },
      { text: "Initial plan and requirements." },
      { pdf: "pdfs/PDP.pdf", title: "Preliminary Design Presentation" },

      // { heading: "Design review" },
      // { pdf: "pdfs/design-review.pdf", title: "Design review slides" },
      // { pdf: "pdfs/test-results.pdf", title: "Test results" }
    ] },

  // { name: "Toolhead", color: "--tool", image: "images/mathew.png",
  // blocks: [ { heading: "..." }, { text: "..." } ] },
];

// Formed Parts / Design Log page: newest last.
// Each entry is a collapsible container. Inside it you can use "text" for a
// short paragraph and/or "blocks" (same format as the parts above).
const LOG = [
  { title: "Form Labs Part",
    blocks: [
      { heading: "Summary" },
      { text: "Attempt at achieving the fabrication of real part in industry", image: "images/FormLabsPart.png", caption: "Formlabs part" },
      { heading: "Experiments" },
      { list: ["Fist Iteration", "Second Iteration"] }
    ] },
      {title: "Oeheld Lubrication Test",
    blocks: [
      { heading: "Summary" },
      { text: "Describe the user cases you identified." },
      { heading: "Outcome" },
      { list: ["Lube 1", "Lube 2"] }
    ] }
];

// About Us page. Add photo: "images/name.jpg" to show a picture instead of the initial.
const TEAM = [
  { name: "Yifei Yang",   role: "Role, Build Lead/Mechanical Design", color: "--z",   photo: "images/yifei.png" },
  { name: "Magnus Scott",   role: "Role, Mechanical/FEM Testing",       color: "--y",   photo: "images/magnus.png" },
  { name: "Luke Taylor", role: "Role, Electical/Motor Drive",          color: "--fix", photo: "images/luke.jpg" },
  { name: "Mathew Hanson",  role: "Role, Electrical/PCB Integration",           color: "--x",   photo: "images/mathew.png" },
   { name: "Hayden Kebbel",  role: "Role, Software",           color: "--base",   photo: "images/hayden.png" }
];