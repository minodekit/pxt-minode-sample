minode.onSwitchEvent(SwitchName.SWITCH_A, ConnName.A0, SwitchEvent.MINODE_SWITCH_EVT_OPEN, () => {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
})
minode.onSwitchEvent(SwitchName.SWITCH_A, ConnName.A0, SwitchEvent.MINODE_SWITCH_EVT_CLOSE, () => {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . . . #
        `)
})
