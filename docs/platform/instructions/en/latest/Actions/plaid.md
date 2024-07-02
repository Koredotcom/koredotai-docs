---
title: Plaid

permalink: platform/instructions/en/latest/Actions/plaid

---

<base target="_blank">
<container>

**Overview**

Connect your Plaid instance with the Kore.ai XO Platform to automate Plaid tasks within your dialog flow. Automate the retrieval of financial actions within user conversations. 

The Kore.ai XO platform allows you to connect with Plaid quickly and seamlessly using OAuth2 and plaid's quickstart App.


</container>

<container>

**Authorization**
 
To connect to an Plaid account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       No       |       Yes      |
 |Allow Users to Authorize the Integration|       No       |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai for authorization.
 
1. Select Custom.

2. Click Select Authorization.
    
3. Select Create New.
    
4. Select the type of authorization mechanism.

i. Select oAuth v2.
  	
ii. Name the Authorization profile under the label “Identity Provider Name” and navigate to https://dashboard.plaid.com/overview and log in.
	
iii. On the left menu, go to “developers” and “keys” and copy the ClientId from the page and paste it into the ClientId field to the Kore.ai platform.

iv. Similarly, Copy the Client secret according to the environment [Sandbox,Development,Production] and paste it into the Client Secret field to the Kore.ai platform.

v. On the left menu, navigate to “API” under the same “Developers” list and click “Configure” beside the “Allowed redirect URI’s” label.

vi. Copy the callback URL from the authorization page and click “add new URI” and paste it into the text field on the Plaid platform and save the changes.

vii. Then on the left menu, go to “Docs” and then proceed to “Quickstart” or click https://plaid.com/docs/quickstart/#introduction. Follow the detailed Youtube video to set up the quickstart app on your local machine.

viii. Go to the repository - “https://github.com/NikithaPa-Kore/Plaid_Guide_Code” and replace the ‘/quickstart/frontend/src/Components/Link/index.tsx’ file’s content with the one from the repo. Also check if the Callback URL on line 44 in the file is set to the one from the Auth Profile.

ix. Go to the repository again and replace the ‘/quickstart/node/index.js’ file’s content with the one from the repo.

x. Make sure to set your .env file with the appropriate clientId, Secret, env, products, country codes, and app port. 

NOTE: The following must be set - 

| PLAID_PRODUCTS | auth,transactions,identity,investments,liabilities |
|----------------|----------------------------------------------------|
|PLAID_REDIRECT_URI | The Callback URL from the AUTH profile          |

5. The Authorization URL in the auth profile must be set to the frontend host URL of the quickstart app.

6. Then in the “Subdomain (aka Tenanancy URL) ” field, select YES and enter the base URL as “https://{tenant}.plaid.com”.

7. The “Token request URL” and the “Refresh Token URL” must be set to the backend host URL of the quickstart app with the following endpoint - /api/send_the_access_token_AUTH.

      EX: https://example.com/api/send_the_access_token_AUTH

8. In the “Authorization Field(s) ” label, edit the existing "Authorization" field by clicking on the edit icon and set the following-

| Field Type | payload |
|------------|----------|
| Field Key  | access_token |
| Field Value | {{accessToken}} |

9. Then proceed to “Add Authorization Fields” and set the following two fields.

| Field Type | header |
|------------|----------|
| Field Key  | PLAID-CLIENT-ID |
| Field Value | ENTER_YOUR_CLIENT_ID_HERE |

| Field Type | header |
|------------|----------|
| Field Key  | PLAID-SECRET |
| Field Value | ENTER_YOUR_CLIENT_SECRET_HERE |

10. Make sure to follow all the above steps in order to Authorize with Plaid Properly. Then save the Authorization Profile.

11. Select the created Authorization Profile to complete integration. Click Authorize. It will redirect you to the Plaid Quickstart login page.

12. Complete the login process by giving corresponding App permissions and you’ll be succesfully authorized to Plaid.
 
-----------------------------------------------------------------------

**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai for authorization.
 
1. Select Custom.

2. Click Select Authorization.
    
3. Select Create New.
    
4. Select the type of authorization mechanism.

i. Select oAuth v2.
  	
ii. Name the Authorization profile under the label “Identity Provider Name” and navigate to https://dashboard.plaid.com/overview and log in.
	
iii. On the left menu, go to “developers” and “keys” and copy the ClientId from the page and paste it into the ClientId field to the Kore.ai platform.

iv. Similarly, Copy the Client secret according to the environment [Sandbox,Development,Production] and paste it into the Client Secret field to the Kore.ai platform.

v. On the left menu, navigate to “API” under the same “Developers” list and click “Configure” beside the “Allowed redirect URI’s” label.

vi. Copy the callback URL from the authorization page and click “add new URI” and paste it into the text field on the Plaid platform and save the changes.

vii. Then on the left menu, go to “Docs” and then proceed to “Quickstart” or click https://plaid.com/docs/quickstart/#introduction. Follow the detailed Youtube video to set up the quickstart app on your local machine.

viii. Go to the repository - “https://github.com/NikithaPa-Kore/Plaid_Guide_Code” and replace the ‘/quickstart/frontend/src/Components/Link/index.tsx’ file’s content with the one from the repo. Also check if the Callback URL on line 44 in the file is set to the one from the Auth Profile.

ix. Go to the repository again and replace the ‘/quickstart/node/index.js’ file’s content with the one from the repo.

x. Make sure to set your .env file with the appropriate clientId, Secret, env, products, country codes, and app port. 

NOTE: The following must be set - 

| PLAID_PRODUCTS | auth,transactions,identity,investments,liabilities |
|----------------|----------------------------------------------------|
|PLAID_REDIRECT_URI | The Callback URL from the AUTH profile          |

5. The Authorization URL in the auth profile must be set to the frontend host URL of the quickstart app.

6. Then in the “Subdomain (aka Tenanancy URL) ” field, select YES and enter the base URL as “https://{tenant}.plaid.com”.

7. The “Token request URL” and the “Refresh Token URL” must be set to the backend host URL of the quickstart app with the following endpoint - /api/send_the_access_token_AUTH.

      EX: https://example.com/api/send_the_access_token_AUTH

8. In the “Authorization Field(s) ” label, edit the existing "Authorization" field by clicking on the edit icon and set the following-

| Field Type | payload |
|------------|----------|
| Field Key  | access_token |
| Field Value | {{accessToken}} |

9. Then proceed to “Add Authorization Fields” and set the following two fields.

| Field Type | header |
|------------|----------|
| Field Key  | PLAID-CLIENT-ID |
| Field Value | ENTER_YOUR_CLIENT_ID_HERE |

| Field Type | header |
|------------|----------|
| Field Key  | PLAID-SECRET |
| Field Value | ENTER_YOUR_CLIENT_SECRET_HERE |

10. Make sure to follow all the above steps in order to Authorize with Plaid Properly. Then save the Authorization Profile.

11. Select the created Authorization Profile to complete integration. Click Authorize. It will redirect you to the Plaid Quickstart login page.

12. Complete the login process by giving corresponding App permissions and you’ll be succesfully authorized to Plaid.

-----------------------------------------------------------------------
 
</container>

<container>

**What can be achieved by integrating Plaid with the Kore.ai XO Platform?**
 
The Kore.ai XO Platform supports common actions on Plaid objects with pre-built dialog actions that are ready to use. 
 
**Actions Supported**

| Action           | Description            | Status |
|------------------|------------------------|--------|
|Retrieve real-time balance data   |Automates the retrieval of account's balances.| Active |
|Get investment holdings  |Fetches the investment holdings of the accounts.| Active |
|Get Investment Transactions  |Fetches the investment transactions of the accounts.| Active |
|Fetch Liabilities |Automates the retrieval of account's liabilities.| Active |
|Create an asset report |Automates the creation of an asset report.| In-Active |
|Get an Asset report |Automates the retrieval of an asset report.| In-Active |

</container>
