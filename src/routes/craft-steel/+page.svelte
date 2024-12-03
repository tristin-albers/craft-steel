<script lang="ts">
  import Header from "../../components/Header.svelte";
  import Footer from "../../components/Footer.svelte";
  import { onMount } from 'svelte';
  import { monsters } from '../../data/monsters';
  import { writable } from 'svelte/store';

  type Operation = 'increment' | 'decrement';
  
  const monsterStore = writable(monsters);
  let description = $state("");
  let playerCount = $state(1);
  let playerLevels = $state(1);
  let victories = $state(0);
  let encounterStrength = $state(0);
  let encounterBudget = $state(0.0);
  let difficulty = $state("");
  let difficultyClass = $state("");

  onMount(() => {
    determineEncounterStrength();
  });

  // Primary information functionality
  function levelCheck(){
    if (playerLevels < 1){
      playerLevels = 1
    }

    if (playerLevels > 10) {
      playerLevels = 10
    }

    determineEncounterStrength();
  }

  function determineEncounterStrength(){
    let baseline = 12;
    let leveledStrength = playerLevels * 3;
    let fakePlayerCount = Math.floor(victories / 3);
    let playerStrength = playerCount + fakePlayerCount;
    
    encounterStrength = (baseline + leveledStrength) * playerStrength;
  }

  // Table information functionality
  function updateQuantity(id: number, operation: Operation, encounterValue: number) {
    monsterStore.update((monsterList) => {
      return monsterList.map((monster) => {
        if (monster.id === id) {
          if (operation === 'increment') {
            monster.quantity++;
            encounterBudget += encounterValue;
          } else if (operation === 'decrement' && monster.quantity > 0) {
            monster.quantity--;
            encounterBudget -= encounterValue;
          }

          if(encounterBudget < 0){
            encounterBudget = 0;
          }

          calculateDescriptionOfSpentBudget();
        }
        return monster;
      });
    });
  }

  function calculateDescriptionOfSpentBudget(){
    const trivialThreshold = encounterStrength * 0.75;
    const easyThreshold = encounterStrength * 0.90;
    const standardLower = encounterStrength * 0.90;
    const standardUpper = encounterStrength * 1.10;
    const hardThreshold = encounterStrength * 1.25;

    if (encounterBudget < trivialThreshold) {
      difficulty = "Trivial"
      description = " encounters have a budget that is anything less than 75 percent of your Encounter Strength (ES).";
      difficultyClass = "text-green-500";
    } else if (encounterBudget >= trivialThreshold && encounterBudget < easyThreshold) {
      difficulty = "Easy"
      description = " encounters have a budget between 75 and 90 percent of your Encounter Strength (ES).";
      difficultyClass = "text-yellow-500";
    } else if (encounterBudget >= standardLower && encounterBudget <= standardUpper) {
      difficulty = "Standard"
      description = " encounters have a budget between 90 and 110 percent of your Encounter Strength (ES).";
      difficultyClass = "text-blue-500";
    } else if (encounterBudget > standardUpper && encounterBudget <= hardThreshold) {
      difficulty = "Hard";
      description = " encounters have a budget between 110 and 125 percent of your Encounter Strength (ES).";
      difficultyClass = "text-red-500";
    } else if (encounterBudget > hardThreshold) {
      difficulty = "Extreme";
      description = " encounters have a budget that is greater than 125 percent of your Encounter Strength (ES).";
      difficultyClass = "text-purple-500";
    }
  };

</script>

<Header />

<div class="min-h-screen px-12">
  <div class="flex justify-between">
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Players</span>
      </div>
      <input type="number" placeholder="Player Count" bind:value={playerCount} onchange={determineEncounterStrength} class="input input-bordered w-full max-w-xs" />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Level</span>
      </div>
      <input type="number" placeholder="Level of Party" bind:value={playerLevels} onchange={levelCheck} class="input input-bordered w-full max-w-xs" />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Victories</span>
      </div>
      <input type="number" placeholder="Victories" bind:value={victories} onchange={determineEncounterStrength} class="input input-bordered w-full max-w-xs" />
    </label>
  </div>

  <div class="mt-5">
    <h3 class="text-2xl text-center">Current Encounter Strength <b>(ES)</b> is {encounterStrength}</h3>
  </div>

  <div class="flex justify-between items-center mt-5">
    <span class="text-lg">{`Current Budget Spent ${encounterBudget} of ${encounterStrength}`}</span>
    <p class="text-right">
      Difficulty:
      <span class={`bold ${difficultyClass}`}>{difficulty}</span>
      {description}
    </p>
  </div>

  <div class="overflow-x-auto mt-5">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Keywords</th>
          <th>Level</th>
          <th>Encounter Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each $monsterStore as monster}
        <tr>
            <td>
              <div class="flex items-center gap-3">              
                <div>
                  <div class="font-bold">{monster.name}</div>
                  <div class="text-sm opacity-50">{monster.role}</div>
                </div>
              </div>
            </td>
            <td>
              {#each monster.keywords as keyword}
                <span class="badge badge-outline mx-2">{keyword}</span>
              {/each}
            </td>
            <td>{monster.level}</td>
            <td>{monster.encounterValue}</td>
            <td class="text-right">
              <div class="join ml-auto">
                <button class="btn join-item" onclick={() => updateQuantity(monster.id, 'decrement', monster.encounterValue)}>
                  -
                </button>
                <input type="number" placeholder="0" value={monster.quantity} class="input input-bordered w-full max-w-xs join-item" />
                <button class="btn join-item" onclick={() => updateQuantity(monster.id, 'increment', monster.encounterValue)}>
                  +
                </button>
            </td>
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Keywords</th>
          <th>Level</th>
          <th>Encounter Value</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

<Footer />