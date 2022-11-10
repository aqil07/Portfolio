export default {
    name: "contact_logos",
    title: "Contact Logos", // name of the model
    type: "document",
    fields: [
      {
        name: "contactLogo", // name of the field
        title: "Contact Logo",
        // photos are identified in the sanity database by the keyword image
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "name", // name of the field
        title: "Name",
        // photos are identified in the sanity database by the keyword image
        type: "string",
      },
    ],
  };