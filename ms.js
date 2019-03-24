/* Replace Microsoft Emoji - replaces Microsoft emojis with similar ones from existing standards
   Version 1.0
   Author: githubcatw (Narek Torosyan) 

   Replaces 6 emojis, min level supported: 1.0 */

for (var i = 0; i < 13; i++) {
document.body.innerHTML = document.body.innerHTML.replace("🐱‍👤", "🐱"); // Ninja Cat -> Cat
document.body.innerHTML = document.body.innerHTML.replace("🐱‍🏍", "🐱🏍️"); // Stunt Cat -> Cat + Racing Motorcycle
document.body.innerHTML = document.body.innerHTML.replace("🐱‍🚀", "🐱🚀"); // Astro Cat -> Cat + Rocket
document.body.innerHTML = document.body.innerHTML.replace("🐱‍💻", "🐱💻"); // Hacker Cat -> Cat + Personal Computer
document.body.innerHTML = document.body.innerHTML.replace("🐱‍🐉", "🐱🐉"); // Dino Cat -> Cat + Dragon
document.body.innerHTML = document.body.innerHTML.replace("🐱‍👓", "🐱👓"); // Hipster Cat -> Cat + Eyeglasses
}