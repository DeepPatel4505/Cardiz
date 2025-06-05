// utils/resetGame.js
export const resetJudgementGame = () => {
  localStorage.removeItem("judgementState");
  window.location.href = "/judgement/setup";
};