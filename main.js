let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a06082;">Desarrollo sitios web, me gusta la tecnología y la programación en distintos lenguajes.</span>')
  .pauseFor(200)
  .deleteChars(10)
  
  .start();
