# **Notion Database Query**
This plugin allows users to query pages from a Notion database.

### 🎯 **It Supports**
- Filtering data by different property types based on the provided database information.
- Sorting results in ascending or descending order.
- Pagination with a specified page size.

### 📝 **User Setting Notes:**
#### 🔧 **Set Up the Plugin Server:**
- A plugin server must be set up to use this feature. Follow the detailed guide to set up a plugin server on Render: [How to Deploy the Plugin Server on Render](https://docs.typingmind.com/plugins/plugins-server/how-to-deploy-plugins-server-on-render)

#### 🔑 **Set Up Your Notion API Key:**
- Go to the [Notion Integration Page](https://www.notion.so/profile/integrations) and create a new integration.
- Copy the key from the Integration Detail Page.
- Paste the key into the plugin's user settings:
  **Notion API Key:** `ntn_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

For detailed instructions, visit the [Notion Integration API Documentation](https://developers.notion.com/docs/create-a-notion-integration)

#### 🔗 **Share Your Database with the Integration:**
- Open your database in Notion.
- Click the **“Share”** button in the top right.
- Select **“Invite”**, search for your integration name, and click **“Invite”** to grant access.

For detailed instructions, visit the [Notion API Connections Documentation](https://www.notion.com/help/add-and-manage-connections-with-the-api)

### 📌 **Important Notes:**

#### 👉 **Database Context Requirement:**
To use the plugin, you need to tell the AI your database ID along with the database structure at the beginning.

##### 1. Obtain Your Database ID
- To get the database ID, open your Notion database as a full page in your browser.
- Copy the full URL from the address bar. The URL will look something like this: `https://www.notion.so/<DATABASE_ID>?v=<VIEW_ID>`
- Example URL `https://www.notion.so/12345bcxyz?v=11111aaaaaa`. The **Database ID** is: `12345bcxyz`.

##### 2. Obtain Your Database Structure
- Manually list out each property, including Name, Type, and Options (Select, Multi-select, Status).
- Use the [Notion Database Structure Viewer plugin](https://github.com/TypingMind/plugin-notion-database-structure-viewer).

#### ⚠️ **Limitations:**
- The plugin does **not support** the following property types for querying: Relation, Rollup, Verification, Formula, Unique ID.

#### 👉 **Rate Limits:**
- There are rate limits for Notion API requests. Learn more at [Notion API Rate Limits](https://developers.notion.com/reference/request-limits#rate-limits).
- There are size limits on certain parameters, as well as the depth of children in requests. Learn more at [Notion API Size Limits](https://developers.notion.com/reference/request-limits#size-limits)

### 💡 **Example Usage**  
- As an HR professional, I want to filter employees based on specific conditions. First, I need to provide the AI with the context of my database, including the database URL along with the database structure description.

Given the description of my Employee Directory Database as follows: 
> Notion Database URL: `https://www.notion.so/12345bcxyz?v=11111aaaaaa`
>
> Database Structure:
> 1. Name (Title)
> 2. Years of Experience (Number)
> 3. Skills (Multi-select) - Options: Project Management, Programming, Data Analysis, Communication, Leadership, Design, Marketing, Sales, MLOps, FullStack
> 4. Probation Passed (Checkbox)
> 5. Location (Select) - Options: HQ - New York, Office - London, Office - Singapore, Remote - Domestic, Remote - International, Hybrid, Office - New York
> 6. Role (Select) - Options: Engineer, Manager, Designer, Analyst, Developer, Director, Coordinator, Specialist
> 7. LinkedIn Profile (URL)
> 8. Performance Review Status (Status) - Options: Not started, In progress, Done
> 9. Email (Email)
> 10. Start Date (Date)
> 11. Department (Select) - Options: Engineering, Marketing, Sales, HR, Finance, Operations, Customer Support, Design
> 12. Attachments (Files)
> 13. Phone (Phone Number)
> 14. Notes (Rich Text)

Then, I can ask the AI to retrieve employees based on my needs. Here are some examples:

Example 1:
> Filter employees who have not passed probation.

Example 2:
> Filter employees in the Engineering Department, sort them by Name (A-Z), and retrieve the first 5 individuals.

Example 3:
> Filter employees in the Engineering Department with roles of Engineer or Analyst, hired after 2025-01-01, and sort them by Name (A-Z).