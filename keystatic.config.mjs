// @ts-check
import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },

  singletons: {
    site: singleton({
      label: 'Site',
      path: './src/data/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Site Name',
          validation: {
            isRequired: true,
            length: {
              max: 64
            }
          }
        }),
        description: fields.text({
          label: 'Site Description',
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          }
        }),
        logo: fields.image({
          label: 'Site Logo',
          directory: './src/assets/site',
          publicPath: '~/assets/site',
          validation: {
            isRequired: true
          }
        }),
        favicon: fields.image({
          label: 'Site Icon',
          directory: 'public',
          publicPath: '',
          validation: {
            isRequired: true
          }
        })
      }
    })
  },

  collections: {
    region: collection({
      label: 'Region',
      path: './src/data/region/*',
      slugField: 'title',
      format: 'json',
      columns: ['title', 'type'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Region Name',
            validation: {
              isRequired: true,
              length: {
                max: 64
              }
            }
          }
        }),
        description: fields.text({
          label: 'Region Description',
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          }
        }),
        type: fields.select({
          label: 'Region Type',
          options: [
            { label: 'Main Constituency', value: 'main' },
            { label: 'Local Constituency', value: 'local' }
          ],
          defaultValue: 'local'
        }),
        logo: fields.image({
          label: 'Region Logo',
          directory: './src/assets/region',
          publicPath: '~/assets/region',
          validation: {
            isRequired: true
          }
        }),
        wikipedia: fields.url({
          label: 'Wikipedia Link'
        }),
        size: fields.number({
          label: 'Region Constituency Size',
          description:
            'Size of the constituency in the region, in number of voters'
        })
      }
    }),
    party: collection({
      label: 'Political Party',
      path: 'src/data/party/*',
      slugField: 'name',
      format: 'json',
      columns: ['name'],
      schema: {
        name: fields.slug({
          name: {
            label: 'Party Name',
            validation: {
              isRequired: true,
              length: {
                max: 64
              }
            }
          }
        }),
        logo: fields.image({
          label: 'Party Logo',
          directory: './src/assets/party',
          publicPath: '~/assets/party',
          validation: {
            isRequired: true
          }
        })
      }
    })
  }
})
