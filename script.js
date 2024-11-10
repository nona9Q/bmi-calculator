function calculateBMI() {
    // 身長、体重、年齢、性別を取得
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
  
    // 入力値が正しいか確認
    if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
      alert("身長、体重、年齢を正しく入力してください。");
      return;
    }
  
    // BMI計算
    const heightInMeters = height / 100; // cmをmに変換
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(2);
  
    // 体脂肪率の計算（推定式）
    let bodyFatPercentage = 0;
    if (gender === "male") {
      bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
      bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 5.4;
    }
    const roundedBodyFat = bodyFatPercentage.toFixed(2);
  
    // BMIの評価コメント
    let comment = "";
    let obesityDegree = ""; // 肥満度
    let bmiClass = ""; // 結果の色クラス
    if (bmi < 18.5) {
      comment = "低体重です。適正体重を目指して健康的な生活を心がけましょう。";
      bmiClass = "low-weight"; // 低体重
    } else if (bmi < 25) {
      comment = "普通体重です。健康を維持するため、この状態を保ちましょう。";
      bmiClass = "normal-weight"; // 普通体重
    } else if (bmi < 30) {
      comment = "肥満（1度）です。体重を減らすための努力が必要です。";
      obesityDegree = "肥満度：1度";
      bmiClass = "overweight"; // 肥満1度
    } else if (bmi < 35) {
      comment = "肥満（2度）です。食事や運動で改善を目指しましょう。";
      obesityDegree = "肥満度：2度";
      bmiClass = "obese-2"; // 肥満2度
    } else {
      comment = "肥満（3度）です。医師の相談を受けることをおすすめします。";
      obesityDegree = "肥満度：3度";
      bmiClass = "obese-3"; // 肥満3度
    }
  
    // 標準体重とその差を計算
    const standardWeight = (heightInMeters * heightInMeters) * 22;
    const weightDifference = weight - standardWeight;
    const roundedWeightDifference = weightDifference.toFixed(2);
  
    // 結果を表示
    document.getElementById("bmi-result").innerText = `あなたのBMI: ${roundedBmi}`;
    document.getElementById("bmi-comment").innerText = comment;
    document.getElementById("obesity-degree").innerText = obesityDegree;
    document.getElementById("bmi-result").className = bmiClass; // 結果に色を適用
    document.getElementById("standard-weight").innerText = `標準体重: ${standardWeight.toFixed(2)}kg`;
    document.getElementById("weight-difference").innerText = `標準体重との差: ${roundedWeightDifference}kg`;
    document.getElementById("body-fat-result").innerText = `推定体脂肪率: ${roundedBodyFat}%`;  // 体脂肪率を表示
  }