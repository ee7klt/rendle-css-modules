import greetings from "./robot.js"
import styles from './app.css'

let element = `
<div class="${styles.element}">
  <p>
    lorem ipsum
  </p>
</div>
`
document.write(element, greetings("Affirmative", "Dave"));
