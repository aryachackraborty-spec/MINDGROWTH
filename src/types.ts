/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: "boards" | "competitive" | "languages";
  duration: string;
  boardText: string;
  description: string;
  features: string[];
  subjects: string[];
  glowColor: string; 
  iconName: string; 
}

export interface Branch {
  name: string;
  slug: string;
  address: string;
  landmark: string;
  email: string;
  phone: string;
  whatsapp: string;
  mapEmbedUrl: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  studentName: string;
  parentName?: string;
  classNameOrTarget?: string;
  textEn: string;
  textBn?: string;
  rating: number;
  tags: string[];
  avatarUrl?: string;
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface LeadSubmission {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  className: string;
  courseInterested: string;
  branchPreferred: string;
  submissionDate: string;
}
