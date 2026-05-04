---
title: Salesforce

permalink: platform/instructions/ja/latest/Agent Transfer/salesforce

---
Kore.ai XO Platform now supports integration with Salesforce Agent System to handover the conversations without having to use the BotKit.

<container>

**Step 1: Setup Live Agent**

1. Log in to your Salesforce account.
 
2. From the main menu on the top, navigate to Setup > Customize > Live Agent > Settings. 
 
   Make sure you switch to Classic view, the Live Agent settings do not come up under the Lightning Experience view. Click (https://help.salesforce.com/s/articleView?language=en_US&id=live_agent_intro.htm) for detailed instructions on setting up Live Agent.
 
3. Find the Live Agent section under ‘Build > Customize > Chat > Chat Agent Configurations’.
 
4. To add a new Live Agent configuration, click on the "New" button.
 
5. In the "New Live Agent Configuration" form, you can enter the details for the new configuration, such as the name and description.

6. Once you have entered the required details, click on the "Save" button to save the new Live Agent configuration.

</container>

<container>

**Step 2: Getting the Live Agent URL/API Endpoint**

1. Log in to your Salesforce account.
 
2. From the main menu on the top, navigate to Setup > Customize > Live Agent > Deployments.
 
3. In the Live Agent Deployments page, you will see a list of all the Live Agent deployments that have been configured.
 
4. To get the Live Agent URL/API endpoint, click on the name of the Live Agent deployment that you want to use.
 
5. In the Live Agent Deployment form, you will find the Live Agent URL/API endpoint in the "Live Agent URL" field.

</container>

<container>
 
**Step 3: Retrieving the Organization ID**
 
1. Log in to your Salesforce account.
 
2. From the main menu on the top, navigate to Setup > Company Settings > Company Information.
 
3. In the Company Information page, you will see a list of details about your organization.
 
4. To retrieve the Organization ID, look for the "Organization ID" field. The Organization ID is a unique identifier for your Salesforce organization.

</container>

<container>
 
**Step 4: Retrieving the Deployment ID**
 
1. Log in to your Salesforce account.
 
2. From the main menu on the top, navigate to Setup > Customize > Live Agent > Deployments.
 
3. In the Live Agent Deployments page, you will see a list of all the Live Agent deployments that have been configured.
 
4. To retrieve the Deployment ID, click on the name of the Live Agent deployment that you want to use.
 
5. In the Live Agent Deployment form, you will find the Deployment ID in the "Deployment ID" field.


</container>

<container>
 
**Step 5: Retrieving the Button ID**
 
1. Go to the ‘Live Agent > Chat Buttons & Invitations’ page, click on the button which you would like to use for this integration. The Button ID is the string of     characters after the last / in the URL. 
 For example: https://meya-dev-ed.my.salesforce.com/5731I000000PL9G

2. Enable Salesforce by clicking on the ‘Save’ button on Kore.ai XO Platform.

</container>


