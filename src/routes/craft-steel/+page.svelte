<script lang="ts">
  import Header from "../../lib/components/Header.svelte";
  import Footer from "../../lib/components/Footer.svelte";
  import { Difficulties, type Difficulty } from '../../lib/types/Difficulty';
  
  let encounterDifficulty: Difficulty = Difficulties.Trivial;
  let description = "test";

  function onEncounterDifficultyBtnClicked(status : Difficulty){
    encounterDifficulty = status;

    if (status == Difficulties.Trivial){
      description = "Trivial encounters have a budget that is anything less than 75 percent of your Encounter Strength (ES)."
    } else if (status == Difficulties.Easy){
      description = "Easy encounters have a budget between 75 and 90 percent of your Encounter Strength (ES)."

    } else if (status == Difficulties.Standard){
      description = "Standard encounters have a budget between 90 and 110 percent of your Encounter Strength (ES)."

    } else if (status == Difficulties.Hard){
      description = "Hard encounters have a budget between 110 and 125 percent of your Encounter Strength (ES)."

    } else if (status == Difficulties.Extreme){
      description = "Extreme encounters have a budget that is greater than 125 percent of your Encounter Strength (ES)."
    }
  };

</script>

<Header />

<div class="hero bg-base-200 min-h-screen">
  <div class="row">
    <h1>Step 1: Choose Encounter Difficulty </h1>
    <div class="row">
      <button class="btn btn-active" onclick={() => onEncounterDifficultyBtnClicked(Difficulties.Trivial)}>Trivial</button>
      <button class="btn btn-active btn-neutral" onclick={() => onEncounterDifficultyBtnClicked(Difficulties.Easy)}>Easy</button>
      <button class="btn btn-active btn-primary" onclick={() => onEncounterDifficultyBtnClicked(Difficulties.Standard)}>Standard</button>
      <button class="btn btn-active btn-secondary" onclick={() => onEncounterDifficultyBtnClicked(Difficulties.Hard)}>Hard</button>
      <button class="btn btn-active btn-accent" onclick={() => onEncounterDifficultyBtnClicked(Difficulties.Extreme)}>Extreme</button>
    </div>
    <div class="row">
      <p>{description}</p>
    </div>
    <br/>

    <h1>Step 2: Determining Encounter Difficulty </h1>
    <br/>
    <h1>Step 3: Determine Encounter Budget </h1>
    <br />
    <h1>Step 4: Spend the Budget</h1>
    <br />
    <h1>Step 5: Build Initiative Groups</h1>
  </div>
</div>

<Footer />