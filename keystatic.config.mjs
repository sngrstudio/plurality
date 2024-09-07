import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },

  singletons: {
    site: singleton({
      label: 'Situs',
      path: './src/data/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Nama Situs',
          validation: { isRequired: true }
        }),
        description: fields.text({
          label: 'Deskripsi Situs',
          validation: { isRequired: true, length: { max: 160 } }
        }),
        logo: fields.image({
          label: 'Logo',
          directory: './src/assets/logo',
          publicPath: '~/assets/logo',
          validation: { isRequired: true }
        }),
        favicon: fields.image({
          label: 'Icon',
          directory: 'public',
          publicPath: '',
          validation: { isRequired: true }
        })
      }
    })
  }
})
