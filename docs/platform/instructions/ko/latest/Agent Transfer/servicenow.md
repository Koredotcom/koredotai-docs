---
title: ServiceNow

permalink: platform/instructions/ko/latest/Agent Transfer/servicenow

---
Kore.ai XO Platform now supports integration with ServiceNow Agent System to handover the conversations without having to use the BotKit. 

<container>

**Step 1 : Retrieve Host URL, User name & Password**

1. Log in to your ServiceNow account.
   
2. From the main menu on the left, navigate to System Web Services > Outbound > REST Messages.
   
3. In the REST Messages page, you will see a list of all the REST Messages that have been configured.
   
4. To retrieve the Host URL, click on the name of the REST Message that you want to use.
   
5. In the REST Message form, you will find the Host URL in the "Endpoint" field.
   
6. Provide your user name under User Name field in the Configurations tab.
   
7. Provide your password under Password field in the Configurations tab.

</container>

<container>

**Step 2 : Define Outbound REST Message Requests in ServiceNow**

1. Log in to your ServiceNow account.
   
2. From the main menu on the left, navigate to System Web Services > Outbound > REST Messages.
   
3. In the REST Messages page, you will see a list of all the REST Messages that have been configured.   
   
4. To add a new REST Message, click on the "New" button.
   
5. In the "New REST Message" form, you can enter the API details, such as the name, endpoint URL as Callback URL from the configurations page, and HTTP method.   
  
   This will be the endpoint through which ServiceNow will send Agent’s messages to the user.

6. Click on ‘HTTP Request’ tab and add the ‘HTTP Header’ as below:

   Name : Content-Type, Value : application/json, Method : POST

5. Once you have entered the required details, click on the "Submit" button to save the REST Message.

</container>

<container>
 
**Step 3 : Define Outbound REST Business Rules in ServiceNow**
 
1. Select the ‘Business Rules’ under ‘System Definition’ from the left menu.
   
2. Click on ‘New button’ to configure the ‘Business Rule’.
   
3. Enter Name and ‘Select the live_message table’ from Table drop down.
   
4. Select Active and Advanced check boxes.
   
5. Click on When to run tab and select after from When drop down and select Insert checkbox.
   
6. Add Filter conditions to execute this Business rule if created by is not a chatbot_interface.
   
7. Click on the Advanced tab, add the code below and click on ‘Submit’. It executes the API configured in REST Message.

</container>

<container>
 
**Step 4: Create a New Queue**
 
1. Log in to your ServiceNow account.
   
2. From the main menu on the left, navigate to Queues > All Queues.
   
3. In the All Queues page, you will see a list of all the queues that have been configured.
   
4. Copy Queue ID in the Queue ID field
   
5. Enable ServiceNow by clicking on the ‘Save’ button on Kore.ai XO Platform.

</container>

