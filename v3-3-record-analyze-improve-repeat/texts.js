"use strict";
/* ==================================================================
   TeamVision site texts
   Compiled to texts.js with `make`. Edit this file, not texts.js.

   Every element with data-text="<step>.<field>" gets the matching text,
   e.g. data-text="record.body" reads TEXTS.record.body.
   Inside the strings, \n starts a new line and \n\n leaves an empty line
   (the element needs the .card-text class to show them).
   ================================================================== */
const TEXTS = {
    record: {
        body: "Our custom built recording system using Unity and Steam hardware, resilient and easily customizable for every situation.\n" +
            "Capture every single interaction in your team and store it as data usable for further analysys. User Friendly and human tested",
    },
    analyze: {
        body: "AI takes care of what used to be hours of manual annotation: it puts team coordination, team attention and the state of the situation, here the patient's condition, on one timeline, and flags where things degrade or improve. The expert decides what it means.",
    },
    improve: {
        body: "The trainer leads the debrief. They go straight to the critical moments and give each team member evidence-based feedback on coordination, leadership and use of space.",
    },
    repeat: {
        body: "Compare sessions to see whether the changes held. The loop closes, and the team starts the next one from a higher baseline.",
    },
};
