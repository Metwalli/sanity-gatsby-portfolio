export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e503f56fa14eb573cc915f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wy35i4ms',
                  apiId: '22d39097-ff0f-4434-bfba-7039ef83b1ec'
                },
                {
                  buildHookId: '5e503f5674995433d79596db',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pxh6chdb',
                  apiId: '5cc700a4-252f-433f-b00a-acef33f63224'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Metwalli/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pxh6chdb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
