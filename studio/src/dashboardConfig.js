export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9ff716913ddd835cd6d73b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-g7o7zi1m',
                  apiId: 'e19e9b57-604c-45d2-9224-955cc40695e3'
                },
                {
                  buildHookId: '5e9ff71617e36c69cdb3d543',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zqrotkjk',
                  apiId: 'beb69dd5-52fa-4d60-be0d-a741dc8b2488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariedevos/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zqrotkjk.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
