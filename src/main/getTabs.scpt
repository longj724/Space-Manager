tell application "Brave Browser"
    set tabList to ""
    set windowList to every window
    repeat with aWindow in windowList
        set tabList to tabList & return & "Window " & (index of aWindow)
        set tabList to tabList & return & "---------"
        set tabIndex to 0
        repeat with aTab in tabs of aWindow
            set tabIndex to tabIndex + 1
            set tabList to tabList & return & "Tab " & tabIndex & ": " & (title of aTab as string) & " - " & (URL of aTab as string)
        end repeat
    end repeat
end tell
return tabList