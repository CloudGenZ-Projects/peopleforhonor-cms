import type { GlobalConfig } from 'payload'
import { checkTenantAccess } from '../../utils/tenantAccess'

export const GalleryPage: GlobalConfig = {
  slug: 'gallery-page',
  admin: {
    group: 'People For Honor',
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:5173',
    },
  },
  access: {
    read: (args) => checkTenantAccess(args, 'peopleforhonor'),
    update: (args) => checkTenantAccess(args, 'peopleforhonor'),
  },
  fields: [
    {
      name: 'hero_title',
      label: 'Hero Title',
      type: 'text',
      defaultValue: 'Our Community Voice',
    },
    {
      name: 'hero_subtitle',
      label: 'Hero Subtitle',
      type: 'textarea',
      defaultValue:
        'Real voices. Real stories. Our community is at the heart of everything we do, built by them, for them. Explore the videos and images below to hear their stories and experiences of our community members.',
    },
    {
      name: 'images',
      label: 'Gallery Images',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'category',
          label: 'Category',
          type: 'text',
          defaultValue: 'gallery',
        },
        {
          name: 'image',
          label: 'Image File Upload / Media',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imageUrl',
          label: 'Direct Image URL (Fallback if no file uploaded)',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'date',
          label: 'Date',
          type: 'text',
        },
        {
          name: 'location',
          label: 'Location',
          type: 'text',
        },
      ],
    },
    {
      name: 'videos',
      label: 'Gallery Videos (YouTube Links)',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Video Title',
          type: 'text',
          defaultValue: 'Gallery Video',
        },
        {
          name: 'category',
          label: 'Category',
          type: 'text',
          defaultValue: 'gallery',
        },
        {
          name: 'youtube_url',
          label: 'YouTube Link / URL (e.g. https://youtu.be/L8tsLvAhXYQ)',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'date',
          label: 'Date',
          type: 'text',
        },
        {
          name: 'location',
          label: 'Location',
          type: 'text',
        },
      ],
    },
    {
      name: 'cta_heading',
      label: 'CTA Heading',
      type: 'text',
      defaultValue: 'Be Part of Our Story',
    },
    {
      name: 'cta_description',
      label: 'CTA Description',
      type: 'textarea',
      defaultValue:
        'Every photo and video represents a life transformed, a connection made, and a step toward a brighter future. Join us and become part of these amazing stories.',
    },
    {
      name: 'cta_btn1_text',
      label: 'Button 1 Text',
      type: 'text',
      defaultValue: 'Join Our Programs',
    },
    {
      name: 'cta_btn1_link',
      label: 'Button 1 Link',
      type: 'text',
      defaultValue: '/programs',
    },
    {
      name: 'cta_btn2_text',
      label: 'Button 2 Text',
      type: 'text',
      defaultValue: 'Volunteer With Us',
    },
    {
      name: 'cta_btn2_link',
      label: 'Button 2 Link',
      type: 'text',
      defaultValue: '/join',
    },
  ],
}
