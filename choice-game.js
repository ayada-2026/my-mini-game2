const TOTAL_TURNS = 10;

const effectLabels = {
  patience: "인내 +1",
  assertiveness: "표현 +1",
  distance: "거리두기 +1"
};

const effectNames = {
  patience: "관찰",
  assertiveness: "표현",
  distance: "거리"
};

const effectOrder = ["patience", "assertiveness", "distance"];

function createChoice(text, effect, response) {
  return {
    text,
    effect,
    gainText: effectLabels[effect],
    response
  };
}

const scenarios = [
  {
    text: "친구가 약속 시간보다 10분 늦었다.",
    choices: [
      createChoice("그냥 주변을 보며 기다린다", "patience", "그냥 넘어간다. 조금 답답하지만 참는다."),
      createChoice("도착했는지 바로 연락해 본다", "assertiveness", "조심스럽게 말을 꺼낸다. 분위기가 살짝 움직인다."),
      createChoice("기분이 식기 전에 그냥 집으로 간다", "distance", "선을 긋고 빠져나온다. 마음은 가벼워지지만 거리가 생긴다.")
    ]
  },
  {
    text: "누군가 내 말을 자꾸 끊는다.",
    choices: [
      createChoice("흐름을 보고 다시 말할 타이밍을 잡는다", "patience", "잠깐 삼킨다. 속은 걸리지만 일단 흐름을 본다."),
      createChoice("내 말이 아직 안 끝났다고 말한다", "assertiveness", "분명하게 선을 그린다. 공기가 순간 또렷해진다."),
      createChoice("더 말하지 않고 한발 물러선다", "distance", "내 에너지를 아낀다. 대신 대화의 거리가 살짝 멀어진다.")
    ]
  },
  {
    text: "단톡방에서 내 메시지만 아무도 답하지 않았다.",
    choices: [
      createChoice("일단 더 기다려 본다", "patience", "묵묵히 기다린다. 답답함은 남지만 조용히 버틴다."),
      createChoice("한 번 더 정확히 물어본다", "assertiveness", "다시 신호를 보낸다. 흐름이 다시 나를 향한다."),
      createChoice("대화창을 닫고 신경을 끈다", "distance", "관심을 접는다. 서운함은 남아도 에너지는 지킨다.")
    ]
  },
  {
    text: "부탁을 받았는데 내 상황도 애매하다.",
    choices: [
      createChoice("조금 더 생각해 보고 답하겠다고 한다", "patience", "바로 결론내지 않는다. 시간을 벌며 마음을 정리한다."),
      createChoice("지금 가능한 범위만 솔직히 말한다", "assertiveness", "내 사정을 꺼낸다. 관계는 잠깐 멈추지만 기준은 선명해진다."),
      createChoice("이번엔 어렵다고 정중히 거절한다", "distance", "선을 명확히 긋는다. 미안함은 있지만 소모는 줄어든다.")
    ]
  },
  {
    text: "상대가 농담처럼 불편한 말을 한다.",
    choices: [
      createChoice("웃으며 넘기고 상황을 본다", "patience", "겉으론 넘기지만 마음 한쪽에 작은 걸림이 남는다."),
      createChoice("그 말은 좀 불편했다고 전한다", "assertiveness", "조심스럽게 멈춤을 건다. 분위기가 잠깐 진지해진다."),
      createChoice("반응을 줄이고 거리를 둔다", "distance", "마음을 닫는다. 안전해지지만 온기가 조금 사라진다.")
    ]
  },
  {
    text: "갑자기 약속 취소 통보를 받는다.",
    choices: [
      createChoice("이유를 묻지 않고 괜찮다고 한다", "patience", "아쉽지만 삼킨다. 실망을 조용히 안으로 접는다."),
      createChoice("미리 말해줬으면 좋겠다고 전한다", "assertiveness", "서운함을 말로 꺼낸다. 관계의 선이 조금 더 분명해진다."),
      createChoice("다음 약속은 한동안 먼저 잡지 않는다", "distance", "기대를 걷어낸다. 마음은 덜 다치지만 틈이 생긴다.")
    ]
  },
  {
    text: "누군가 내 물건을 허락 없이 잠깐 썼다.",
    choices: [
      createChoice("일단 이유를 듣고 넘긴다", "patience", "불편함을 눌러 둔다. 바로 문제로 만들지는 않는다."),
      createChoice("다음엔 꼭 먼저 말해 달라고 한다", "assertiveness", "원칙을 입 밖으로 꺼낸다. 관계가 조금 더 선명해진다."),
      createChoice("앞으로는 물건을 따로 챙겨 둔다", "distance", "거리를 둔 방식으로 대비한다. 편하지만 벽도 조금 생긴다.")
    ]
  },
  {
    text: "오랜만에 연락 온 사람이 부탁부터 꺼냈다.",
    choices: [
      createChoice("배경을 먼저 듣고 판단한다", "patience", "성급히 자르지 않는다. 상황을 더 보고 마음을 정한다."),
      createChoice("가능 여부를 바로 솔직히 말한다", "assertiveness", "내 기준을 먼저 세운다. 대화가 현실적으로 바뀐다."),
      createChoice("정중히 선을 긋고 거리를 둔다", "distance", "기대가 쌓이기 전에 선을 친다. 깔끔하지만 차갑게 느껴질 수 있다.")
    ]
  },
  {
    text: "약속 자리에서 누군가 계속 휴대폰만 본다.",
    choices: [
      createChoice("상황이 있겠거니 하고 넘긴다", "patience", "신경 쓰이지만 참는다. 내 감정은 뒤로 조금 밀린다."),
      createChoice("집중이 어렵다고 직접 말한다", "assertiveness", "불편함을 말로 꺼낸다. 자리의 온도가 바뀐다."),
      createChoice("대화를 줄이고 분위기에서 빠진다", "distance", "내 에너지를 회수한다. 조용하지만 분명한 후퇴다.")
    ]
  },
  {
    text: "상대는 괜찮다고 하는데 표정은 미묘하게 굳어 있다.",
    choices: [
      createChoice("조금 더 지켜본다", "patience", "서둘러 해석하지 않는다. 묘한 공기를 한 번 더 읽어 본다."),
      createChoice("혹시 불편한지 조심스럽게 묻는다", "assertiveness", "애매한 기류를 직접 건드린다. 대화가 조금 깊어진다."),
      createChoice("굳이 캐묻지 않고 거리를 둔다", "distance", "불편한 기류에서 한발 물러난다. 내 마음은 편하지만 접점도 줄어든다.")
    ]
  }
];

const pureProfiles = {
  patience: {
    title: "관찰형",
    description: "쉽게 반응하기보다 먼저 보고 읽는 편입니다. 급히 휘둘리지 않고 상황의 결을 파악한 뒤 움직입니다."
  },
  assertiveness: {
    title: "직면형",
    description: "애매한 긴장을 오래 두지 않고 직접 마주합니다. 필요한 말을 꺼내며 흐름을 바로잡으려는 힘이 강합니다."
  },
  distance: {
    title: "거리형",
    description: "불편함을 계속 안고 가기보다 적절한 거리에서 스스로를 지키는 편입니다. 에너지 관리와 경계 감각이 선명합니다."
  }
};

const mixedProfiles = {
  "patience-assertiveness": {
    title: "타이밍형",
    description: "먼저 상황을 충분히 보고, 말해야 할 순간이 오면 정확하게 꺼냅니다. 참고만 있지 않고 타이밍을 잡는 데 능합니다."
  },
  "assertiveness-distance": {
    title: "선긋기형",
    description: "필요한 말은 분명하게 하고, 그 다음엔 관계의 선을 정리합니다. 말과 거리 두기를 함께 쓰는 타입입니다."
  },
  "patience-distance": {
    title: "완충형",
    description: "웬만한 일은 먼저 지켜보지만, 소모가 커질 것 같으면 조용히 물러납니다. 부딪치기보다 완충하며 스스로를 보호합니다."
  }
};

const balancedProfile = {
  title: "혼합형",
  description: "한 방식으로만 반응하지 않고 상황에 따라 관찰, 표현, 거리 두기를 바꿔 씁니다. 맥락에 맞춰 움직이는 유동성이 큽니다."
};

const state = {
  deck: [],
  turn: 0,
  totalTurns: TOTAL_TURNS,
  isTransitioning: false,
  stats: {
    patience: 0,
    assertiveness: 0,
    distance: 0
  },
  recentEffects: []
};

const scenarioText = document.getElementById("scenarioText");
const choices = document.getElementById("choices");
const feedbackText = document.getElementById("feedbackText");
const insightText = document.getElementById("insightText");
const insightMeta = document.getElementById("insightMeta");
const turnText = document.getElementById("turnText");
const totalTurnsText = document.getElementById("totalTurnsText");
const turnBadge = document.getElementById("turnBadge");
const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultSummary = document.getElementById("resultSummary");
const restartButton = document.getElementById("restartButton");
const playAgainButton = document.getElementById("playAgainButton");

const statElements = {
  patience: {
    value: document.getElementById("patienceValue"),
    bar: document.getElementById("patienceBar")
  },
  assertiveness: {
    value: document.getElementById("assertivenessValue"),
    bar: document.getElementById("assertivenessBar")
  },
  distance: {
    value: document.getElementById("distanceValue"),
    bar: document.getElementById("distanceBar")
  }
};

function shuffle(array) {
  const copied = [...array];

  for (let index = copied.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[randomIndex]] = [copied[randomIndex], copied[index]];
  }

  return copied;
}

function updateMeters() {
  const maxValue = Math.max(
    state.stats.patience,
    state.stats.assertiveness,
    state.stats.distance,
    1
  );

  Object.entries(statElements).forEach(([key, element]) => {
    const value = state.stats[key];
    element.value.textContent = String(value);
    element.bar.style.width = `${(value / maxValue) * 100}%`;
  });
}

function updateProgressText() {
  const currentTurn = Math.min(state.turn + 1, state.totalTurns);
  turnText.textContent = `${currentTurn} / ${state.totalTurns}`;
  totalTurnsText.textContent = `${state.totalTurns}턴`;
  turnBadge.textContent = `TURN ${currentTurn}`;
}

function rankedEffects() {
  const recentWeights = {
    patience: 0,
    assertiveness: 0,
    distance: 0
  };

  state.recentEffects.forEach((effect, index) => {
    recentWeights[effect] += index + 1;
  });

  return [...effectOrder].sort((left, right) => {
    const statDiff = state.stats[right] - state.stats[left];
    if (statDiff !== 0) {
      return statDiff;
    }

    const recentDiff = recentWeights[right] - recentWeights[left];
    if (recentDiff !== 0) {
      return recentDiff;
    }

    return effectOrder.indexOf(left) - effectOrder.indexOf(right);
  });
}

function classifyProfile() {
  const ordered = rankedEffects();
  const [first, second, third] = ordered;
  const firstValue = state.stats[first];
  const secondValue = state.stats[second];
  const thirdValue = state.stats[third];

  if (firstValue === secondValue && secondValue === thirdValue) {
    return { mode: "balanced", first, second, profile: balancedProfile };
  }

  if (secondValue === 0 || firstValue - secondValue >= 2) {
    return { mode: "pure", first, second, profile: pureProfiles[first] };
  }

  return {
    mode: "mixed",
    first,
    second,
    profile: mixedProfiles[`${first}-${second}`] || balancedProfile
  };
}

function updateFlowSummary() {
  const total = Object.values(state.stats).reduce((sum, value) => sum + value, 0);

  if (total === 0) {
    feedbackText.textContent = "아직 뚜렷한 결은 없습니다.";
    return;
  }

  const current = classifyProfile();

  if (current.mode === "pure") {
    feedbackText.textContent = `지금은 ${current.profile.title} 쪽으로 기울고 있습니다.`;
    return;
  }

  if (current.mode === "mixed") {
    feedbackText.textContent = `지금은 ${current.profile.title} 결이 쌓이는 중입니다.`;
    return;
  }

  feedbackText.textContent = "아직 한 방향으로는 정리되지 않았습니다.";
}

function renderChoices(scenario) {
  choices.innerHTML = "";

  scenario.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `
      <strong>${index + 1}) ${choice.text}</strong>
      <span class="choice-meta">${choice.gainText}</span>
    `;
    button.addEventListener("click", () => applyChoice(button, choice));
    choices.appendChild(button);
  });
}

function renderTurn() {
  updateProgressText();
  const scenario = state.deck[state.turn];
  scenarioText.textContent = scenario.text;
  renderChoices(scenario);
}

function finishGame() {
  const { first, second, profile } = classifyProfile();
  const summaryText = [
    `인내 ${state.stats.patience}`,
    `표현 ${state.stats.assertiveness}`,
    `거리두기 ${state.stats.distance}`
  ].join(" / ");

  resultTitle.textContent = `당신은 "${profile.title}"`;
  resultDescription.textContent = profile.description;
  resultSummary.textContent = `이번 판의 최종 흐름은 ${effectNames[first]} -> ${effectNames[second]}입니다. 누적 수치: ${summaryText}`;
  resultCard.classList.remove("hidden");
  feedbackText.textContent = `${profile.title}으로 정리됐습니다.`;
  insightText.textContent = `${profile.title} 결과가 완성됐습니다.`;
  insightMeta.textContent = summaryText;
  turnBadge.textContent = "RESULT";
  turnText.textContent = `${state.totalTurns} / ${state.totalTurns}`;
  choices.innerHTML = "";
}

function applyChoice(button, choice) {
  if (state.isTransitioning) {
    return;
  }

  state.isTransitioning = true;
  button.classList.add("is-picked");
  document.querySelectorAll(".choice-button").forEach((choiceButton) => {
    choiceButton.disabled = true;
  });

  state.stats[choice.effect] += 1;
  state.recentEffects.push(choice.effect);

  updateMeters();
  updateFlowSummary();
  insightText.textContent = choice.response;
  insightMeta.textContent = `${choice.gainText} · ${effectNames[choice.effect]} 쪽으로 조금 더 기울었습니다.`;

  window.setTimeout(() => {
    state.turn += 1;
    state.isTransitioning = false;

    if (state.turn >= state.totalTurns) {
      finishGame();
      return;
    }

    renderTurn();
  }, 950);
}

function resetGame() {
  state.turn = 0;
  state.totalTurns = TOTAL_TURNS;
  state.isTransitioning = false;
  state.stats = {
    patience: 0,
    assertiveness: 0,
    distance: 0
  };
  state.recentEffects = [];
  state.deck = shuffle(scenarios).slice(0, TOTAL_TURNS);

  resultCard.classList.add("hidden");
  feedbackText.textContent = "아직 뚜렷한 결은 없습니다.";
  insightText.textContent = "선택하면 이 자리에 그 반응의 한 문장이 남습니다.";
  insightMeta.textContent = "아직 추가된 변화 없음";
  updateMeters();
  renderTurn();
}

restartButton.addEventListener("click", resetGame);
playAgainButton.addEventListener("click", resetGame);

resetGame();
