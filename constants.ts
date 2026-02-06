import { Cpu, Network, Zap, Layers, Globe, ShieldCheck, Box, Activity } from 'lucide-react';
import { Feature, NavItem, SpecItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'OVERVIEW' },
  { id: 'specs', label: 'DATASHEET' },
  { id: 'about', label: 'FOUNDRY' },
  { id: 'contact', label: 'CONTACT' },
];

export const SPECS: SpecItem[] = [
  { 
    id: "01",
    parameter: "LITHOGRAPHY", 
    value: "14", 
    unit: "Å", 
    description: "1.4nm (14 Angstrom) Class Process Technology utilizing High-NA Extreme Ultraviolet (EUV) patterning." 
  },
  { 
    id: "02",
    parameter: "LOGIC DENSITY", 
    value: "480", 
    unit: "MTr/mm²", 
    description: "Peak transistor density for high-performance computing (HPC) libraries with aggressive cell height scaling." 
  },
  { 
    id: "03",
    parameter: "POWER DELIVERY", 
    value: "BSPDN", 
    unit: "", 
    description: "Backside Power Delivery Network implementation reduces IR drop by 30% and frees up signal routing resources." 
  },
  { 
    id: "04",
    parameter: "I/O SPEED", 
    value: "224", 
    unit: "Gbps", 
    description: "SerDes PHY performance per lane, optimized for next-gen data center ethernet and AI cluster fabrics." 
  },
  { 
    id: "05",
    parameter: "YIELD RATE", 
    value: "99.2", 
    unit: "%", 
    description: "Defect density <0.05/cm² achieved through AI-driven metrology and automated wafer handling." 
  },
  { 
    id: "06",
    parameter: "THERMAL", 
    value: "1000", 
    unit: "W/cm²", 
    description: "Supported heat flux density for liquid-cooled high-performance packages." 
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Logic Scaling",
    subtitle: "MOORE'S LAW EXTENDED",
    description: "RibbonFET gate-all-around transistors provide superior channel control at sub-2nm geometries.",
    icon: Cpu,
    stat: "1.4nm"
  },
  {
    title: "Interconnects",
    subtitle: "SIGNAL INTEGRITY",
    description: "Graphene-doped copper lines reduce resistance and electromigration in the smallest wiring layers.",
    icon: Network,
    stat: "0.5x R"
  },
  {
    title: "Packaging",
    subtitle: "HETEROGENEOUS INTEGRATION",
    description: "2.5D and 3D CoWoS (Chip-on-Wafer-on-Substrate) allowing massive logic-memory bandwidth.",
    icon: Layers,
    stat: "4TB/s"
  }
];