---
title: Custom Dashboards

permalink: itassist/topic-guide/en/latest/Custom Dashboards

---

#### Topic Guide
###### Custom Dashboards

 Check out our explanatory FAQs and documentation links on Custom Dashboards.

<details open>
  <summary>FAQs
  </summary>
 <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/#Analytics">

  <details class="nested-details">
 
  <summary>How to use Analytics Dataset?
  </summary>

 
   Provides a listing of Success Intents, Failed Intents, Success Tasks and Failed Tasks associated with your bot. You can choose to view key fields like MetricType, Channel, UserId, etc. or any custom fields added against the metrics records.

   ###### Analytics Dataset Fields

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


  <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/#Messages">
 
  <details class="nested-details">
 
  <summary>How to use Message Fields?
  </summary>

 
   Provides bot and user messages of your bot. You can choose to view key fields UserId, Channel, etc. or any custom fields added against the messages..

   ###### Message Dataset Fields:

   - messageType
   - isDeveloper
   - messageId
   - userId
   - language
   - channel
   - sessionId

  </details>
 </a>


<a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/#Sessions">
 
  <details class="nested-details">
 
  <summary>How to use Session Fields?
  </summary>

 
   Provides a listing of conversation sessions associated with your bot. You can choose to view key fields like UserId, Channel, etc. or any custom fields added against the sessions.

   ###### Sessions Dataset Fields


   - userId
   - channel
   - language
   - date

  </details>
 </a>

 <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/">
 
  <details class="nested-details">
 
  <summary>How to use Filter by?
  </summary>

 
   You can filter datasets by using any of the fields associated with the corresponding dataset. Examples: Use MetricType = 'SuccessTasks' for viewing only the details of tasks that are successfully executed. Use Channel = 'Facebook' for viewing only the conversations happened via Facebook channel

  </details>
 </a>


  <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/">
 
  <details class="nested-details">
 
  <summary>How to use Group by?
  </summary>

 
You can aggregate the data to get summary information of a dataset. Aggregation is allowed only on select fields in each of the datasets. Analytics (field 1, field 2, field 3..) Messages (field 1, field 2) Sessions (field 1, field 2, field 3).

  </details>
 </a>


  <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/">
 
  <details class="nested-details">
 
  <summary>How to use Sort by?
  </summary>

 
   You can sort the data records by providing the required field and the sort order.

  </details>
 </a>

 <a class="doc-link" target="_blank" href="https://developer.kore.ai/docs/bots/how-tos/how-to-create-custom-dashboard/">
 

   How to design and manage widgets?

</a>
  

 </details>

  <a class="doc-link" target="_blank" href="https://developer.kore.ai/docs/bots/analyzing-your-bot/custom-dashboard/">
 

| Frontmatter | Required? |
|-------------|-------------|
| ![alt text](images/docIcon.svg "Title") | **Documentation**  <br /> Check out our indepth documentation articles on Custom dashboards | 


</a>
