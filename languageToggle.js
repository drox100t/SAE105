let isFrench = true;

function changerLangue() {
    isFrench = !isFrench;

    if (isFrench) {
        languechangementfr();
    } else {
        languechangementEN();
    }
}

function languechangementfr() {
    // Texte français
    document.getElementById("histoireTitre").innerText = "Bienvenue chez Grill D. Roger !";
    document.getElementById("histoireTexte").innerText = "Jack était un marin qui adorait la mer, mais encore plus, il adorait la nourriture. Chaque fois qu'il s'arrêtait dans un nouveau port, il essayait les plats locaux et apprenait les différentes saveurs. Il était fasciné par la façon dont la nourriture pouvait raconter des histoires sur les endroits et les gens. Tandis que son équipage rêvait de trouver de l'or, Jack rêvait de créer des repas que tout le monde pourrait apprécier.";

    document.getElementById("transformationTitre").innerText = "Suivre Sa Passion";
    document.getElementById("transformationTexte").innerText = "Un jour, Jack a décidé qu'il était temps de suivre sa passion. Il a quitté la mer et acheté un vieux navire. Plutôt que de naviguer, il a transformé le navire en un camion de restauration. Il l'a appelé Grill D. Roger pour honorer sa vie de marin et son rêve de cuisine.";

    document.getElementById("descriptionTitre").innerText = "Une Cuisine Pleine d'Aventure";
    document.getElementById("descriptionTexte2").innerText = "Chez Grill D. Roger, nous croyons en une cuisine fraîche, délicieuse et pleine d'aventure. Nous utilisons des ingrédients de qualité provenant de fermiers locaux et travaillons d'une manière respectueuse de la planète.";
    document.getElementById("descriptionTexte").innerText = "Chaque burger raconte une histoire de voyage et de saveurs, fait avec amour et soin. Nos recettes sont inspirées des épices de l'Est, des sauces riches de l'Ouest, et tout ce qui se trouve entre les deux.";
    document.getElementById("rejoignezTitre").innerText = "Rejoignez-nous !";
    document.getElementById("rejoignezTexte").innerText = "Chaque burger raconte une histoire de voyage et de saveurs, fait avec amour et soin. Nos recettes sont inspirées des épices de l'Est, des sauces riches de l'Ouest, et tout ce qui se trouve entre les deux.";

    document.getElementById("rejoignezBouton").innerText = "Rejoignez-nous";
    document.getElementById("boutonLangue").innerText = "ENG";
    document.getElementById("rejoignezTexte").innerText = "Aujourd'hui, notre food truck est amarré à Grand Line(Tour Eiffel), prêt à accueillir toute personne qui aime un bon repas avec une touche d'aventure. Venez nous rendre visite et profitez d'un burger qui vous emmènera en voyage !";
}

function languechangementEN() {
    // Texte anglais
    document.getElementById("histoireTitre").innerText = "Welcome to Grill D. Roger!";
    document.getElementById("histoireTexte").innerText = "Jack was a sailor who loved the sea, but even more, he loved food. Every time he stopped at a new port, he tried the local dishes and learned about the different flavors. He was fascinated by how food could tell stories about places and people. While his crew dreamed of finding gold, Jack dreamed of creating meals that everyone could enjoy.";

    document.getElementById("transformationTitre").innerText = "Following His Passion";
    document.getElementById("transformationTexte").innerText = "One day, Jack decided it was time to follow his passion. He left the sea and bought an old ship. Instead of sailing, he turned the ship into a food truck. He named it Grill D. Roger to honor his life as a sailor and his dream of cooking.";
    document.getElementById("descriptionTexte").innerText = "Each burger tells a story of travel and flavors, made with love and care. Our recipes are inspired by spices from the East, rich sauces from the West, and everything in between.";
    document.getElementById("descriptionTitre").innerText = "A Cuisine Full of Adventure";
    document.getElementById("descriptionTexte2").innerText = "At Grill D. Roger, we believe in fresh, delicious food full of adventure. We use quality ingredients from local farmers and work in a way that respects the planet.";

    document.getElementById("rejoignezTitre").innerText = "Join Us!";
    document.getElementById("rejoignezTexte").innerText = "Today, our food truck is docked at Grand Line(Eiffel Tower), ready to welcome anyone who loves a good meal with a touch of adventure. Come visit us and enjoy a burger that will take you on a journey!";

    document.getElementById("rejoignezBouton").innerText = "Join Us";
    document.getElementById("boutonLangue").innerText = "FR";
}
