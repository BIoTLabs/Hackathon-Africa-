import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'bounties',
  title: 'Bounties',
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
      name: 'amount',
      title: 'amount',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'type',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
  ],
});
