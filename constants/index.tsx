import { BiLogoCodepen } from 'react-icons/bi';
import { FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    page: '/',
  },
  {
    id: 'about',
    title: 'About',
    page: '/about',
  },
  {
    id: 'hackathon',
    title: 'Hackathon',
    page: '/hackathons',
  },
];

export const icons = [
  {
    name: 'Participants',
    icon: <FaUsers size='42' />,
    text: 'Occasionally, the program is held within the University walls so that University staff including lecturers can participate.',
  },
  {
    name: 'Schedule',
    icon: <BsClock size='42' />,
    text: 'The hackathon is spread over several days, starting every morning and lasting until the evening for each day.',
  },
  {
    name: 'Annual',
    icon: <FaCalendarAlt size='42' />,
    text: 'With its third edition, the hackathon has been the most talked about event in the industry for a few years now.',
  },
];

export const cores = [
  {
    id: 1,
    text: 'Bootcamps',
  },
  {
    id: 2,
    text: 'Hackathons',
  },
  {
    id: 3,
    text: 'Training',
  },
  {
    id: 4,
    text: 'Startup competitions',
  },
];

export const partners = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1672765762/charis-medhospital-v2/ambulance_ulpm0k.png',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1669276205/charis-medhospital-v2/trauma_n0vksl.png',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1669276205/charis-medhospital-v2/pregnant_v6fgxe.png',
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dpxs9ause/image/upload/v1669276205/charis-medhospital-v2/baby_scfdcc.png',
  },
];
