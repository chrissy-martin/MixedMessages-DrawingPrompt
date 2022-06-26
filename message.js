const drawingPrompt = {
    genre: ["Sci-Fi", "Murder Mystery", "Romance", "Historical", "Fable", "Fantasy", "Mythology", "Fairy Tale", "Drama", "Adventure"],
    species: ["Elf", "Dwarf", "Mermaid", "Fawn", "Human", "Lizard person", "Rat", "Giant", "Gremlin", "Sprite", "Fairy", "Cat", "Raccoon", "Mongoose", "Opossum", "Skeleton", "Zombie", "Creature of the Blue Lagoon"],
    personalityTrait: ["Shy", "Extrovert", "Crazed", "Adventurous", "Charasmatic", "Gentle", "Calm", "Wise", "youthful", "old", "Mystical", "Clumsy", "Glamourous", "Whimsical", "Brash", "Lazy", "Timid", "Aggressive", "Sauve", "Drunk", "Playful"],
    style: ["Anime", "Comic Book", "Cartoon", "Realistic", "Doodling", "Sketchy", "Style of choice", "Full color", "Story board", "Illustrative", "Graphic novel"],
    randomIndex(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    finalPrompt() {
        return `Using a/an ${this.randomIndex(drawingPrompt.style)} style, draw a ${this.randomIndex(drawingPrompt.personalityTrait)} ${this.randomIndex(drawingPrompt.species)} set in a/an ${this.randomIndex(drawingPrompt.genre)} genre`;
    }
}
console.log(drawingPrompt.finalPrompt());