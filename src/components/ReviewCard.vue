<template>
  <div class="review-card">
    <div class="review-left">
      <div class="review-general-rating"><b>3.0</b></div>
      <div class="review-section">2020Fall</div>
    </div>
    <div class="review-right">
      <div class="review-ratings">
        <div class="rating-A">Workload: 5</div>
        <div class="rating-B">Difficulty: 5</div>
        <div class="rating-C">Teaching: 5</div>
        <div class="rating-D">Grading: 5</div>
        <div class="rating-E">Helpful: 5</div>
      </div>
      <div class="review-content">
        Okay. Generally good. Elaborate on somethign something something. And I
        think that balblbalbalbalbalbalab. Further elaborate a lot ...
      </div>
      <div class="review-meta">
        <div class="review-date"><small> 2018/07/15</small></div>
        <Chip class="chip-button">👍 0</Chip>
        <Chip class="chip-button">👎 0</Chip>
        <Chip class="chip-button">🚨 Report</Chip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  margin: 1.5rem 0;
  /* padding: 1rem; */
  border-radius: 0.5rem;
  border: solid 1px #e7e7e7;
  box-shadow: 0rem 0.2rem 1rem 0.01rem #f1f1f1;
  display: flex;
  flex-direction: row;
}

.review-left {
  width: 20%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #d8d8d8;
}

.review-right {
  padding: 1rem 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.review-right > div {
  margin: 0.5rem 0;
}

.review-ratings {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.review-content {
  padding: 1rem;
  border-top: solid 1px #d8d8d8;
}

.review-meta {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.review-general-rating {
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  padding: 0.93rem;
  background-color: var(--cyan-300);
  margin-bottom: 0.5rem;
  font-size: 2rem;
}
.review-date {
  margin-left: 1rem;
  margin-right: auto;
}
</style>