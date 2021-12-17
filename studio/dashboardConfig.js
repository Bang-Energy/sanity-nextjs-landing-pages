export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61bd032a3b43f22a9c187db2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f6v6oac4',
                  apiId: '3e02cf28-84b0-4fe8-8aea-554ae6bfb75d'
                },
                {
                  buildHookId: '61bd032ad9a26928ef7dc691',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qjfz18oa',
                  apiId: '31c23571-83a7-469c-8692-b7b25a6649d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bang-Energy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qjfz18oa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
