/**
 * Perform a query operation on a Notion database.
 * @param {Object} params - The parameters for the operation.
 * @param {string} [params.databaseId] - The ID of the Notion database for create and read operations.
 * @param {Array} [params.databaseStructure] - A list of properties in the Notion database structure, used to generate filter or sort criteria..
 * @param {Object} [params.filter] - Optional filter for querying pages in the read operation.
 * @param {Array} [params.sorts] - Optional sorting criteria for page results in the read operation.
 * @param {number} [params.pageSize] - The number of results per page for the read operation.
 * @param {string} [params.startCursor] - The start cursor for pagination in the read operation.
 * @returns {Promise<Object>} - The response data from the Notion API.
 */
async function perform_notion_database_query(params, userSettings) {
  const { databaseId, databaseStructure = [] } = params;
  const { pluginServer, notionApiKey } = userSettings;

  if (!pluginServer) {
    throw new Error(
      "Missing the Plugin Server URL. Please set it in the plugin settings."
    );
  }

  if (!notionApiKey) {
    throw new Error(
      "Missing the Notion API Key. Please set it in the plugin settings."
    );
  }

  if (!databaseId) {
    throw new Error(
      "Missing the Database Id. Please provide specific Database ID or Database URL"
    );
  }

  if (!databaseStructure.length) {
    throw new Error(
      "Missing the Database Structure Properties. Please provide valid structure of your provided database."
    );
  }

  try {
    const result = await queryPages({
      pluginServerUrl: pluginServer,
      notionApiKey: notionApiKey,
      databaseId: databaseId,
      databaseStructure: databaseStructure,
      filter: params.filter ?? {},
      sorts: params.sorts ?? [],
      pageSize: params.pageSize ?? 100,
      startCursor: params.startCursor,
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
}

async function queryPages({
  notionApiKey,
  pluginServerUrl,
  databaseId,
  databaseStructure,
  filter,
  sorts,
  pageSize = 100,
  startCursor = null,
}) {
  const requestBody = {
    notionApiKey: notionApiKey,
    databaseId: databaseId,
    pageSize: pageSize,
    databaseStructure: databaseStructure,
  };
  if (filter) requestBody.filter = filter;
  if (sorts) requestBody.sorts = sorts;
  if (startCursor) requestBody.startCursor = startCursor;

  try {
    const response = await fetch(
      `${pluginServerUrl}/notion-database/query-pages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`Error query pages: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to query pages: ${error.message}`);
  }
}
