import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'grants',
  title: 'Grants',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'reserve',
      title: 'Reserve',
      type: 'string',
    }),
    defineField({
      name: 'grantRounds',
      title: 'Grant Rounds',
      type: 'string',
    }),
    defineField({
      name: 'grantName',
      title: 'Grant Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
    }),
    defineField({
      name: 'fundsAvailable',
      title: 'Funds Available',
      type: 'string',
    }),
    defineField({
      name: 'totalFunded',
      title: 'Total Funded',
      type: 'string',
    }),
    defineField({
      name: 'buildsFunded',
      title: 'Builds Funded',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
