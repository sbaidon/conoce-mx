export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f712be6278576a1a4d083e3',
                  title: 'Sanity Studio',
                  name: 'conoce-mx-studio',
                  apiId: '03ecf045-5ddc-4808-bc6b-a4d2dc0d4d3a'
                },
                {
                  buildHookId: '5f712be6adb59e313cccb925',
                  title: 'Blog Website',
                  name: 'conoce-mx',
                  apiId: 'cc60a41b-b512-45be-aa99-fa17ff0bea60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sbaidon/conoce-mx',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://conoce-mx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
