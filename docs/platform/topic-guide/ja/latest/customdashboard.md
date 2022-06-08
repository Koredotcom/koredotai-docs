---
title: カスタムダッシュボード

permalink: platform/topic-guide/ja/latest/Custom Dashboards

---

#### Topic Guide
###### カスタムダッシュボード

 Check out our explanatory videos, FAQs, Kore Academy courses and documentation links on Custom Dashboards.

<details open>
  <summary>FAQs
  </summary>
 <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/#Analytics?lang=ja">

  <details class="nested-details">
 
  <summary>分析データセットの使用方法
  </summary>

 
   ボットと関連した「成功インテント」、「失敗インテント」、「成功タスク」、「失敗タスク」のリストが表示されます。「メトリクスタイプ」、「チャネル」、「ユーザーID」などのキーフィールドや、メトリクスレコードに対して追加されたすべてのカスタムフィールドを確認することもできます。

   ###### 分析データセットフィールド：

   - metricType
   - taskName
   - userInput
   - isDeveloper
   - failureDetails
   - language
   - channel
   - sessionId
   - trainingStatus
   - pinStatus
   - matchType
   - userId
   - taskType

  </details>
 </a>


  <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/#Messages?lang=ja">
 
  <details class="nested-details">
 
  <summary>メッセージフィールドの使用方法
  </summary>

 
   ボットメッセージとユーザーメッセージを設定します。キーフィールドのユーザーID、チャネルなどを表示するか、あるいはメッセージに対して追加された任意のカスタムフィールドを表示するかを選択できます。

   ###### メッセージデータセットフィールド：

   - messageType
   - isDeveloper
   - messageId
   - userId
   - language
   - channel
   - sessionId

  </details>
 </a>


<a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/#Sessions?lang=ja">
 
  <details class="nested-details">
 
  <summary>セッションフィールドの使用方法
  </summary>

 
  ボットと関連した会話セッションのリストが表示されます。「ユーザーID」、「チャネル」などのキーフィールドや、セッションに対して追加されたすべてのカスタムフィールドを確認することもできます。

   ###### セッションデータセットフィールド：


   - userId
   - channel
   - language
   - date

  </details>
 </a>

 <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/?lang=ja">
 
  <details class="nested-details">
 
  <summary>フィルタ機能の使用方法
  </summary>

 
   対応するデータセットに関連付けられたフィールドのいずれかをもとに、データセットをフィルタリングすることができます。例：MetricType = 'SuccessTasks'を使用して、正常に実行されたタスクの詳細のみを表示します。Facebookチャネルでの会話のみを表示するにはChannel = 'Facebook'を使用します。
  </details>
 </a>


  <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/?lang=ja">
 
  <details class="nested-details">
 
  <summary>グループ機能の使用方法
  </summary>

 
データセットの要約情報を得るためにデータを集計することができます。集計は、各データセット内の選択されたフィールドに対してのみ許可されています。分析（フィールド1、フィールド2、フィールド3...）メッセージ（フィールド1、フィールド2）セッション（フィールド1、フィールド2、フィールド3）。

  </details>
 </a>


  <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/?lang=ja">
 
  <details class="nested-details">
 
  <summary>ソート機能の使用方法
  </summary>

 
   必要なフィールドおよびソート順を指定することで、データレコードをソートすることができます。

  </details>
 </a>

 <a class="doc-link" target="_blank" href="https://developer.kore.ai/docs/bots/how-tos/how-to-create-custom-dashboard/?lang=ja">
 

   ウィジェットの設計および管理方法

</a>
  

 </details>

  <a class="doc-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/?lang=ja">
 

| Frontmatter | Required? |
|-------------|-------------|
| ![alt text](images/docIcon.svg "Title") | **Documentation**  <br /> Check out our indepth documentation articles on Custom dashboards | 


</a>
