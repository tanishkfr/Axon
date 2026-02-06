import { Cpu, Zap, Radio, Layers, Microscope, Terminal } from 'lucide-react';
import { Feature, NavItem, SpecItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME' },
  { id: 'specs', label: 'TECH SPECS' },
  { id: 'about', label: 'PHILOSOPHY' },
  { id: 'contact', label: 'TERMINAL' },
];

export const SPECS: SpecItem[] = [
  { 
    id: "01",
    parameter: "PROCESS NODE", 
    value: "1.4", 
    unit: "nm", 
    description: "GAAFET (Gate-All-Around) topology with backside power delivery." 
  },
  { 
    id: "02",
    parameter: "TRANSISTOR DENSITY", 
    value: "480", 
    unit: "MTr/mm²", 
    description: "Ultra-dense logic scaling utilizing extreme UV lithography." 
  },
  { 
    id: "03",
    parameter: "CLOCK FREQUENCY", 
    value: "8.5", 
    unit: "GHz", 
    description: "Cryo-stable operational peak with liquid nitrogen cooling support." 
  },
  { 
    id: "04",
    parameter: "INTERCONNECT", 
    value: "128", 
    unit: "Gbps", 
    description: "Photon-based die-to-die bridge for near-zero latency." 
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Quantum Resistance",
    subtitle: "SECURITY FABRIC",
    description: "Post-quantum cryptography embedded directly into the transistor gate logic.",
    icon: Layers,
    stat: "AES-512"
  },
  {
    title: "AI Vector Engine",
    subtitle: "NEURAL PROCESSING",
    description: "Dedicated tensor cores optimized for trillion-parameter model inference.",
    icon: Cpu,
    stat: "8.2 PFLOPS"
  },
  {
    title: "Atomic Lithography",
    subtitle: "MANUFACTURING",
    description: "Sub-angstrom precision utilizing directed self-assembly materials.",
    icon: Microscope,
    stat: "0.1 nm"
  }
];