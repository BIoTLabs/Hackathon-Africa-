import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'airdrops',
  title: 'Airdrops',
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
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'daysLeft',
      title: 'Days Left',
      type: 'string',
    }),
    // Airdrop description
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'claimable',
      title: 'Claimable',
      type: 'string',
    }),
    // This shlould be a link
    defineField({
      name: 'airdropLink',
      title: 'Airdrop Link',
      type: 'string',
    }),
    defineField({
      name: 'claimDate',
      title: 'Claim Date',
      type: 'string',
    }),
    defineField({
      name: 'safety',
      title: 'Safety',
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
