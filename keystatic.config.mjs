// @ts-check

import { collection, config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },

  collections: {
    regions: collection({
      label: 'Daerah Pemilihan',
      path: './src/data/regions/*',
      format: 'json',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nama',
            validation: { isRequired: true }
          },
          slug: {
            label: 'Slug'
          }
        }),
        type: fields.select({
          label: 'Tipe Daerah Pemilihan',
          options: [
            { label: 'Provinsi', value: 'province' },
            { label: 'Kabupaten', value: 'regency' },
            { label: 'Kota', value: 'city' }
          ],
          defaultValue: 'regency'
        }),
        logo: fields.image({
          label: 'Logo',
          directory: './src/assets/regions',
          publicPath: '~/assets/regions'
        })
      }
    }),

    parties: collection({
      label: 'Partai Politik',
      path: './src/data/parties/*',
      format: 'json',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nama',
            validation: { isRequired: true }
          },
          slug: {
            label: 'Slug'
          }
        }),
        longName: fields.text({
          label: 'Nama Panjang',
          validation: { isRequired: true }
        }),
        logo: fields.image({
          label: 'Logo',
          description: 'Only SVGs will be acceptable.',
          directory: './src/assets/parties',
          publicPath: '~/assets/parties'
        })
      }
    }),

    candidates: collection({
      label: 'Pasangan Calon',
      path: './src/data/candidates/*',
      format: 'json',
      slugField: 'campaignName',
      schema: {
        campaignName: fields.slug({
          name: {
            label: 'Nama Pasangan',
            validation: { isRequired: true }
          },
          slug: {
            label: 'Slug'
          }
        }),
        coalitionName: fields.text({ label: 'Nama Koalisi' }),
        slogan: fields.text({ label: 'Slogan' }),
        image: fields.image({
          label: 'Gambar Pasangan Calon',
          directory: './src/assets/candidates',
          publicPath: '~/assets/candidates'
        }),
        logo: fields.image({
          label: 'Logo Kampanye',
          directory: './src/assets/candidates',
          publicPath: '~/assets/candidates'
        }),
        region: fields.relationship({
          label: 'Daerah Pemilihan',
          collection: 'regions',
          validation: { isRequired: true }
        }),
        candidate: fields.array(
          fields.object({
            name: fields.text({
              label: 'Nama',
              validation: { isRequired: true }
            }),
            party: fields.relationship({
              label: 'Partai',
              collection: 'parties'
            }),
            status: fields.select({
              label: 'Status',
              options: [
                { label: 'Calon Kepala Daerah', value: 'candidate' },
                { label: 'Calon Wakil Kepala Daerah', value: 'running-mate' }
              ],
              defaultValue: 'candidate'
            })
          }),
          {
            label: 'Calon',
            itemLabel: (item) => item.fields.name.value
          }
        ),
        parties: fields.array(
          fields.object({
            party: fields.relationship({
              label: 'Partai',
              collection: 'parties',
              validation: { isRequired: true }
            }),
            status: fields.select({
              label: 'Status',
              options: [
                { label: 'Pengusung', value: 'declaring' },
                { label: 'Pendukung', value: 'supporting' }
              ],
              defaultValue: 'declaring'
            })
          }),
          {
            label: 'Partai Pengusung dan Pendukung',
            itemLabel: (item) => item.fields.party.value || ''
          }
        )
      }
    })
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
