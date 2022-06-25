<template>
  <body>
    <header>
      <h1>Learning</h1>
    </header>

    <main>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
    </main>

    <footer>
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/learning">Learning</router-link>
    </footer>
  </body>
</template>

<style scoped>
@import "../assets/base.css";

body {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  margin: 0;
}

header {
  grid-area: header;
}

header h1 {
  text-align: center;
  font-size: 4rem;
  background-color: cadetblue;
  font-family: Georgia, "Times New Roman", Times, serif;
}

main {
  display: flex;
  justify-content: center;
  grid-area: main;
}

main p {
  text-align: center;
  width: 50%;
}

footer {
  background-color: cadetblue;
  grid-area: footer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.links {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
}

.links:hover {
  background-color: seashell;
  border-radius: 8px;
}
</style>
