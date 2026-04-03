import React from 'react';
import { NavItem, Category, Feature } from './types';
import { BadgeCheck, Users, Wrench, Shield, Factory, Zap, FlaskConical, HardHat } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Flooring Systems', 
    href: '#',
    subItems: [
      { label: 'All Flooring Systems', href: '/flooring-systems' },
      { label: 'Epoxy Flooring', href: '/epoxy-flooring' },
      { label: 'Urethane Cement', href: '/urethane-cement' },
      { label: 'ESD/Conductive', href: '/esd-conductive' },
      { label: 'Traffic Coating', href: '/traffic-coating' },
      { label: 'Polished & Sealed Concrete', href: '/polished-concrete' },
    ]
  },
  { 
    label: 'Industries', 
    href: '#',
    subItems: [
      { label: 'Food & Beverage', href: '/industries/food-beverage' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Aerospace', href: '/industries/aerospace' },
      { label: 'Sports & Entertainment', href: '/industries/sports-entertainment' },
    ]
  },
  { label: 'Project Gallery', href: '/project-gallery' },
  { 
    label: 'About', 
    href: '#',
    subItems: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export const CATEGORIES: Category[] = [
  { id: 'epoxy', name: 'Epoxy', image: '/products/epoxy.webp' },
  { id: 'urethane-cement', name: 'Urethane Cement', image: '/products/urethane-cement.webp' },
  { id: 'esd-conductive', name: 'ESD/Conductive', image: '/products/esd.webp' },
  { id: 'traffic-coating', name: 'Traffic Coating', image: '/products/traffic-coating.webp' },
  { id: 'polished-concrete', name: 'Polished Concrete', image: '/products/polished-concrete.webp' },
];

export const INDUSTRIES: Category[] = [
  { id: 'food-beverage', name: 'Food & Beverage', image: '/industries/food-beverage.webp' },
  { id: 'automotive', name: 'Automotive', image: '/industries/automotive.webp' },
  { id: 'manufacturing', name: 'Manufacturing', image: '/industries/manufacturing.webp' },
  { id: 'aerospace', name: 'Aerospace', image: '/industries/aerospace.webp' },
  { id: 'sports-entertainment', name: 'Sports & Entertainment', image: '/industries/sports-entertainment.webp' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Licensed Arizona Contractor',
    description: 'Fully licensed and insured commercial flooring contractor serving Arizona with expert craftsmanship.',
    icon: <Shield className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Industry Expertise',
    description: 'Specialized solutions for food & beverage, automotive, aerospace, manufacturing, and sports facilities.',
    icon: <Factory className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Professional Installation',
    description: 'Certified installers with extensive experience in industrial and commercial flooring systems.',
    icon: <Wrench className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Trusted by Industry Leaders',
    description: 'Proud to serve Goodyear, ASU, Pepsi, University of Arizona, JBS Harvest, and more.',
    icon: <BadgeCheck className="w-8 h-8 text-blue-900" />,
  },
];

export const CLIENTS = [
  'Goodyear',
  'Arizona State University',
  'Pepsi',
  'JBS Harvest',
  'University of Arizona',
  'Royal Oaks',
  'Halal Guys',
];