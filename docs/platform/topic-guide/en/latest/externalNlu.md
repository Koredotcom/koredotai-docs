---
title: External NLU

permalink: platform/topic-guide/en/latest/External NLU

---
#### Topic Guide
###### External NLU

  Check out our explanatory videos, FAQs, Kore Academy courses and documentation links on External NLU Adapters.

<details open>
  <summary>FAQs
  </summary>
  
 <a class="nested-accordian-link open" target="_blank" href="https://developer.kore.ai/integrations/external-nlu-adapters">
  <details class="nested-details">
    <summary>What is an External NLU Adapter?
    </summary>
    
External NLU Adapter enables XO Platform to communicate with external NLU engine. You just need to provide the configuration details required for establishing an authorized connection between the two systems.
   
   </details>
 </a>
  
 <a class="nested-accordian-link" target="_blank" href="https://developer.kore.ai/integrations/external-nlu-adapters">
  <details class="nested-details">
    <summary>Where to find the details for Adapter configurations?
    </summary>
    
Adapter configurations are different for different external engines. Guidance to obtain them are generally available in the documentation of external engines. We have documented steps for your quick reference as guidance. However, the steps may change depending on the updates in external platform.
    
   </details>
 </a>
  
 <a class="nested-accordian-link open" target="_blank" href="https://developer.kore.ai/integrations/external-nlu-adapters">
  <details class="nested-details">
    <summary>How to map the intent from the external engine with a task on the XO platform?
    </summary>

The Intent mapping works based on a case insensitive comparison of Intent names defined on the two platforms.

   </details>
 </a>
  
  <a class="nested-accordian-link open" target="_blank" href="https://developer.kore.ai/integrations/external-nlu-adapters">
  <details class="nested-details">
    <summary>What happens when the intent is not detected by the external engine?
    </summary>

If the intent is not detected by the external engine, the Kore.ai NLU engine acts as a fallback to attempt intent detection.

   </details>
 </a>
  
   <a class="nested-accordian-link open" target="_blank" href="https://developer.kore.ai/integrations/external-nlu-adapters">
  <details class="nested-details">
    <summary>Can I use different NLU engines for different Virtual Assistant?
    </summary>

Yes. For different Virtual Assistants, you can use different NLU engines, including Kore.ai proprietary NLU. For using Kore.ai proprietary NLU for a particular VA, no external NLU adapter should be enabled for that VA.

   </details>
 </a>
  
   <a class="nested-accordian-link open" target="_blank" href="https://developer.kore.ai/integrations/external-nlu-adapters/#Test_and_Debug">
  <details class="nested-details">
    <summary>How to check the API response from the external engine?
    </summary>

From the NLP Analysis window, you can click View Response link to check the complete API response received from the external engine.  This works from all the workflows that provide the NLP analysis. For example - Talk to Bot, Utterance Testing, Batch Testing, Health and  Monitoring, and NLP Insights.

   </details>
 </a>

</details>  

<a class="doc-link" target="_blank" href="https://developer.kore.ai/docs/bots/integration/external-nlu-adapters/">


| Frontmatter | Required? |
|-------------|-------------|
| ![alt text](images/docIcon.svg "Title") | **Documentation**  <br /> Check out our indepth documentation articles on External NLU Adapters | 


</a>

