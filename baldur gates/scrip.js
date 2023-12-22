class Level {
    constructor(number, description, options) {
        this.number = number;
        this.description = description;
        this.options = options;
    }

    showInformation() {
        alert(`Nivel ${this.number}: ${this.description}`);
        for (let i = 0; i < this.options.length; i++) {
            alert(`${i + 1}. ${this.options[i]}`);
        }
    }

    getChoice() {
        let choice;
        do {
            choice = prompt("Elige una opción (1, 2 o 3):");
        } while (!/[1-3]/.test(choice));
        return parseInt(choice);
    }
}

function playGame() {
    const levels = [
        new Level(1, "Te encuentras en un bosque oscuro. ¿Cómo decides avanzar?", ["Seguir el camino principal", "Explorar el bosque", "Buscar refugio"]),
        new Level(2, "Llegas a una encrucijada. ¿Qué dirección tomas?", ["Izquierda", "Derecha", "Regresar"]),
        new Level(3, "Encuentras una antigua ruina. ¿La exploras?", ["Entrar en la ruina", "Investigar desde afuera", "Ignorar"]),
        new Level(4, "Cruzas un río caudaloso. ¿Cómo lo haces?", ["Nadar", "Buscar un puente", "Seguir la corriente"]),
        new Level(5, "Te enfrentas a una criatura mitológica. ¿Cómo reaccionas?", ["Hablar con la criatura", "Luchar", "Escapar"]),
        new Level(6, "Llegas a una ciudad amurallada. ¿Cómo entras?", ["Buscar la puerta principal", "Escalar las murallas", "Buscar un túnel secreto"]),
        new Level(7, "Te encuentras con un mercader. ¿Qué haces?", ["Negociar", "Robar", "Ignorar"]),
        new Level(8, "Encuentras un libro antiguo. ¿Lo lees?", ["Leer el libro", "Ignorarlo", "Llevarlo contigo sin leer"]),
        new Level(9, "Te enfrentas a un mago poderoso. ¿Cómo lo abordas?", ["Luchar contra el mago", "Buscar una solución diplomática", "Pedir ayuda"]),
        new Level(10, "Encuentras la entrada a un reino misterioso. ¿Entrarás?", ["Entrar al reino", "Pensar mejor y dar media vuelta", "Observar antes de decidir"]),
    ];

    let currentLevelIndex = 0;

    while (currentLevelIndex < levels.length) {
        const currentLevel = levels[currentLevelIndex];
        currentLevel.showInformation();

        const choice = currentLevel.getChoice();
        switch (choice) {
            case 1:
                alert("¡Buena elección! Continuemos al siguiente nivel.");
                break;
            case 2:
                if (confirm("¿Estás seguro de esa elección?")) {
                    alert("Elección cautelosa. Avanzamos al siguiente nivel.");
                } else {
                    alert("Volvamos a revisar las opciones.");
                    currentLevelIndex--;
                }
                break;
            case 3:
                alert("¡Aventura emocionante! La historia continúa al siguiente nivel.");
                break;
        }

        currentLevelIndex++;
    }

    alert("¡Felicidades! Has completado todos los niveles del juego.");
}

// Start the game
playGame();
