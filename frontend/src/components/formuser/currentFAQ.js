export default [
  {
    id: "1",
    category: "OP-1",
    question: "how do i charge my OP-1?",
    answer: "use any usb cable connected to a computer or standard usb phone or tablet charger.",
    keywords: "OP-1"
  }, {
    id: "2",
    category: "OP-1",
    question: "how do i update the OP-1 firmware?",
    answer: `
      * turn OP-1 off.
      * disconnect the usb cable.
      * wait three seconds.
      * press and hold the COM key on the OP-1 while turning the power on. this will take you to the TE-BOOT screen.
      * press T1 or 1/IN on OP-1 to select upload firmware.
      * connect OP-1 to computer using the usb cable. OP-1 will appear as a removable disk on your computer.
      * copy the firmware file to the root of the removable disk.
      * eject the removable disk.
      * press the COM button on OP-1.

      note: if the OS revision number at OP-1 startup is same or greater than the currently available download version, then you should not update.

      the latest firmware can be found here:
      [teenage.engineering/downloads#os_updates](https://teenageengineering.com/downloads/osupdates)
      `,
    keywords: "OP-1"
  }, {
    id: "3",
    category: "OP-1",
    question: "how long does the battery last?",
    answer: `
      the battery will last 8-10 hours of constant use on a full charge.
      in standby mode the battery will last 16 hours.
      `,
    keywords: "OP-1"
  }, {
    id: "4",
    category: "OP-1",
    question: "how long does my warranty last?",
    answer: `
      we offer one year warranty on all of our products.

      please see [teenage.engineering/terms-and-conditions](https://teenageengineering.com/terms-and-conditions) for more information.
      `,
    keywords: "OP-1"
  }, {
    id: "5",
    category: "OP-1",
    question: "can i sync OP-1 with other devices?",
    answer: `
      * use usb to synchronize with other devices.
      * press &#91;tempo&#93; and turn &#91;green&#93; for the available sync modes.

      please see [teenage.engineering/guides/op-1/tempo](https://teenageengineering.com/guides/op-1/tempo) for further instructions.
      `,
    keywords: "OP-1"
  }, {
    id: "6",
    category: "OP-1",
    question: `
      a key has broken on my OP-1,
      where can i get a new one?
      `,
    answer: "if a key cap has broken please contact support with a picture of your key and the serial number of your synthesizer.",
    keywords: "OP-1"
  }, {
    id: "7",
    category: "OP-1",
    question: "where can i order spare parts for my OP-1?",
    answer: `
      we have partnered with iFixit to stock all of our spare parts. please check their guides and store for any questions about performing repairs yourself.

      [ifixit.com/Device/Teenage_Engineering_OP-1](https://www.ifixit.com/Device/Teenage_Engineering_OP-1)
      `,
    keywords: "OP-1"
  }, {
    id: "8",
    category: "pocket operator",
    question: "how do i turn off my pocket operator?",
    answer: `
      pocket operators auto power off after 5 minutes of inactivity. in this state all patterns and settings will be saved, leaving only the LCD lit.

      this state draws very little power so there is no need to remove batteries. if there is a cable connected in the line in, the unit will auto power off after 60 minutes of inactivity. press any key to wake the unit after sleep.
      `,
    keywords: "pocket operator"
  }, {
    id: "9",
    category: "pocket operator",
    question: `
      my pocket operator won't start,
      even when i insert batteries.
      `,
    answer: `
      * remove the 2 x AAA batteries from the holder on the back side of the pocket operator.
      * use a spudger, pencil or similar tool, to remove the batteries out of their holder.
      * carefully adjust the four short-end connectors of the battery holder inwards slightly tighter towards each side.
      * insert two new fully charged batteries, and see if connection is established.
      * make sure the positive (+) and negative (-) poles of the batteries are well connected with the holder connectors on pocket operator, thus closing the circuit allowing unit to turn on.
      `,
    keywords: "pocket operator"
  }, {
    id: "10",
    category: "pocket operator",
    question: `
      how do i play
      different notes/sounds?
      `,
    answer: `
      * make sure write mode is disengaged.
      * press buttons [1-16] to play different sounds.

      please refer to the [guides](https://teenageengineering.com/guides) for model specific operation.
      `,
    keywords: "pocket operator"
  }, {
    id: "11",
    category: "pocket operator",
    question: `
      how do i program
      different notes/sounds?
      `,
    answer: `
      * make sure write mode is enabled. enter sounds/notes in the pattern.
      * hold a specific step and turn [knob A] to change pitch of the specific step.
      * press &#91;play&#93; to hear it.
      `,
    keywords: "pocket operator"
  }, {
    id: "12",
    category: "pocket operator",
    question: "what is write mode?",
    answer: `
      in write mode you program patterns.

      * press and release the &#91;write&#93; button on the lower right hand side of the unit to toggle write mode on and off.
      * while write mode is active (indicated by the rec symbol on the display), pressing buttons [1-16] will place triggers in the corresponding grid positions, forming a pattern (indicated by lit LEDs).
      * press &#91;play&#93; to playback your pattern.
      * press &#91;write&#93; again to exit write mode.
      `,
    keywords: "pocket operator"
  }, {
    id: "13",
    category: "pocket operator",
    question: "how do i record in write mode?",
    answer: `
      * press &#91;play&#93;.
      * hold &#91;write&#93; while playing your notes &#91;1-16&#93;.
      `,
    keywords: "pocket operator"
  }, {
    id: "14",
    category: "pocket operator",
    question: "how do i clear a pattern?",
    answer: `
      * hold the button directly below the right knob (‘funct’ / ‘key’ / ‘chord’ / etc.) and press ‘pattern’.
      * this will clear the current selected pattern and remove all data.
      `,
    keywords: "pocket operator"
  }, {
    id: "15",
    category: "pocket operator",
    question: `
      how do i synchronize my
      pocket operator?
      `,
    answer: `
      * all pocket operators can be synchronized to an audio click track.
      * hold the key on the right, just below knob B, and press bpm toggle sync modes.
      * keep holding and press bpm repeatedly to toggle between different modes.
      * there are 5 sync modes, where default is mode SY0 (sync off).
      * when sync is used the signal will be split between audio (right) and sync (left). modes 2-5 are available when a cable is connected to line in.

      sync mode reference chart:

TABLE IN MARKDOWN
    mode|   |   |   |   |   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

      mode|input|output
      SY0
      SY1
      SY2
      SY3
      SY4
      SY5

      input
      stereo
      stereo
      sync
      sync
      mono/sync
      mono/sync

      output
      stereo
      mono/sync
      stereo
      mono/sync
      stereo
      mono/sync

      video tutorial:
      LÄNK MED VIDEO - HUR FUNKAR DET?

      please note: for external triggering make sure you use the right sync polarity, and that you use a signal that is maximum 5 Vpp (volt peak-to peak). any stronger signals need to be reduced before they can be used. failing to do so may harm the input and will not be covered by warranty.
      `,
    keywords: "pocket operator"
  }

]
