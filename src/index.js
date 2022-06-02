window.CMS_MANUAL_INIT = true

import CMS, { init } from 'netlify-cms-app'

init({
  config: {
    backend: {
      name: 'github',
      repo: 'mhfrancisco/netlify-cms-standalone'
    },
    
    load_config_file: false,
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",

    collections: [
      { label: "Blog", name: "blog", folder: "_posts/blog", create: true, fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Featured Image", name: "thumbnail", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
      ]},
    ],
  },
})
