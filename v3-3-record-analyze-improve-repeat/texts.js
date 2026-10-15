"use strict";
/* ==================================================================
   TeamVision site texts
   Compiled to texts.js with `make`. Edit this file, not texts.js.

   Every element with data-text="<step>.<field>" gets the matching text,
   e.g. data-text="record.body" reads TEXTS.record.body.
   Inside the strings, \n starts a new line and \n\n leaves an empty line
   (the element needs the .card-text class to show them).
   Wrap words in **double asterisks** to make them bold.
   ================================================================== */
const TEXTS = {
    hero: {
        lead: "**TeamVision helps experts train teams that operate together.** \n" +
            "Record a session using our digital and fisical tools. See how the team coordinated, and debrief on evidence and data.\n" +
            "TV's sofware does the heavy lifting on the data, the trainer uses that data to address areas of improvement in the team. " +
            "Born in hospitals, built for any team that trains in any context.",
        ctaDemo: "Request a demo",
        ctaLoop: "Discover the method",
        cred: "Developed in partnership with **University of Geneva** · **HUG** · **CIS** · **SNSF**",
    },
    record: {
        body: "Our custom built recording system using Unity and Steam hardware, resilient and easily customizable for every situation.\n" +
            "Capture every single interaction between members of your team and store it as data usable for analysys.\n" +
            "Your members talked too much over each other?, use the verbal overlap varible to make them aware\n" +
            "Your members stumbled too much one upon another?, use the spacial representation function to make them notice."
    },
    analyze: {
        body: "TV's analysis program does in minutes what usually took hours of manual annotation, it \
	  categorizes every recorded interaction in an evergrowing number of human created labels: \
	  it puts team coordination, team attention and the state of the situation \
	  on one timeline, and flags where things degrade or improve. The expert decides what \
	  it means and decides how to take action on the team's training",
    },
    improve: {
        body: "The trainer leads the debrief. They go straight to the critical moments thanks to the \
	  tools and give each team member evidence-based feedback on coordination, leadership and \
	  use of space.",
    },
};
