import { defineField, defineType } from 'sanity';

// Hackathons on the landing page of the site
export default defineType({
  name: 'hackathons',
  title: 'Hackathons',
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
      name: 'text',
      title: 'Text',
      type: 'text',
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
      name: 'builds',
      title: 'Builds',
      type: 'string',
    }),
    defineField({
      name: 'applicants',
      title: 'Applicants',
      type: 'string',
    }),
    defineField({
      name: 'prize',
      title: 'Prize',
      type: 'string',
    }),
    // This is for ongoing or closed hackathons
    defineField({
      name: 'type',
      title: 'Type',
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
