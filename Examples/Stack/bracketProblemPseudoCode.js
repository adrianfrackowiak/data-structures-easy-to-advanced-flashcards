// EXAMPLE - BRACKETS PSEUDOCODE

let bracket be '[{(<]})>'
let s be a stack

for bracket in bracket_string {
    rev = getReversedBracket(bracket)

    if isLeftBracket(bracket) {
        s.push(bracket)
    
    }

    else if s.isEmpty() or s.pop() != rev {
        return false // Invalid
    }
}

return s.isEmpty() // Valid if s is empty