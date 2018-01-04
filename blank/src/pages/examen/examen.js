var preguntas = [

      "1. I __________ in a bank.",
      "2. Barbara __________ everyday.",
      "3. He __________ in Canada.",
      "4. We __________ English.",
      "5. What are you doing right now? I __________ my homework.",
      "6. We __________ to the cinema next weekend.",
      "7. He __________ next week.",
      "8. ________ the train _________ at 8:00?",
      "9. __________ to the party tonight?",
      "10. Michael __________ a new car."

    ];

    var respuestas = [

      ["A) is working", "B) work", "C) works", "D) working"],
      ["A) is running", "B) runs", "C) run", "D) running"],
      ["A) don't live", "B) not lives", "C) doesn't live", "D) not live"],
      ["A) studys", "B) are studying", "C) is studying", "D) studies"],
      ["A) is doing", "B) do", "C) are doing", "D) am doing"],
      ["A) is going", "B) are going", "C) goes", "D) go"],
      ["A) isn't working", "B) not works", "C) not is working", "D) is working not"],
      ["A) Do, leave", "B) Do, leaves", "C) Does, leaves", "D) Does, leave"],
      ["A) You go", "B) Is you going", "C) You are going", "D) Are you going"],
      ["A) want", "B) are wanting", "C) wants", "D) is wanting"]

    ];

    var indice_aleatorio = Math.floor(Math.random()*preguntas.length);

    document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];