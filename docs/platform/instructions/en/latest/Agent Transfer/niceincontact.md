---
title: Drift

permalink: platform/instructions/en/latest/Agent Transfer/niceincontact

---
Kore.ai XO Platform now supports integration with the NICE inContact Agent System to handover the conversations without having to use the BotKit.

<base target="_blank">
<container>

**Step 1: Retrieving an API token**

1. In order to retrieve an API token, you must register your application. 
  
2. You can do this on the NICE inContact Central website, under the ACD →  ACD Configuration →  API Applications menu.

3. When registering your application, you must specify a Vendor Name and an Application Name. 
  
4. Select Vendor Name ‘Kore’ and a relevant Application Name like ‘Kore.ai XO Integration’.
  
5. Under API scope, select Patron API and click on Create API application to save progress.

</container>

<container>
 
**Step 2: Set up Chat within Nice InContact**
  
1. Check out https://help.nice-incontact.com/content/acd/channels/chat/setupchat.htm for detailed instructions.
 
  
</container>

<container>
 
**Step 3: Enter details in Kore.ai XO**
  
1. Navigate to Kore.ai XO Platform and onto Build → Integrations → Agent Transfer → Nice inContact → Configurations
  
2. Application Name: Enter the name of the application registered in step 1.
  
3. Vendor Name: Enter the name of the vendor registered in step 1.

4. Application Secret: Enter the application secret for your registered application. You can find this by clicking on the Application Name under ACD → ACD Configuration → API Applications

5. Point of Contact: Enter the Point of Contact added in Step 2.

</container>

