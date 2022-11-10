export default {
    name: "Skills",
    title: "Skills", // name of the model
    type: "document",
    fields: [
      {
        name: "skillImage", // name of the field
        title: "Skill Image",
        // photos are identified in the sanity database by the keyword image
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "progress", // name of the field
        title: "Progress",
        // photos are identified in the sanity database by the keyword image
        type: "string",
      },
    ],
  };