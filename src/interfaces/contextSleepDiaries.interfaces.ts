export interface IInterferenceAndTechniques {
  sleepInterference: {
    nicotine: number
    nap: number
    exercise: number
    caffeine: number
    partner: number
    pain: number
    medicine: number
    noise: number
    bathroom: number
    meal: number
    temperature: number
    alcohol: number
    light: number
    dream: number
  }
  moreAppliedTechniques: {
    autogenic_training: number
    behavior_activation: number
    challenge_catastrophic_thinking: number
    deep_breath: number
    gratitude: number
    imagery: number
    light_therapy: number
    meditation: number
    paradoxical_intention: number
    parking_lot: number
    pmr: number
    stimulus_control: number
    thought_block: number
  }
}

export interface IContextSleepDiaries {
  sleepDiariesStates: { interferenceAndTechniques: IInterferenceAndTechniques }
  sleepDiariesFunctions: { getInterferenceAndTechniques: () => Promise<void> }
}
