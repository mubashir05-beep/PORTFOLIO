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
        }
      },      
      {
        "name": "hero_image",
        "title": "Hero_Image",
        "type": "image",
        "options": {
          "hotspot": true
        }
      },      
      {
        "name": "project_name",
        "title": "Project_Name",
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
        "name": "project_description_1",
        "title": "Project_Description_1",
        "type": "text", // Use the "text" type for a paragraph field
        "rows": 4, // Optional: Specify the number of rows in the input field
        "description": "Enter a description for the project" // Optional: Add a description for the field
      },
      {
        "name": "project_description_2",
        "title": "Project_Description_2",
        "type": "text", // Use the "text" type for a paragraph field
        "rows": 4, // Optional: Specify the number of rows in the input field
        "description": "Enter a description for the project" // Optional: Add a description for the field
      },
      {
        "name": "project_description_3",
        "title": "Project_Description_3",
        "type": "text", // Use the "text" type for a paragraph field
        "rows": 4, // Optional: Specify the number of rows in the input field
        "description": "Enter a description for the project" // Optional: Add a description for the field
      },
      {
        "name": "project_description_4",
        "title": "Project_Description_4",
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
        "name": "images_collection",
        "title": "Images_Collection",
        "type": "array",
        "of": [
          {
            "type": "object",
            "fields": [
              {
                "name": "title",
                "title": "Title",
                "type": "string"
              },
              {
                "name": "image",
                "title": "Image",
                "type": "image",
                "options": {
                  "hotspot": true
                }
              }
            ]
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
  