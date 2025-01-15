document.addEventListener("DOMContentLoaded", () => {
    const funfactBtn = document.getElementById("funfactBtn");
    const funFactPopup = document.getElementById("funFactPopup");
    const closePopup = document.getElementById("closePopup");
    const funFactText = document.getElementById("funFact");

    // Seznam zabavnih dejstev o gamingu
    const funFacts = [
        "Prva video igra je bila ustvarjena leta 1958 s strani Williama Higinbothama in je bila imenovana 'Tennis for Two'.",
        "Super Mario Bros. je bil izdan leta 1985 za Nintendo Entertainment System (NES).",
        "Ali ste vedeli? Najbolj prodajana video igra vseh časov je Minecraft, s preko 200 milijoni prodanimi kopijami!",
        "Najdaljši maraton igranja ene same igre je trajal 35 ur, 45 minut in 30 sekund, igralo pa se je Call of Duty: Modern Warfare 3.",
        "Prva konzola, ki je uporabljala kasete, je bila Color TV-Game 6, izdana leta 1977 s strani Nintenda.",
        "Leta 1997 je bila izdana prva spletna večigralska igra, 'The Realm'.",
        "Pikachu, slavni Pokémon, je bil sprva mišasti lik, vendar je kasneje postal električni tip Pokémon.",
        "Prvi esporstni turnir je bil organiziran leta 1972 in je bil imenovan 'Intergalactic Spacewar Olympics'.",
        "Mario je bil sprva imenovan 'Jumpman' v arkadni igri Donkey Kong.",
        "Najdražja video igra vseh časov je Destiny, s skupnimi stroški okoli 500 milijonov dolarjev.",
        "Leta 1994 je bila izdana prva video igra, ki je uporabljala tehnologijo CD-ROM, in sicer Sony PlayStation.",
        "Ali ste vedeli? Prva video igra, ki je imela popolnoma 3D okolje, je bila 'Virtua Racing' leta 1992.",
        "Leta 2003 je bila lansirana 'World of Warcraft', ki je postala ena najbolj vplivnih MMORPG iger vseh časov.",
        "Prvi video igra lik, ki je imel svoj film, je bil 'Super Mario' leta 1993.",
        "Ali ste vedeli? Najdaljša igra Tetrisa je trajala 35 ur!",
        "Izraz 'Game Over' je bil prvič uporabljen leta 1981 v arkadni igri 'Donkey Kong'.",
        "Najdražja konzola, ki je bila kdajkoli izdelana, je PlayStation 3, ki je ob izidu stala okoli 800 dolarjev.",
        "Leta 2014 je 'Grand Theft Auto V' postavil rekord za najvišji prihodek od video igre v prvih 24 urah z 800 milijoni dolarjev v prodaji.",
        "Najstarejši video igra lik je 'Pong', ki se je prvič pojavil leta 1972.",
        "Prva video igra, ki je bila ustvarjena, je bila teniška igra, ki jo je razvil William Higinbotham leta 1958.",
        "Najbolj igrana mobilna igra vseh časov je 'Candy Crush Saga'.",
        "Najuspešnejša video igra franšiza v zgodovini je 'Mario', s preko 700 milijoni prodanimi enotami.",
        "Ali ste vedeli? Prva video igra, ki je imela funkcijo shranjevanja, je bila 'The Legend of Zelda' leta 1986.",
        "Najdaljša video igra serija je 'The Legend of Zelda', ki traja že od leta 1986.",
        "Minecraft, peskovnik igra, je bil sprva razvit s strani Markusa Perssona v samo nekaj dneh leta 2009.",
        "Ali ste vedeli, da je bila prva 'Pong' igra navdihnjena s tenisom, uporabljala pa je dve loparji in žogico?",
        "Najdražja video igra zbirateljski predmet, ki je bil kdajkoli prodan, je bila zaklenjena kopija 'Super Mario Bros.' za NES, ki je bila prodana za 2 milijona dolarjev leta 2021.",
        // Dodajte še več dejstev ...
    ];

    // Funkcija za naključen izbor dejstva
    function getRandomFunFact() {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        return funFacts[randomIndex];
    }

    // Pokaži zabavno dejstvo ob kliku na gumb
    funfactBtn.addEventListener("click", () => {
        funFactText.textContent = getRandomFunFact(); // Nastavi novo naključno dejstvo
        funFactPopup.style.display = "flex";  // Pokaže pop-up
    });

    // Zapri pop-up ob kliku na gumb "zapri"
    closePopup.addEventListener("click", () => {
        funFactPopup.style.display = "none"; // Skrije pop-up
    });

    // Zapri pop-up, če uporabnik klikne zunaj njega
    window.addEventListener("click", (event) => {
        if (event.target === funFactPopup) {
            funFactPopup.style.display = "none";
        }
    });
});
