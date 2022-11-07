
function steps(r1, r2, r3, r4){
    return overlay(overlay(stack(beside(r4, blank), blank), stack(blank, beside(r3, blank))), 
        overlay(stack(blank, beside(blank, r2)), stack(beside(blank, r1), blank)));
}

// Tests
show(steps(rcross, triangle, corner, nova));
hollusion(steps(rcross, triangle, corner, nova));
