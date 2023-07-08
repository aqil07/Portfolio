export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'projectName',
            type: 'string',
            title: 'Project Name'
        },
        {
            name: "projectImage", // name of the field
            title: "Project Image",
            // photos are identified in the sanity database by the keyword image
            type: "image",
            options: {
                hotspot: true,
            },
        },
         {
            name: 'embedURL',
            type: 'url',
            title: 'Project Embed URL'
        },
    ]
}