import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface SpecItem {
  id: string;
  parameter: string;
  value: string;
  unit: string;
  description: string;
}

export interface Feature {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stat: string;
}