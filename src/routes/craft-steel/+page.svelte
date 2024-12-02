<script lang="ts">
import Header from "../../lib/components/Header.svelte";
import Footer from "../../lib/components/Footer.svelte";
import { onMount } from 'svelte';
import { Difficulties, type Difficulty } from '../../lib/types/Difficulty';
  
  let encounterDifficulty: Difficulty = Difficulties.Trivial;
  let description = $state("");
  let showStep2 = $state(false);
  let showStep3 = $state(false);
  let showStep4 = $state(false);
  let showStep5 = $state(false);
  let playerCount = $state(1);
  let playerLevels = $state(1);
  let victories = $state(0);
  let encounterStrength = $state(0);

  onMount(() => {
    determineEncounterStrength();
  });

  function onEncounterDifficultyBtnClicked(status : Difficulty){
    encounterDifficulty = status;
    showStep2 = true;

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

  function determineEncounterStrength(){
    
    let baseline = 12;
    let leveledStrength = playerLevels * 3;
    let fakePlayerCount = Math.floor(victories / 3);
    let playerStrength = playerCount + fakePlayerCount;
    
    encounterStrength = (baseline + leveledStrength) * playerStrength;
  }

</script>

<Header />

<div class="bg-base-200 min-h-screen">
  <div class="row">
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Players</span>
      </div>
      <input type="number" placeholder="Player Count" bind:value={playerCount} onchange={determineEncounterStrength} class="input input-bordered w-full max-w-xs" />
    </label>
  </div>
  <div class="row">
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Level</span>
      </div>
      <input type="number" placeholder="Level of Party" bind:value={playerLevels} onchange={determineEncounterStrength} class="input input-bordered w-full max-w-xs" />
    </label>
  </div>
  <div class="row">
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Victories</span>
      </div>
      <input type="number" placeholder="Victories" bind:value={victories} onchange={determineEncounterStrength} class="input input-bordered w-full max-w-xs" />
    </label>
  </div>
  {#if (playerCount > 0)}
    <p>Current Encounter Strength <b>(ES)</b> is {encounterStrength}</p>
  {/if}
</div>



<!-- 
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
    <br/> -->
   
<!-- 
    {#if showStep3}
      <h1>Step 3: Determine Encounter Budget </h1>
      <br />
    {/if}
      
    {#if showStep4}
      <h1>Step 4: Spend the Budget</h1>
      <br />
    {/if}

    {#if showStep5}
      <h1>Step 5: Build Initiative Groups</h1>
    {/if} -->

<Footer />