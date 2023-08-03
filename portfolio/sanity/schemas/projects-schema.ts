export default{
    "name": "projects",
    "title": "Projects",
    "type": "document",
    "fields": [
      {
        "name": "thumbnail_image",
        "title": "Thumbnail_Image",
        "type": "image",
        "options": {
          "hotspot": true
        },
        "accept": "image/gif" // Set the accept option to "image/gif" to allow GIFs
      },
  
      {
        "name": "project_name",
        "title": "Project_Name",
        "type": "string"
      },
      {
        "name": "project_status",
        "title": "Project_Status",
        "type": "string"
      },
      {
        "name": "project_industry",
        "title": "project_Industry",
        "type": "string"
      },
      {
        "name": "project_date",
        "title": "project_Date",
        "type": "string"
      },
    
      {
        "name": "slug",
        "title": "Slug",
        "type": "slug",
        "options": {
          "source": "project_name",
          "maxLength": 90
        }
      },
      {
        "name": "project_description",
        "title": "Project_Description",
        "type": "text", // Use the "text" type for a paragraph field
        "rows": 4, // Optional: Specify the number of rows in the input field
        "description": "Enter a description for the project" // Optional: Add a description for the field
      },
     {
        "name": "project_caution",
        "title": "Project_Caution",
        "type": "text", // Use the "text" type for a paragraph field
        "rows": 4, // Optional: Specify the number of rows in the input field
        "description": "Enter a description for the project" // Optional: Add a description for the field
      },
      {
        "name": "project_stack",
        "title": "Project_Stack",
        "type": "array",
        "of": [
          {
            "type": "string",
            "title": "stack",
            "description": "Enter a stack"
          }
        ]
      },
      {
        "name": "live_link",
        "title": "Live_Link",
        "type": "string"
      },
      {
        "name": "repo_link",
        "title": "Repo_Link",
        "type": "string"
      }
    ]
  } as const;
  