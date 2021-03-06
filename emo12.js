/* Replace Emoji 12.0 - replaces Emoji 12.0 emojis with similar ones from earlier standards
   Version 1.0
   Author: githubcatw (Narek Torosyan) 

   Replaces 13 emojis, min level supported: 11.0 (for Leg) */

for (var i = 0; i < 13; i++) {
document.body.innerHTML = document.body.innerHTML.replace("🦻", "👂"); // Ear with Hearing Aid -> Ear
document.body.innerHTML = document.body.innerHTML.replace("🤍", "❤️"); // White Heart -> Red Heart
document.body.innerHTML = document.body.innerHTML.replace("🤎", "🖤"); // Brown Heart -> Black Heart
document.body.innerHTML = document.body.innerHTML.replace("🦾", "💪"); // Mechanical Arm -> Flexed Biceps
document.body.innerHTML = document.body.innerHTML.replace("🦾", "🦵"); // Mechanical Leg -> Leg
document.body.innerHTML = document.body.innerHTML.replace("🦩", "🐦"); // Flamingo -> Bird
document.body.innerHTML = document.body.innerHTML.replace("🧏", "🧑"); // Deaf Person -> Person
document.body.innerHTML = document.body.innerHTML.replace("🟨", "⬜"); // Large Yellow Square -> White Large Square
document.body.innerHTML = document.body.innerHTML.replace("🦮", "🐕"); // Guide Dog -> Dog
document.body.innerHTML = document.body.innerHTML.replace("🐕‍🦺", "🐕"); // Service Dog -> Dog
document.body.innerHTML = document.body.innerHTML.replace("🧑‍🤝‍🧑", "👨‍👨‍👦"); // People Holding Hands -> Family: Man, Man, Boy
document.body.innerHTML = document.body.innerHTML.replace("🦧", "🐒"); // Orangutan -> Monkey
document.body.innerHTML = document.body.innerHTML.replace("🧈", "🧀"); // Butter -> Cheese
}