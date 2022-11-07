
function cone(n, rune){
    return n > 0
    ? overlay(overlay(scale(n / (n * 4), rune), scale(n / (n * 2), rune)),
    overlay(scale((n * 3) / (n * 4), rune), scale(n / n, rune)))
    : rune;
}

// Tests
show(cone(4, circle));
hollusion(cone(15, circle));

