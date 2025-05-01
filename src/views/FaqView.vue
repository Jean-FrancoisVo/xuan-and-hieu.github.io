<script setup lang="ts">
</script>

<template>
  <main>
    <h3 class="sacramento">FAQ</h3>
    <h4 class="sacramento">Quel est le dress code pour votre mariage ?</h4>
    <p>
      Soyez <span>élégants</span> et <span>à l’aise</span> !<br />
      Notre mariage sera sous le thème <span>Rococo chic</span>, alliant raffinement et éclat. <br />
      Envie de briller ? Sortez votre plus beau costume ou robe de soirée, un brin d’extravagance est même le bienvenu ! <br />
      Si vous préférez la simplicité, une chemise et un pantalon ou une jolie robe feront l’affaire.<br />
      L’essentiel, c’est que vous vous sentiez bien et prêt·e à faire la fête avec nous !<br />
    </p>
    <h4 class="sacramento">Puis-je venir accompagné ?</h4>
    <p>
      Pour des raisons de capacité et d’organisation, seuls les enfants ainsi que les accompagnants prévus sur l’invitation pourront se joindre à nous.
      Merci de votre compréhension !
    </p>
    <h4 class="sacramento">Les enfants sont-ils les bienvenus ?</h4>
    <p>
      Oui, bien sûr ! Un espace dédié aux enfants sera prévu avec des animateur·rice·s pour s’occuper d’eux de 18h à 1h, afin que vous puissiez célébrer avec nous en toute sérénité.
    </p>
    <h4 class="sacramento">Y aura-t-il des possibilités de repas végan/végétarien/sans gluten ?</h4>
    <p>
      Oui ! Des repas végans, sans aucun produit d’origine animale, seront prévus pour les invités ne consommant pas de viande.
      N’hésitez pas à nous indiquer votre préférence ainsi que toute autre restriction alimentaire ou allergène dans le formulaire de RSVP.
    </p>
    <h4 class="sacramento">Qui contacter en cas de besoin le jour J ?</h4>
    <p>
      Nous ajouterons ici les contacts de nos témoins pour le jour J 😉
    </p>
    <h4 class="sacramento">Avez-vous prévu une liste de mariage ?</h4>
    <p>
      Non, il n'y aura pas de liste de mariage. Votre présence est ce qui compte le plus pour nous. <br/><br/>
      Si vous souhaitez néanmoins participer à nos projets (un grand merci pour votre générosité !),
      une urne sera mise à disposition le jour J, ainsi qu’un lien vers une cagnotte en ligne.
      Une partie des sommes reçues sera reversée à la Fondation ARC pour la recherche contre le cancer,
      en hommage à la maman de Xuan et à toutes les victimes de cette maladie dévastatrice.
    </p>
    <h3 class="sacramento">♡♡</h3>
  </main>
</template>

<style scoped>
main {
  background: var(--color-champagne);
  overflow-x: hidden;
  margin-top: 10vh;
  padding: 0 4vw;
}

@media screen and (min-width: 600px) {
  main {
    text-align: center;
  }
}

.sacramento {
  color: var(--color-sacramento);
}

h3 {
  font-family: Anton, serif;
  font-size: 0.9em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 2vh 0 4vh 0;
  word-break: break-word;
  text-align: center;
}

h4 {
  font-family: "Cormorant Garamond", serif;
  font-size: 0.6em;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 3vh;
}

p {
  font-family: "Cormorant Garamond", serif;
  font-size: 0.55em;
  color: black;
  line-height: 1.35em;
  margin-bottom: 3vh;
}

p span {
  font-weight: bold;
}

</style>
