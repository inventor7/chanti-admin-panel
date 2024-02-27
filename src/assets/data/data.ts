import { h } from 'vue'
import {ArrowDownIcon} from '@radix-icons/vue'
import {ArrowRightIcon} from '@radix-icons/vue'
import {ArrowUpIcon} from '@radix-icons/vue'
import {CheckCircledIcon} from '@radix-icons/vue'
import {CircleIcon} from '@radix-icons/vue'
import {CrossCircledIcon} from '@radix-icons/vue'
import {QuestionMarkCircledIcon} from '@radix-icons/vue'
import {StopwatchIcon} from '@radix-icons/vue'


export  const hasSentVerifications = [
  {
    value: 0,
    label: 'unsent',
    icon : h(CrossCircledIcon)
  },
  {
    value: 1,
    label: 'sent',
    icon : h(CheckCircledIcon)
  },
]



export  const verifications = [
  {
    value: 0,
    label: 'Unverified',
    icon : h(CrossCircledIcon)
  },
  {
    value: 1,
    label: 'Verified',
    icon : h(CheckCircledIcon)
  },
]



export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    value: 'pending',
    label: 'In Progress',
    icon: h(StopwatchIcon),
    color: 'text-yellow-500',
  },
  {
    value: 'done',
    label: 'Done',
    icon: h(CheckCircledIcon),
    color: 'text-green-600',
  },
  {
    value: 'delete',
    label: 'Deleted',
    icon: h(CrossCircledIcon),
    color: 'text-red-500',
  },
]




export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: h(ArrowDownIcon),
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: h(ArrowRightIcon),
  },
  {
    label: 'High',
    value: 'high',
    icon: h(ArrowUpIcon),
  },
]



export const states = [
  // all the Algerian states
  { value: 1, label: 'Adrar' },
  { value: 2, label: 'Chlef' },
  { value: 3, label: 'Laghouat' },
  { value: 4, label: 'Oum El Bouaghi' },
  { value: 5, label: 'Batna' },
  { value: 6, label: 'Béjaïa' },
  { value: 7, label: 'Biskra' },
  { value: 8, label: 'Bechar' },
  { value: 9, label: 'Blvaluea' },
  { value: 10, label: 'Bouira' },
  { value: 11, label: 'Tamanrasset' },
  { value: 12, label: 'Tbessa' },
  { value: 13, label: 'Tlemcen' },
  { value: 14, label: 'Tiaret' },
  { value: 15, label: 'Tizi Ouzou' },
  { value: 16, label: 'Alger' },
  { value: 17, label: 'Djelfa' },
  { value: 18, label: 'Jijel' },
  { value: 19, label: 'Se9tif' },
  { value: 20, label: 'Saefda' },
  { value: 21, label: 'Skikda' },
  { value: 22, label: 'Svaluei Bel Abbes' },
  { value: 23, label: 'Annaba' },
  { value: 24, label: 'Guelma' },
  { value: 25, label: 'Constantine' },
  { value: 26, label: 'Medea' },
  { value: 27, label: 'Mostaganem' },
  { value: 28, label: 'MSila' },
  { value: 29, label: 'Mascara' },
  { value: 30, label: 'Ouargla' },
  { value: 31, label: 'Oran' },
  { value: 32, label: 'El Bayadh' },
  { value: 33, label: 'Illizi' },
  { value: 34, label: 'Bordj Bou Arrervaluej' },
  { value: 35, label: 'Boumerdes' },
  { value: 36, label: 'El Tarf' },
  { value: 37, label: 'Tindouf' },
  { value: 38, label: 'Tissemsilt' },
  { value: 39, label: 'El Oued' },
  { value: 40, label: 'Khenchela' },
  { value: 41, label: 'Souk Ahras' },
  { value: 42, label: 'Tipaza' },
  { value: 43, label: 'Mila' },
  { value: 44, label: 'Ain Defla' },
  { value: 45, label: 'Naama' },
  { value: 46, label: 'Ain Temouchent' },
  { value: 47, label: 'Ghardaefa' },
  { value: 48, label: 'Relizane' },
  { value: 49, label: 'El M\'ghair' },
  { value: 50, label: 'El Menia' },
  { value: 51, label: 'Ouled Djellal' },
  { value: 52, label: 'Bordj Baji Mokhtar' },
  { value: 53, label: 'Béni Abbès' },
  { value: 54, label: 'Timimoun' },
  { value: 55, label: 'Touggourt' },
  { value: 56, label: 'Djanet' },
  { value: 57, label: 'In Salah' },
  { value: 58, label: 'In Guezzam' },
]


export const  categories =  [
      {
        value: 1,
        label: "home_improvement_maintenance",
        color: "Home Improvement & Maintenance",
      },
      {
        value: 2,
        label: "construction_remodelling",
        color: "Construction & Remodelling",
      },
      {
        value: 3,
        label: "interior_design_decorating",
        color: "Interior Design & Decorating",
      },
      {
        value: 4,
        label: "cleaning_house_keeping",
        color: "Cleaning & House Keeping",
      },
      {
        value: 5,
        label: "electrical_hvac",
        color: "Electrical & HVAC",
      },
      {
        value: 6,
        label: "plumbing_water_management",
        color: "Plumbing & Water Management",
      },
      {
        value: 7,
        label: "landscape_outdoor_living",
        color: "Landscape & Outdoor Living",
      },
      {
        value: 8,
        label: "painting_finishing",
        color: "Painting & Finishing",
      },
      {
        value: 9,
        label: "home_inspection_appraisal",
        color: "Home Inspection & Appraisal",
      },
      {
        value: 10,
        label: "moving_storage_services",
        color: "Moving & Storage Services",
      },
    ]