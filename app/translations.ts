export type Locale = 'en' | 'th'

export const locales = ['en', 'th'] as const
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    navigation: {
      about: "About Us",
      teams: "Our Teams",
      products: "Our Products",
      contact: "Contact Us",
      createPlan: "Create Your Personal Plan"
    },
    hero: {
      title: "Transform Bland Meals into Satisfying Experiences",
      subtitle: "Revolutionary odor-based technology that reduces salt cravings for patients on sodium-restricted diets",
      cta: "Learn More",
      reduceSaltCraving: "Reduce Your Salt Craving With",
      designingEnvironments: "Designing environments that prioritize patient joy without compromising health.",
      createPersonalPlan: "Create Your Personal Plan"
    },
    page: {
      blandTaste: "Bland Taste?",
      weFoundSolution: "We Found the Solution"
    },
    awards: {
      ourPartners: "Our Partners"
    },
    problemStatement: {
      meetAuntieAnn: "Meet Auntie Ann.",
      auntieAnnStory: "She is a chronic kidney disease patient, addicted to salt. Every bland meal feels like a punishment, turning her medical diet into a daily battle.",
      hospitalDietFatigue: "Hospital diet fatigue",
      cravingManagement: "Craving management",
      qualityOfLife: "Quality of life",
      sevenOfTen: "7 of 10",
      patientsLoseAppetite: "Patients lose their appetite because of bland hospital food.",
      tasteFatigue: "Taste fatigue leads to poor nutrition and recovery.",
      sodiumLimit: "2,000 mg",
      sodiumDailyLimit: "Sodium Daily Limit for high-risk patients.",
      lowSodiumRestrictive: "Low-sodium diets can feel restrictive.",
      cravingsSpike: "Cravings spike adherence challenges.",
      targetConditions: "Target Conditions",
      conditionsList: "Severe Heart Failure, Cirrhosis, Nephrotic Syndrome & Uncontrolled HTN."
    },
    productPreview: {
      sectionTitle: "An Odor Based Inducement.",
      sectionSubtitle: "Specialized solutions designed to enhance flavor perception through cross-modal sensory triggers",
      beefImpulse: "1.5x Impulse",
      beefOdor: "Beef Odor",
      beefDescription: "Beef odor can induce saltiness perception through cross-modal sensory triggers. Specifically designed to enhance the flavor profile of main protein dishes, it offers a breakthrough solution for patients on sodium-restricted diets.",
      beefFeature1: "For main protein-based meals",
      beefFeature2: "Strongest Neuro-triggering",
      seaImpulse: "1.2x Impulse",
      seaBreeze: "Sea Breeze",
      seaDescription: "Sea Breeze enhances the dining environment by providing a refreshing oceanic aroma, helping to alleviate the stress of bland meals and increasing satisfaction among elderly patients.",
      seaFeature1: "Refreshing oceanic profile",
      seaFeature2: "Ideal for salads & healthy snacks",
      learnMore: "Learn More",
      easyApplication: "Easy Application",
      proteinSolutions: "Protein Solutions",
      seafoodOptions: "Seafood Options",
      portableFormat: "Portable Format"
    },
    proofSection: {
      sectionTitle: "Neuro-Science Validation",
      pilotStudy: "Pilot Study using EEG (Electroencephalography) at Siriraj Hospital",
      betaRhythm: "Beta Rhythm",
      betaDescription: "Confirmed brainwave activation indicating real saltiness perception.",
      eegAnalysis: "EEG Brainwave Analysis",
      impulseTitle: "1.5x Impulse",
      impulseDescription: "Significant increase in salt impulse response with Beef Odor variant.",
      neuroResponse: "Measurable Neuro-Response",
      safetyTitle: "100% Safety",
      safetyDescription: "Safety profile with no chemical interaction with food itself.",
      nonInvasive: "Non-Invasive Technology"
    },
    contactSection: {
      getInTouch: "Get in Touch",
      getInTouchDescription: "We're here to answer any questions you might have about our products, research, or partnership opportunities. Reach out to us and we'll respond as soon as possible.",
      phone: "Phone",
      phoneNumber: "0889945445",
      phoneHours: "Mon-Fri 9AM-6PM ICT",
      email: "Email",
      emailAddress: "hofahoff@gmail.com",
      emailResponse: "We'll respond within 24 hours",
      location: "Location",
      locationAddress: "Bangkok, Thailand",
      locationVirtual: "Available for virtual meetings worldwide",
      aboutOitep: "About OITEP",
      aboutOitepDescription: "OITEP is pioneering breakthrough solutions for patients on sodium-restricted diets through cross-modal sensory triggers. Our innovative approach helps reduce salt cravings while maintaining food satisfaction.",
      sendMessage: "Send us a Message",
      fullName: "Full Name of Contact Person",
      emailLabel: "Email *",
      company: "Agency / Company",
      content: "Content to Inquire About *",
      contentPlaceholder: "Tell us about your inquiry...",
      sendMessageBtn: "Send Message",
      sending: "Sending...",
      thankYou: "Thank you for your message! We'll get back to you soon.",
      errorMessage: "Error sending message. Please try again."
    },
    footer: {
      description: "Reducing salt cravings through cross-modal sensory triggers, providing breakthrough solutions for patients on sodium-restricted diets.",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2024 OITEP. All rights reserved."
    },
    // Add more translation keys as needed
  },
  th: {
    navigation: {
      about: "เกี่ยวกับเรา",
      teams: "ทีมของเรา",
      products: "ผลิตภัณฑ์ของเรา",
      contact: "ติดต่อเรา",
      createPlan: "สร้างแผนส่วนตัวของคุณ"
    },
    hero: {
      title: "เปลี่ยนมื้ออาหารที่ไม่น่าสนใจให้เป็นประสบการณ์ที่น่าพอใจ",
      subtitle: "เทคโนโลยีที่ใช้กลิ่นที่ปฏิวัติวงการเพื่อลดความอยากเค็มสำหรับผู้ป่วยที่ต้องจำกัดโซเดียม",
      cta: "เรียนรู้เพิ่มเติม",
      reduceSaltCraving: "ลดความอยากเค็มของคุณด้วย",
      designingEnvironments: "ออกแบบสภาพแวดล้อมที่ให้ความสำคัญกับความสุขของผู้ป่วยโดยไม่กระทบต่อสุขภาพ",
      createPersonalPlan: "สร้างแผนส่วนตัวของคุณ"
    },
    page: {
      blandTaste: "อาหารจืดชืด?",
      weFoundSolution: "เราได้พบทางแก้ไข"
    },
    awards: {
      ourPartners: "พันธมิตรของเรา"
    },
    problemStatement: {
      meetAuntieAnn: "พบป้าแอน",
      auntieAnnStory: "เธอเป็นผู้ป่วยโรคไตเรื้อรังที่ติดเกลือ ทุกมื้ออาหารที่จืดชืดรู้สึกเหมือนการลงโทษ ทำให้อาหารทางการแพทย์กลายเป็นการต่อสู้ประจำวัน",
      hospitalDietFatigue: "ความเมื่อยล้าของอาหารโรงพยาบาล",
      cravingManagement: "การจัดการความอยาก",
      qualityOfLife: "คุณภาพชีวิต",
      sevenOfTen: "7 ใน 10",
      patientsLoseAppetite: "ผู้ป่วยสูญเสียความอยากอาหารเนื่องจากอาหารโรงพยาบาลที่จืดชืด",
      tasteFatigue: "ความเมื่อยล้าของรสชาตินำไปสู่การได้รับสารอาหารที่ไม่เพียงพอและการฟื้นตัว",
      sodiumLimit: "2,000 มก.",
      sodiumDailyLimit: "ขีดจำกัดโซเดียมรายวันสำหรับผู้ป่วยที่มีความเสี่ยงสูง",
      lowSodiumRestrictive: "อาหารที่มีโซเดียมต่ำอาจรู้สึกว่าจำกัด",
      cravingsSpike: "ความอยากเพิ่มขึ้นทำให้การปฏิบัติตามยากขึ้น",
      targetConditions: "โรคที่เป็นเป้าหมาย",
      conditionsList: "หัวใจล้มเหลวรุนแรง ตับแข็ง โรคไตอักเสบ & ความดันโลหิตสูงที่ไม่ควบคุม"
    },
    productPreview: {
      sectionTitle: "การกระตุ้นด้วยกลิ่น",
      sectionSubtitle: "โซลูชั่นเฉพาะทางที่ออกแบบมาเพื่อเพิ่มการรับรู้รสชาติผ่านการกระตุ้นประสาทสัมผัสข้ามรูปแบบ",
      beefImpulse: "แรงกระตุ้น 1.5x",
      beefOdor: "กลิ่นเนื้อวัว",
      beefDescription: "กลิ่นเนื้อวัวสามารถกระตุ้นการรับรู้ความเค็มผ่านการกระตุ้นประสาทสัมผัสข้ามรูปแบบ ออกแบบมาโดยเฉพาะเพื่อเพิ่มโปรไฟล์รสชาติของจานโปรตีนหลัก มันนำเสนอโซลูชั่นที่เป็นนวัตกรรมสำหรับผู้ป่วยที่ต้องจำกัดโซเดียม",
      beefFeature1: "สำหรับมื้ออาหารโปรตีนหลัก",
      beefFeature2: "การกระตุ้นประสาทที่แข็งแกร่งที่สุด",
      seaImpulse: "แรงกระตุ้น 1.2x",
      seaBreeze: "สายลมทะเล",
      seaDescription: "สายลมทะเลช่วยเพิ่มสภาพแวดล้อมการรับประทานอาหารโดยให้กลิ่นทะเลที่สดชื่น ช่วยบรรเทาความเครียดของมื้ออาหารที่จืดชืดและเพิ่มความพึงพอใจในหมู่ผู้ป่วยสูงอายุ",
      seaFeature1: "โปรไฟล์ทะเลที่สดชื่น",
      seaFeature2: "เหมาะสำหรับสลัดและของว่างที่ดีต่อสุขภาพ",
      learnMore: "เรียนรู้เพิ่มเติม",
      easyApplication: "การใช้งานง่าย",
      proteinSolutions: "โซลูชั่นโปรตีน",
      seafoodOptions: "ตัวเลือกอาหารทะเล",
      portableFormat: "รูปแบบพกพา"
    },
    proofSection: {
      sectionTitle: "การตรวจสอบทางวิทยาศาสตร์ประสาท",
      pilotStudy: "การศึกษาเบื้องต้นโดยใช้ EEG (การบันทึกคลื่นไฟฟ้าสมอง) ที่โรงพยาบาลศิริราช",
      betaRhythm: "จังหวะเบต้า",
      betaDescription: "ยืนยันการกระตุ้นคลื่นสมองที่แสดงถึงการรับรู้ความเค็มที่แท้จริง",
      eegAnalysis: "การวิเคราะห์คลื่นสมอง EEG",
      impulseTitle: "แรงกระตุ้น 1.5x",
      impulseDescription: "เพิ่มขึ้นอย่างมีนัยสำคัญในการตอบสนองแรงกระตุ้นเกลือด้วยตัวแปรกลิ่นเนื้อวัว",
      neuroResponse: "การตอบสนองประสาทที่วัดได้",
      safetyTitle: "ปลอดภัย 100%",
      safetyDescription: "โปรไฟล์ความปลอดภัยโดยไม่มีการโต้ตอบทางเคมีกับอาหารเอง",
      nonInvasive: "เทคโนโลยีที่ไม่รุกราน"
    },
    contactSection: {
      getInTouch: "ติดต่อเรา",
      getInTouchDescription: "เราอยู่ที่นี่เพื่อตอบคำถามใดๆ ที่คุณอาจมีเกี่ยวกับผลิตภัณฑ์ การวิจัย หรือโอกาสในการเป็นพันธมิตร ติดต่อเราและเราจะตอบกลับโดยเร็วที่สุด",
      phone: "โทรศัพท์",
      phoneNumber: "0889945445",
      phoneHours: "จ.-ศ. 9:00-18:00 ICT",
      email: "อีเมล",
      emailAddress: "hofahoff@gmail.com",
      emailResponse: "เราจะตอบกลับภายใน 24 ชั่วโมง",
      location: "สถานที่ตั้ง",
      locationAddress: "กรุงเทพฯ ประเทศไทย",
      locationVirtual: "พร้อมสำหรับการประชุมเสมือนจริงทั่วโลก",
      aboutOitep: "เกี่ยวกับ OITEP",
      aboutOitepDescription: "OITEP เป็นผู้นำนวัตกรรมโซลูชั่นสำหรับผู้ป่วยที่ต้องจำกัดโซเดียมผ่านการกระตุ้นประสาทสัมผัสข้ามรูปแบบ แนวทางที่เป็นนวัตกรรมของเราช่วยลดความอยากเค็มในขณะที่รักษาความพึงพอใจต่ออาหาร",
      sendMessage: "ส่งข้อความถึงเรา",
      fullName: "ชื่อเต็มของผู้ติดต่อ",
      emailLabel: "อีเมล *",
      company: "หน่วยงาน / บริษัท",
      content: "เนื้อหาที่ต้องการสอบถาม *",
      contentPlaceholder: "บอกเราเกี่ยวกับคำถามของคุณ...",
      sendMessageBtn: "ส่งข้อความ",
      sending: "กำลังส่ง...",
      thankYou: "ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็ว",
      errorMessage: "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง"
    },
    footer: {
      description: "ลดความอยากเค็มผ่านการกระตุ้นประสาทสัมผัสข้ามรูปแบบ ให้โซลูชั่นที่เป็นนวัตกรรมสำหรับผู้ป่วยที่ต้องจำกัดโซเดียม",
      contact: "ติดต่อ",
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
      termsOfService: "ข้อกำหนดการให้บริการ",
      copyright: "© 2024 OITEP. สงวนลิขสิทธิ์ทั้งหมด"
    },
    // Add more translation keys as needed
  }
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: unknown = translations[locale]

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }

  return typeof value === 'string' ? value : key
}

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
